// Chamar as dependências que foram instaladas no backend
const express = require('express');
const cors = require('cors');
const axios = require('axios'); 
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json()); 

// ==========================================
// ROTA 1: Teste de Status
// ==========================================
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'ok', 
        mensagem: 'API do sistema rodando perfeitamente!' 
    });
});

// ==========================================
// ROTA 2: Busca de UBS (Com Axios e Fallback)
// ==========================================
app.get('/api/ubs/busca', async (req, res) => {
    try {
        const termoDigitado = req.query.q;

        if (!termoDigitado) {
            return res.status(400).json({ erro: 'Por favor, envie um termo de busca.' });
        }

        console.log(`Buscando UBSs com o termo: "${termoDigitado}"...`);

        // TENTATIVA 1: Conexão com a API real do Governo (DataSUS/CNES)
        try {
            // URL real da API de Dados Abertos do Ministério da Saúde
            const urlGoverno = `https://apidadosabertos.saude.gov.br/cnes/estabelecimentos?nome=${termoDigitado}`;
            
            // No mundo ideal, a requisição seria concluída aqui:
            // const respostaGoverno = await axios.get(urlGoverno, { timeout: 5000 });
            
            /* (Lógica de limpeza dos dados reais viria aqui) */
            
            // Como essa API pública específica exige Tokens governamentais restritos
            // e costuma ficar offline, vamos forçar a simulação de uma falha de conexão 
            // para ativar e testar nossa "Graceful Degradation" (Plano B)
            throw new Error("Acesso negado sem token ou API do governo offline.");

        } catch (erroGoverno) {
            // TENTATIVA 2: O Fallback (Plano B entra em ação)
            console.log("⚠️ API oficial inalcançável. Ativando o Plano B (Base local)...");
            
            // Nossa base de dados de emergência para o sistema nunca cair
            const ubsMockadas = [
                { id: 1, nome: "UBS Tiradentes", endereco: "Av. Ministro João Arinos, S/N", cidade: "Campo Grande - MS", horario: "07:00 às 17:00", telefone: "(67) 3314-3062" },
                { id: 2, nome: "USF Moreninhas", endereco: "Rua Anacá, 450 - Moreninha III", cidade: "Campo Grande - MS", horario: "07:00 às 17:00", telefone: "(67) 3314-3255" },
                { id: 3, nome: "UBS Coronel Antonino", endereco: "Rua Dr. Meireles, 140", cidade: "Campo Grande - MS", horario: "Atendimento 24h", telefone: "(67) 3314-7476" },
            ];

            const resultados = ubsMockadas.filter(ubs => 
                ubs.nome.toLowerCase().includes(termoDigitado.toLowerCase()) || 
                ubs.cidade.toLowerCase().includes(termoDigitado.toLowerCase())
            );

            // Devolvemos os dados locais tranquilamente para o React
            return res.json(resultados);
        }

    } catch (erro) {
        console.error("Erro fatal no servidor:", erro.message);
        res.status(500).json({ erro: 'Falha no servidor.' });
    }
});

// ==========================================
// INICIALIZAÇÃO DO SERVIDOR
// ==========================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor e-Saúde rodando com sucesso na porta ${PORT}`);
});