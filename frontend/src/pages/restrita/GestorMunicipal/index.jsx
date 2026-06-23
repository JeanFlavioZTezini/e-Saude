import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, CheckCircle, Clock, 
  LogOut, User, FileText, Check, X
} from 'lucide-react';
import { styles } from './style';

// Função auxiliar para formatar a data que vem do PostgreSQL
const formatarData = (dataIso) => {
  if (!dataIso) return '';
  const partes = dataIso.split('T')[0].split('-');
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

export default function GestorMunicipal() {
  const navigate = useNavigate();

  const [intercorrencias, setIntercorrencias] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);

  // BUSCA TODAS AS INTERCORRÊNCIAS DE TODAS AS UBS NO BANCO DE DADOS
 // BUSCA TODAS AS INTERCORRÊNCIAS DE TODAS AS UBS NO BANCO DE DADOS
  useEffect(() => {
    const buscarTodas = async () => {
      try {
        const token = localStorage.getItem('token'); // 1. Pega o crachá guardado no login

        const resposta = await fetch('http://localhost:3000/api/intercorrencias', {
          headers: {
            'Authorization': `Bearer ${token}` // 2. Mostra o crachá para o backend!
          }
        });
        
        const dados = await resposta.json();

        if (!resposta.ok) throw new Error(dados.erro || 'Falha na requisição');

        setIntercorrencias(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        setIntercorrencias([]); // Evita o crash de tela branca se der erro
      } finally {
        setCarregandoDados(false);
      }
    };
    buscarTodas();
  }, []);

  // Calculando estatísticas reais baseadas no banco de dados
  const pendentes = intercorrencias.filter(i => i.status === 'Aguardando Validação').length;
  const validadas = intercorrencias.filter(i => i.status === 'Validada').length;
  const aguardandoCorrecao = intercorrencias.filter(i => i.status === 'Aguardando Correção').length;

  const handleSair = () => navigate('/');

// 👇 LÓGICA REAL DE ATUALIZAÇÃO NO BANCO 👇
  const alterarStatusNoBanco = async (id, novoStatus) => {
    try {
      // 1. Pega o crachá que está salvo no navegador
      const token = localStorage.getItem('token'); 

      const resposta = await fetch(`http://localhost:3000/api/intercorrencias/${id}/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          // 2. Envia o crachá para o backend liberar a passagem!
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ status: novoStatus })
      });

      if (!resposta.ok) {
        throw new Error('Falha ao atualizar o status. O servidor recusou.');
      }

      // Se deu certo no banco, atualiza a tela na mesma hora
      setIntercorrencias(intercorrencias.map(item => 
        item.id === id ? { ...item, status: novoStatus } : item
      ));

    } catch (erro) {
      console.error(erro);
      alert('Erro ao tentar atualizar o status da intercorrência.');
    }
  };

  const handleValidar = (id) => {
    alterarStatusNoBanco(id, 'Validada');
  };

  const handleSolicitarCorrecao = (id) => {
    alterarStatusNoBanco(id, 'Aguardando Correção');
  };

  const renderTagStatus = (status) => {
    if (status === 'Validada') return <span style={styles.tagValidada}>{status}</span>;
    if (status === 'Aguardando Correção') return <span style={styles.tagCorrecao}>{status}</span>;
    return <span style={styles.tagPendente}>{status}</span>; 
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* ── MENU LATERAL ── */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>🩺 e-Saúde</div>
        <nav style={styles.menuList}>
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
            <div style={styles.avatar}><User size={24} /></div>
          </div>
        </header>

        <div style={styles.conteudoPainel}>
          <div style={styles.gridCards}>
            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fef3c7', color: '#d97706'}}>
                <Clock size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Pendentes de Validação</h3>
                <p style={styles.valorCard}>{carregandoDados ? '-' : pendentes}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#dcfce7', color: '#166534'}}>
                <CheckCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Validadas no Mês</h3>
                <p style={styles.valorCard}>{carregandoDados ? '-' : validadas}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fee2e2', color: '#991b1b'}}>
                <AlertCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Aguardando Correção</h3>
                <p style={styles.valorCard}>{carregandoDados ? '-' : aguardandoCorrecao}</p>
              </div>
            </div>
          </div>

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
                {carregandoDados ? (
                  <tr><td colSpan="6" style={{...styles.td, textAlign: 'center'}}>Carregando dados do banco...</td></tr>
                ) : intercorrencias.length === 0 ? (
                  <tr><td colSpan="6" style={{...styles.td, textAlign: 'center'}}>Nenhuma intercorrência encontrada.</td></tr>
                ) : (
                  intercorrencias.map((item) => (
                    <tr key={item.id}>
                      <td style={{...styles.td, fontWeight: 'bold', color: '#64748b'}}>#{item.id}</td>
                      <td style={{...styles.td, fontWeight: '600', color: '#1a5f7a'}}>{item.ubs_nome}</td>
                      <td style={styles.td}>{item.tipo}</td>
                      <td style={styles.td}>{formatarData(item.data_ocorrido)}</td>
                      <td style={styles.td}>{renderTagStatus(item.status)}</td>
                      <td style={styles.td}>
                        <div style={styles.wrapperAcoes}>
                          {/* Os botões só aparecem se não estiver validada, para não re-validar o que já foi */}
                          {item.status !== 'Validada' && (
                            <button style={styles.btnValidar} onClick={() => handleValidar(item.id)}>
                              <Check size={16} /> Validar
                            </button>
                          )}
                          {item.status !== 'Validada' && (
                            <button style={styles.btnCorrigir} onClick={() => handleSolicitarCorrecao(item.id)}>
                              <X size={16} /> Corrigir
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}