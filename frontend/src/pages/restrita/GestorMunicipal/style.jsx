export const styles = {
  dashboardContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  
  // --- MENU LATERAL (SIDEBAR) ---
  sidebar: {
    width: '260px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '4px 0 15px rgba(0,0,0,0.05)',
    zIndex: 10
  },
  logoArea: {
    padding: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2b8471',
    borderBottom: '1px solid #1e293b'
  },
  menuList: {
    flex: '1',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  menuItem: {
    padding: '15px 25px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#cbd5e1',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderLeft: '4px solid transparent'
  },
  menuItemAtivo: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    borderLeft: '4px solid #2b8471',
    fontWeight: '600'
  },
  logoutArea: {
    padding: '20px 25px',
    borderTop: '1px solid #1e293b'
  },
  btnSair: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#ef4444',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    padding: '10px 0'
  },

  // --- ÁREA PRINCIPAL DO PAINEL ---
  mainContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  headerPanel: {
    backgroundColor: '#ffffff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
  },
  boasVindas: {
    fontSize: '1.4rem',
    color: '#0f172a',
    margin: 0,
    fontWeight: '700'
  },
  subBoasVindas: {
    color: '#64748b',
    fontSize: '0.95rem',
    margin: '5px 0 0 0'
  },
  perfilArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#e2e8f0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1a5f7a',
    fontWeight: 'bold'
  },
  conteudoPainel: {
    padding: '40px',
    overflowY: 'auto',
    flex: '1'
  },

  // --- CARDS DE ESTATÍSTICAS ---
  gridCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '25px',
    marginBottom: '40px'
  },
  cardEstatistica: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  iconeCard: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column'
  },
  tituloCard: {
    color: '#64748b',
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0 0 5px 0'
  },
  valorCard: {
    color: '#0f172a',
    fontSize: '1.8rem',
    fontWeight: '700',
    margin: 0
  },

  // --- TABELA DE INTERCORRÊNCIAS ---
  secaoTabela: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    padding: '25px',
    overflowX: 'auto'
  },
  tituloSecao: {
    color: '#0f172a',
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  tabela: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left'
  },
  th: {
    padding: '15px',
    borderBottom: '2px solid #f1f5f9',
    color: '#64748b',
    fontWeight: '600',
    fontSize: '0.95rem'
  },
  td: {
    padding: '15px',
    borderBottom: '1px solid #f1f5f9',
    color: '#334155',
    fontSize: '0.95rem'
  },
  
  // --- TAGS DE STATUS ---
  tagPendente: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backgroundColor: '#fef3c7',
    color: '#d97706',
    display: 'inline-block'
  },
  tagValidada: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backgroundColor: '#dcfce7',
    color: '#166534',
    display: 'inline-block'
  },
  tagCorrecao: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    display: 'inline-block'
  },

  // --- BOTÕES DE AÇÃO ---
  wrapperAcoes: {
    display: 'flex',
    gap: '8px'
  },
  btnValidar: {
    backgroundColor: '#10b981',
    color: '#ffffff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'opacity 0.2s'
  },
  btnCorrigir: {
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'opacity 0.2s'
  }
};