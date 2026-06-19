import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Lock, Map } from 'lucide-react';
import { styles } from './style';

// Dados simulados para testarmos o visual antes de ligar no banco de dados real
const ubsMock = [
  { 
    id: 1, 
    nome: "UBS Tiradentes", 
    endereco: "Av. Ministro João Arinos, S/N", 
    cidade: "Campo Grande - MS", 
    horario: "07:00 às 17:00", 
    telefone: "(67) 3314-3062" 
  },
  { 
    id: 2, 
    nome: "USF Moreninhas", 
    endereco: "Rua Anacá, 450 - Moreninha III", 
    cidade: "Campo Grande - MS", 
    horario: "07:00 às 17:00", 
    telefone: "(67) 3314-3255" 
  },
  { 
    id: 3, 
    nome: "UBS Coronel Antonino", 
    endereco: "Rua Dr. Meireles, 140", 
    cidade: "Campo Grande - MS", 
    horario: "Atendimento 24h", 
    telefone: "(67) 3314-7476" 
  },
];

export default function Busca() {
  const [searchParams] = useSearchParams();
  const termoDigitado = searchParams.get('q') || '';
  const navigate = useNavigate();

  // Filtra as unidades baseadas no que foi digitado na URL
  const resultados = termoDigitado 
    ? ubsMock.filter(ubs => 
        ubs.nome.toLowerCase().includes(termoDigitado.toLowerCase()) || 
        ubs.cidade.toLowerCase().includes(termoDigitado.toLowerCase())
      )
    : ubsMock;

  return (
    <div>
      {/* CABEÇALHO */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <h2 style={styles.logo}>🩺 e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso}>
          <Lock size={16} style={{ marginRight: '8px' }} /> Acesso restrito
        </button>
      </header>

      {/* RESULTADOS DA BUSCA */}
      <div style={styles.containerBusca}>
        <h1 style={styles.tituloBusca}>
          {termoDigitado ? `Resultados para: "${termoDigitado}"` : "Todas as Unidades de Saúde"}
        </h1>

        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Encontramos {resultados.length} unidade(s) correspondente(s).
        </p>

        <div style={styles.gridResultados}>
          {resultados.map((ubs) => {
            // Prepara a URL segura para abrir o Google Maps
            const enderecoParaMapa = encodeURIComponent(`${ubs.nome}, ${ubs.endereco}, ${ubs.cidade}`);
            const linkGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${enderecoParaMapa}`;

            return (
              <div key={ubs.id} style={styles.cardUbs}>
                <h3 style={styles.nomeUbs}>{ubs.nome}</h3>
                
                <div style={styles.infoLinha}>
                  <MapPin size={18} color="#2b8471" style={{ flexShrink: 0 }} />
                  <span>{ubs.endereco} <br/> <small style={{ color: '#888' }}>{ubs.cidade}</small></span>
                </div>
                
                <div style={styles.infoLinha}>
                  <Clock size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <span>{ubs.horario}</span>
                </div>

                <div style={styles.infoLinha}>
                  <Phone size={18} color="#3b82f6" style={{ flexShrink: 0 }} />
                  <span>{ubs.telefone}</span>
                </div>

                {/* BOTÕES DE AÇÃO DO CARD */}
                <div style={styles.botoesWrapper}>
                  <button style={styles.btnDetalhes} onClick={() => alert('Em breve: Tela de detalhes da unidade!')}>
                    Informações <ArrowRight size={16} />
                  </button>
                  
                  <a 
                    href={linkGoogleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.btnMapa}
                  >
                    <Map size={16} /> Rota
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}