const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Função matemática para calcular distância entre duas coordenadas (Fórmula de Haversine)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em KM
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Retorna a distância em KM
}

// Nossa base simulada agora tem Coordenadas Geográficas reais!
const baseDeDadosMock = [
    { id: 1, nome: "UBS Tiradentes", endereco: "Av. Ministro João Arinos, S/N", cidade: "Campo Grande - MS", horario: "07:00 às 17:00", telefone: "(67) 3314-3062", lat: -20.4635, lng: -54.5724 },
    { id: 2, nome: "USF Moreninhas", endereco: "Rua Anacá, 450", cidade: "Campo Grande - MS", horario: "07:00 às 17:00", telefone: "(67) 3314-3255", lat: -20.5500, lng: -54.5800 },
    { id: 3, nome: "UBS Coronel Antonino", endereco: "Rua Dr. Meireles, 140", cidade: "Campo Grande - MS", horario: "Atendimento 24h", telefone: "(67) 3314-7476", lat: -20.4190, lng: -54.6060 },
    // Adicionamos uma no RJ para você testar a busca por qualquer lugar
    { id: 4, nome: "Centro Municipal de Saúde Píndaro de Carvalho Rodrigues", endereco: "R. Padre Leonel Franca, 248 - Gávea/Leblon", cidade: "Rio de Janeiro - RJ", horario: "08:00 às 17:00", telefone: "(21) 2274-8042", lat: -22.9772, lng: -43.2325 }
];

app.get('/api/ubs/busca', (req, res) => {
    try {
        const termoDigitado = req.query.q ? req.query.q.toLowerCase() : '';
        const userLat = parseFloat(req.query.lat);
        const userLng = parseFloat(req.query.lng);

        let resultados = baseDeDadosMock;

        // REGRA 1: Se o usuário digitou apenas "ubs", "posto", ou deixou em branco E permitiu o GPS
        if ((termoDigitado === 'ubs' || termoDigitado === 'posto' || termoDigitado === '') && userLat && userLng) {
            console.log(`📍 Calculando unidades mais próximas de: ${userLat}, ${userLng}`);
            
            // Calcula a distância de cada UBS para o usuário
            resultados = resultados.map(ubs => {
                const distanciaKm = calcularDistancia(userLat, userLng, ubs.lat, ubs.lng);
                return { ...ubs, distancia: distanciaKm };
            });

            // Ordena da mais perto para a mais longe
            resultados.sort((a, b) => a.distancia - b.distancia);

            // Devolve apenas as num raio de até 50km (para não mostrar posto do RJ pra quem tá no MS)
            resultados = resultados.filter(ubs => ubs.distancia <= 50);
        } 
        // REGRA 2: Busca por texto normal (ex: "Leblon", "Moreninhas")
        else if (termoDigitado && termoDigitado !== 'ubs') {
            console.log(`🔍 Buscando unidades por texto: "${termoDigitado}"...`);
            resultados = resultados.filter(ubs => 
                ubs.nome.toLowerCase().includes(termoDigitado) || 
                ubs.cidade.toLowerCase().includes(termoDigitado) ||
                ubs.endereco.toLowerCase().includes(termoDigitado)
            );
        }

        res.json(resultados);

    } catch (erro) {
        console.error("Erro no servidor:", erro.message);
        res.status(500).json({ erro: 'Falha ao buscar dados.' });
    }
});

const siglasPorEstado = {
    'acre': 'AC', 'alagoas': 'AL', 'amapa': 'AP', 'amazonas': 'AM',
    'bahia': 'BA', 'ceara': 'CE', 'distrito-federal': 'DF', 'espirito-santo': 'ES',
    'goias': 'GO', 'maranhao': 'MA', 'mato-grosso': 'MT', 'mato-grosso-do-sul': 'MS',
    'minas-gerais': 'MG', 'para': 'PA', 'paraiba': 'PB', 'parana': 'PR',
    'pernambuco': 'PE', 'piaui': 'PI', 'rio-de-janeiro': 'RJ', 'rio-grande-do-norte': 'RN',
    'rio-grande-do-sul': 'RS', 'rondonia': 'RO', 'roraima': 'RR', 'santa-catarina': 'SC',
    'sao-paulo': 'SP', 'sergipe': 'SE', 'tocantins': 'TO'
};

app.get('/api/estados/:slug/cidades', async (req, res) => {
    try {
        const slug = req.params.slug.toLowerCase();
        const sigla = siglasPorEstado[slug];

        if (!sigla) {
            return res.status(404).json({ erro: 'Estado não encontrado.' });
        }

        console.log(`🏙️ Buscando cidades do estado: ${sigla}`);

        const resposta = await axios.get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`
        );

        // Simplifica os dados, devolvendo só o que o frontend precisa
        const cidades = resposta.data.map(municipio => ({
            id: municipio.id,
            nome: municipio.nome
        })).sort((a, b) => a.nome.localeCompare(b.nome));

        res.json(cidades);

    } catch (erro) {
        console.error("Erro ao buscar cidades do IBGE:", erro.message);
        res.status(500).json({ erro: 'Falha ao buscar cidades.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Motor de Geolocalização ligado na porta ${PORT}`);
});