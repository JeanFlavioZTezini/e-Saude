import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, CheckCircle, Clock, 
  LogOut, User, Activity, Edit, PlusCircle, X, Save, Loader2
} from 'lucide-react';
import { styles } from './style';

export default function GestorUbs() {
  const navigate = useNavigate();

  const dadosUnidade = {
    nome: "UBS Tiradentes",
    totalRegistros: 24,
    pendentes: 2,
    aguardandoCorrecao: 1
  };

  const [minhasIntercorrencias, setMinhasIntercorrencias] = useState([
    { id: 101, tipo: 'Falta de Insumo (Vacina contra Gripe)', data: '18/06/2026', impacto: 'Alto', status: 'Aguardando Validação' },
    { id: 98, tipo: 'Queda de Internet', data: '15/06/2026', impacto: 'Médio', status: 'Validada' },
    { id: 90, tipo: 'Ar condicionado quebrado (Sala de Vacina)', data: '10/06/2026', impacto: 'Alto', status: 'Aguardando Correção' },
  ]);

  // --- ESTADOS DO MODAL E DO FORMULÁRIO ---
  const [modalAberto, setModalAberto] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({
    tipo: '',
    descricao: '',
    impacto: 'Baixo',
    data_ocorrido: ''
  });

  const handleSair = () => navigate('/');
  const handleEditar = (id) => alert(`Abrindo modo de edição para a intercorrência #${id}...`);

  const renderTagStatus = (status) => {
    if (status === 'Validada') return <span style={styles.tagValidada}>{status}</span>;
    if (status === 'Aguardando Correção') return <span style={styles.tagCorrecao}>{status}</span>;
    return <span style={styles.tagPendente}>{status}</span>; 
  };

  // --- LÓGICA DE INTEGRAÇÃO COM O BACKEND ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      // Formata os dados para o envio
      const payload = {
        ubs_nome: dadosUnidade.nome,
        tipo: form.tipo,
        descricao: form.descricao,
        impacto: form.impacto,
        data_ocorrido: form.data_ocorrido
      };

      const resposta = await fetch('http://localhost:3000/api/intercorrencias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resposta.ok) throw new Error('Falha ao registrar no servidor');

      const novaIntercorrencia = await resposta.json();

      // Formata a data recebida do banco (ex: 2026-06-20 -> 20/06/2026)
      const partesData = novaIntercorrencia.data_ocorrido.split('T')[0].split('-');
      const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

      // Adiciona o novo registro no topo da tabela da tela instantaneamente
      setMinhasIntercorrencias([
        {
          id: novaIntercorrencia.id,
          tipo: novaIntercorrencia.tipo,
          data: dataFormatada,
          impacto: novaIntercorrencia.impacto,
          status: novaIntercorrencia.status
        },
        ...minhasIntercorrencias
      ]);

      // Fecha e limpa o modal
      setModalAberto(false);
      setForm({ tipo: '', descricao: '', impacto: 'Baixo', data_ocorrido: '' });

    } catch (erro) {
      console.error(erro);
      alert('Erro ao comunicar com o servidor. Verifique se o backend está rodando.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      
      {/* ── MENU LATERAL ── */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>🩺 e-Saúde</div>
        <nav style={styles.menuList}>
          <div style={{...styles.menuItem, ...styles.menuItemAtivo}}>
            <Activity size={20} /> Minhas Intercorrências
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
            <h1 style={styles.boasVindas}>{dadosUnidade.nome}</h1>
            <p style={styles.subBoasVindas}>Painel de Gestão da Unidade</p>
          </div>
          <div style={styles.perfilArea}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold', color: '#0f172a' }}>Gestor Responsável</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Acesso Local</span>
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
                <h3 style={styles.tituloCard}>Aguardando Validação</h3>
                <p style={styles.valorCard}>{dadosUnidade.pendentes}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fee2e2', color: '#991b1b'}}>
                <AlertCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Requer Correção</h3>
                <p style={styles.valorCard}>{dadosUnidade.aguardandoCorrecao}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#dcfce7', color: '#166534'}}>
                <CheckCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Histórico Total (Mês)</h3>
                <p style={styles.valorCard}>{dadosUnidade.totalRegistros}</p>
              </div>
            </div>
          </div>

          <div style={styles.secaoTabela}>
            <div style={styles.headerTabela}>
              <h2 style={styles.tituloSecao}><Activity size={24} color="#1a5f7a" /> Histórico de Registros</h2>
              
              {/* BOTÃO QUE ABRE O MODAL */}
              <button style={styles.btnNovaIntercorrencia} onClick={() => setModalAberto(true)}>
                <PlusCircle size={18} /> Registrar Intercorrência
              </button>
            </div>

            <table style={styles.tabela}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Descrição do Problema</th>
                  <th style={styles.th}>Grau de Impacto</th>
                  <th style={styles.th}>Data Ocorrido</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {minhasIntercorrencias.map((item) => (
                  <tr key={item.id}>
                    <td style={{...styles.td, fontWeight: 'bold', color: '#64748b'}}>#{item.id}</td>
                    <td style={{...styles.td, fontWeight: '600', color: '#0f172a'}}>{item.tipo}</td>
                    <td style={styles.td}>{item.impacto}</td>
                    <td style={styles.td}>{item.data}</td>
                    <td style={styles.td}>{renderTagStatus(item.status)}</td>
                    <td style={styles.td}>
                      {(item.status === 'Aguardando Correção' || item.status === 'Aguardando Validação') && (
                        <button style={styles.btnEditar} onClick={() => handleEditar(item.id)}>
                          <Edit size={16} /> Editar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ── MODAL DE REGISTRO (FORMULÁRIO) ── */}
      {modalAberto && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Nova Intercorrência</h2>
              <button style={{background: 'none', border: 'none', cursor: 'pointer'}} onClick={() => setModalAberto(false)}>
                <X size={24} color="#64748b" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Tipo da Ocorrência *</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  required
                  placeholder="Ex: Falta de Insumo, Queda de Energia..."
                  value={form.tipo}
                  onChange={(e) => setForm({...form, tipo: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Descrição Detalhada *</label>
                <textarea 
                  style={{...styles.input, minHeight: '100px', resize: 'vertical'}} 
                  required
                  placeholder="Descreva o problema com o máximo de detalhes..."
                  value={form.descricao}
                  onChange={(e) => setForm({...form, descricao: e.target.value})}
                />
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ ...styles.formGroup, flex: 1 }}>
                  <label style={styles.label}>Data do Ocorrido *</label>
                  <input 
                    type="date" 
                    style={styles.input} 
                    required
                    value={form.data_ocorrido}
                    onChange={(e) => setForm({...form, data_ocorrido: e.target.value})}
                  />
                </div>

                <div style={{ ...styles.formGroup, flex: 1 }}>
                  <label style={styles.label}>Impacto Operacional</label>
                  <select 
                    style={styles.input}
                    value={form.impacto}
                    onChange={(e) => setForm({...form, impacto: e.target.value})}
                  >
                    <option value="Baixo">Baixo</option>
                    <option value="Médio">Médio</option>
                    <option value="Alto">Alto</option>
                    <option value="Crítico">Crítico</option>
                  </select>
                </div>
              </div>

              <div style={styles.modalActions}>
                <button type="button" style={styles.btnCancelar} onClick={() => setModalAberto(false)}>
                  Cancelar
                </button>
                <button type="submit" style={styles.btnSalvar} disabled={enviando}>
                  {enviando ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  {enviando ? 'Salvando...' : 'Salvar Registro'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}