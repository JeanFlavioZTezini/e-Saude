import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, CheckCircle, Clock, 
  LogOut, User, FileText, Check, X
} from 'lucide-react';
import { styles } from './style';

export default function GestorMunicipal() {
  const navigate = useNavigate();

  // Dados simulados baseados na documentação de intercorrências do CNES
  const estatisticas = {
    pendentes: 12,
    validadas: 158,
    aguardandoCorrecao: 5
  };

  // Tabela simulando os registros enviados pelos Gestores das UBS
  const [intercorrencias, setIntercorrencias] = useState([
    { id: 101, ubs: 'UBS Tiradentes', tipo: 'Falta de Insumo (Vacina)', data: '18/06/2026', status: 'Aguardando Validação' },
    { id: 102, ubs: 'USF Moreninhas', tipo: 'Queda de Energia', data: '19/06/2026', status: 'Aguardando Validação' },
    { id: 103, ubs: 'UBS Coronel Antonino', tipo: 'Ausência de Profissional', data: '19/06/2026', status: 'Aguardando Validação' },
    { id: 104, ubs: 'USF Los Angeles', tipo: 'Equipamento Quebrado (Raio-X)', data: '20/06/2026', status: 'Aguardando Validação' },
  ]);

  const handleSair = () => {
    navigate('/');
  };

  // Funções de simulação de validação e correção
  const handleValidar = (id) => {
    alert(`Intercorrência #${id} alterada para VALIDADA no sistema.`);
  };

  const handleSolicitarCorrecao = (id) => {
    alert(`Notificação enviada ao gestor da UBS para correção da intercorrência #${id}.`);
  };

  return (
    <div style={styles.dashboardContainer}>
      
      {/* ── MENU LATERAL ── */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          🩺 e-Saúde
        </div>
        
        <nav style={styles.menuList}>
          {/* Menu focado estritamente na função do Administrador Municipal */}
          <div style={{...styles.menuItem, ...styles.menuItemAtivo}}>
            <FileText size={20} /> Validação de Registros
          </div>
        </nav>

        <div style={styles.logoutArea}>
          <button style={styles.btnSair} onClick={handleSair}>
            <LogOut size={20} /> Sair do Sistema
          </button>
        </div>
      </aside>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <main style={styles.mainContent}>
        
        <header style={styles.headerPanel}>
          <div>
            <h1 style={styles.boasVindas}>Olá, Administrador Municipal!</h1>
            <p style={styles.subBoasVindas}>Gerencie e valide as intercorrências registradas pelas unidades.</p>
          </div>
          <div style={styles.perfilArea}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold', color: '#0f172a' }}>Prefeitura Municipal</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Administrador</span>
            </div>
            <div style={styles.avatar}>
              <User size={24} />
            </div>
          </div>
        </header>

        <div style={styles.conteudoPainel}>
          
          {/* Grid de Estatísticas Focado em Intercorrências */}
          <div style={styles.gridCards}>
            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fef3c7', color: '#d97706'}}>
                <Clock size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Pendentes de Validação</h3>
                <p style={styles.valorCard}>{estatisticas.pendentes}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#dcfce7', color: '#166534'}}>
                <CheckCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Validadas no Mês</h3>
                <p style={styles.valorCard}>{estatisticas.validadas}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fee2e2', color: '#991b1b'}}>
                <AlertCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Aguardando Correção</h3>
                <p style={styles.valorCard}>{estatisticas.aguardandoCorrecao}</p>
              </div>
            </div>
          </div>

          {/* Tabela de Intercorrências para Validação */}
          <div style={styles.secaoTabela}>
            <h2 style={styles.tituloSecao}><FileText size={24} color="#2b8471" /> Fila de Intercorrências Recentes</h2>
            <table style={styles.tabela}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Unidade (UBS)</th>
                  <th style={styles.th}>Tipo de Ocorrência</th>
                  <th style={styles.th}>Data</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Ação de Gestão</th>
                </tr>
              </thead>
              <tbody>
                {intercorrencias.map((item) => (
                  <tr key={item.id}>
                    <td style={{...styles.td, fontWeight: 'bold', color: '#64748b'}}>#{item.id}</td>
                    <td style={{...styles.td, fontWeight: '600', color: '#1a5f7a'}}>{item.ubs}</td>
                    <td style={styles.td}>{item.tipo}</td>
                    <td style={styles.td}>{item.data}</td>
                    <td style={styles.td}>
                      <span style={styles.tagPendente}>{item.status}</span>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.wrapperAcoes}>
                        <button style={styles.btnValidar} onClick={() => handleValidar(item.id)}>
                          <Check size={16} /> Validar
                        </button>
                        <button style={styles.btnCorrigir} onClick={() => handleSolicitarCorrecao(item.id)}>
                          <X size={16} /> Corrigir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}