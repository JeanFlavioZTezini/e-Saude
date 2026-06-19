import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft, Lock, Stethoscope, Activity, Map } from 'lucide-react';
import { styles } from './style';

// Simulando nosso banco de dados com informações mais completas
const bancoDeDadosMock = [
  { 
    id: 1, 
    nome: "UBS Tiradentes", 
    endereco: "Av. Ministro João Arinos, S/N", 
    cidade: "Campo Grande - MS", 
    horario: "Segunda a Sexta, das 07:00 às 17:00", 
    telefone: "(67) 3314-3062",
    servicos: ["Clínica Médica", "Pediatria", "Odontologia", "Vacinação", "Farmácia Básica"]
  },
  { 
    id: 2, 
    nome: "USF Moreninhas", 
    endereco: "Rua Anacá, 450 - Moreninha III", 
    cidade: "Campo Grande - MS", 
    horario: "Segunda a Sexta, das 07:00 às 17:00", 
    telefone: "(67) 3314-3255",
    servicos: ["Saúde da Família", "Ginecologia", "Vacinação", "Curativos", "Preventivo"]
  },
  { 
    id: 3, 
    nome: "UBS Coronel Antonino", 
    endereco: "Rua Dr. Meireles, 140", 
    cidade: "Campo Grande - MS", 
    horario: "Atendimento 24h (Urgência e Emergência)", 
    telefone: "(67) 3314-7476",
    servicos: ["Urgência 24h", "Clínica Geral", "Pediatria", "Raio-X", "Eletrocardiograma"]
  },
];

export default function Unidade() {
  const { id } = useParams(); // Pega o ID da unidade direto da URL
  const navigate = useNavigate();
  const [unidade, setUnidade] = useState(null);

  // Simula a busca no banco de dados pelo ID quando a página abre
  useEffect(() => {
    const dados = bancoDeDadosMock.find(ubs => ubs.id === parseInt(id));
    setUnidade(dados);
  }, [id]);

  if (!unidade) {
    return (
      <div style={styles.containerDetalhes}>
        <h2>Carregando informações da unidade...</h2>
      </div>
    );
  }

  const enderecoParaMapa = encodeURIComponent(`${unidade.nome}, ${unidade.endereco}, ${unidade.cidade}`);
  const linkGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${enderecoParaMapa}`;

  return (
    <div>
      {/* CABEÇALHO */}
      <header style={styles.header}>
        <h2 style={styles.logo} onClick={() => navigate('/')}>🩺 e-Saúde</h2>
        <button style={styles.btnAcesso}>
          <Lock size={16} style={{ marginRight: '8px' }} /> Acesso restrito
        </button>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div style={styles.containerDetalhes}>
        <button style={styles.btnVoltar} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Voltar para os resultados
        </button>

        <div style={styles.cardPrincipal}>
          <h1 style={styles.tituloUnidade}>{unidade.nome}</h1>
          
          <div style={styles.gridInfos}>
            <div style={styles.blocoInfo}>
              <h3 style={styles.tituloBloco}><MapPin size={20} /> Endereço</h3>
              <p style={styles.textoInfo}>
                {unidade.endereco}<br/>
                {unidade.cidade}
              </p>
              <a href={linkGoogleMaps} target="_blank" rel="noopener noreferrer" style={{color: '#2b8471', fontWeight: 'bold', textDecoration: 'none', marginTop: '5px'}}>
                Ver rota no Google Maps ↗
              </a>
            </div>

            <div style={styles.blocoInfo}>
              <h3 style={styles.tituloBloco}><Clock size={20} /> Horário de Funcionamento</h3>
              <p style={styles.textoInfo}>{unidade.horario}</p>
            </div>

            <div style={styles.blocoInfo}>
              <h3 style={styles.tituloBloco}><Phone size={20} /> Contato</h3>
              <p style={styles.textoInfo}>{unidade.telefone}</p>
            </div>
          </div>

          <div style={styles.secaoServicos}>
            <h3 style={styles.tituloBloco}><Activity size={20} /> Serviços e Especialidades Disponíveis</h3>
            <div style={styles.tagsWrapper}>
              {unidade.servicos.map((servico, index) => (
                <span key={index} style={styles.tagServico}>
                  <Stethoscope size={14} style={{ marginRight: '5px' }} />
                  {servico}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}