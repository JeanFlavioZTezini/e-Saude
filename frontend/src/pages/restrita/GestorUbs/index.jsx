import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, CheckCircle, Clock, 
  LogOut, User, Activity, Edit, PlusCircle, X, Save, Loader2
} from 'lucide-react';
import { styles } from './style';

const formatarData = (dataIso) => {
  if (!dataIso) return '';
  const partes = dataIso.split('T')[0].split('-');
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

export default function GestorUbs() {
  const navigate = useNavigate();

  const dadosUnidade = { nome: "UBS Tiradentes" };

  const [minhasIntercorrencias, setMinhasIntercorrencias] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);

  const [modalAberto, setModalAberto] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [idEdicao, setIdEdicao] = useState(null); // <-- NOVO: Controla se estamos editando
  
  const [form, setForm] = useState({
    tipo: '', descricao: '', impacto: 'Baixo', data_ocorrido: ''
  });

// BUSCA OS DADOS REAIS DO BACKEND ASSIM QUE A TELA CARREGA
  useEffect(() => {
    const buscarDados = async () => {
      try {
        const token = localStorage.getItem('token'); // 1. Pega o crachá guardado no login

        const resposta = await fetch(`http://localhost:3000/api/intercorrencias?ubs=${encodeURIComponent(dadosUnidade.nome)}`, {
          headers: {
            'Authorization': `Bearer ${token}` // 2. Mostra o crachá para o backend!
          }
        });
        
        const dados = await resposta.json();

        if (!resposta.ok) throw new Error(dados.erro || 'Falha na requisição');

        setMinhasIntercorrencias(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        setMinhasIntercorrencias([]); // Evita o crash de tela branca se der erro
      } finally {
        setCarregandoDados(false);
      }
    };
    buscarDados();
  }, []);

  const totalRegistros = minhasIntercorrencias.length;
  const pendentes = minhasIntercorrencias.filter(i => i.status === 'Aguardando Validação').length;
  const aguardandoCorrecao = minhasIntercorrencias.filter(i => i.status === 'Aguardando Correção').length;

  const handleSair = () => navigate('/');

  // 👇 NOVA LÓGICA DE ABRuseEffIR O MODAL DE EDIÇÃO 👇
  const handleEditar = (id) => {
    const itemParaEditar = minhasIntercorrencias.find(item => item.id === id);
    if(itemParaEditar) {
      // Ajusta a data para o formato do input type="date" (YYYY-MM-DD)
      const dataFormatadaParaInput = itemParaEditar.data_ocorrido.split('T')[0];
      
      setForm({
        tipo: itemParaEditar.tipo,
        descricao: itemParaEditar.descricao,
        impacto: itemParaEditar.impacto,
        data_ocorrido: dataFormatadaParaInput
      });
      setIdEdicao(id); // Marca que estamos no modo de edição
      setModalAberto(true);
    }
  };

  const abrirModalNova = () => {
    setIdEdicao(null); // Garante que não é edição
    setForm({ tipo: '', descricao: '', impacto: 'Baixo', data_ocorrido: '' });
    setModalAberto(true);
  };

// 👇 LÓGICA DE SALVAR ADAPTADA (CRIAR ou EDITAR) 👇
// 👇 LÓGICA DE SALVAR ADAPTADA (CRIAR ou EDITAR) 👇
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      // 1. Pega o crachá guardado no login
      const token = localStorage.getItem('token'); 

      const payload = {
        ubs_nome: dadosUnidade.nome,
        tipo: form.tipo,
        descricao: form.descricao,
        impacto: form.impacto,
        data_ocorrido: form.data_ocorrido
      };

      const url = idEdicao 
        ? `http://localhost:3000/api/intercorrencias/${idEdicao}` // Rota de PUT (Editar)
        : 'http://localhost:3000/api/intercorrencias';           // Rota de POST (Criar)
      
      const metodo = idEdicao ? 'PUT' : 'POST';

      // 2. Envia a requisição mostrando o crachá no cabeçalho (headers)
      const resposta = await fetch(url, {
        method: metodo,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // <-- MOSTRA O CRACHÁ AQUI!
        },
        body: JSON.stringify(payload)
      });

      if (!resposta.ok) throw new Error('Falha ao comunicar com o servidor');

      const intercorrenciaSalva = await resposta.json();

      if (idEdicao) {
        // Atualiza na lista existente se for edição
        setMinhasIntercorrencias(minhasIntercorrencias.map(item => 
          item.id === idEdicao ? intercorrenciaSalva : item
        ));
      } else {
        // Adiciona no topo da lista se for nova
        setMinhasIntercorrencias([intercorrenciaSalva, ...minhasIntercorrencias]);
      }

      setModalAberto(false);

    } catch (erro) {
      console.error(erro);
      alert('Erro ao salvar os dados.');
    } finally {
      setEnviando(false);
    }
  };

  const renderTagStatus = (status) => {
    if (status === 'Validada') return <span style={styles.tagValidada}>{status}</span>;
    if (status === 'Aguardando Correção') return <span style={styles.tagCorrecao}>{status}</span>;
    return <span style={styles.tagPendente}>{status}</span>; 
  };

  return (
    <div style={styles.dashboardContainer}>
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
                <p style={styles.valorCard}>{carregandoDados ? '-' : pendentes}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#fee2e2', color: '#991b1b'}}>
                <AlertCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Requer Correção</h3>
                <p style={styles.valorCard}>{carregandoDados ? '-' : aguardandoCorrecao}</p>
              </div>
            </div>

            <div style={styles.cardEstatistica}>
              <div style={{...styles.iconeCard, backgroundColor: '#dcfce7', color: '#166534'}}>
                <CheckCircle size={30} />
              </div>
              <div style={styles.infoCard}>
                <h3 style={styles.tituloCard}>Histórico Total</h3>
                <p style={styles.valorCard}>{carregandoDados ? '-' : totalRegistros}</p>
              </div>
            </div>
          </div>

          <div style={styles.secaoTabela}>
            <div style={styles.headerTabela}>
              <h2 style={styles.tituloSecao}><Activity size={24} color="#1a5f7a" /> Histórico de Registros</h2>
              
              <button style={styles.btnNovaIntercorrencia} onClick={abrirModalNova}>
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
                {carregandoDados ? (
                  <tr><td colSpan="6" style={{...styles.td, textAlign: 'center'}}>Carregando dados do banco...</td></tr>
                ) : minhasIntercorrencias.length === 0 ? (
                  <tr><td colSpan="6" style={{...styles.td, textAlign: 'center'}}>Nenhuma intercorrência registrada ainda.</td></tr>
                ) : (
                  minhasIntercorrencias.map((item) => (
                    <tr key={item.id}>
                      <td style={{...styles.td, fontWeight: 'bold', color: '#64748b'}}>#{item.id}</td>
                      <td style={{...styles.td, fontWeight: '600', color: '#0f172a'}}>{item.tipo}</td>
                      <td style={styles.td}>{item.impacto}</td>
                      <td style={styles.td}>{formatarData(item.data_ocorrido)}</td>
                      <td style={styles.td}>{renderTagStatus(item.status)}</td>
                      <td style={styles.td}>
                        {(item.status === 'Aguardando Correção' || item.status === 'Aguardando Validação') && (
                          <button style={styles.btnEditar} onClick={() => handleEditar(item.id)}>
                            <Edit size={16} /> Editar
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ── MODAL (USADO PARA CRIAR E EDITAR) ── */}
      {modalAberto && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {idEdicao ? `Editando Intercorrência #${idEdicao}` : 'Nova Intercorrência'}
              </h2>
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
                  {enviando ? 'Salvando...' : (idEdicao ? 'Salvar Alterações' : 'Salvar Registro')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}