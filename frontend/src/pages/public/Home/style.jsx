export const styles = {
  // ── CABEÇALHO ──
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 5%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea'
  },
  logo: {
    color: '#2b8471',
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '700'
  },
  btnAcesso: {
    backgroundColor: '#1a5f7a',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center'
  },

  // ── BANNER PRINCIPAL ──
  banner: {
    backgroundColor: '#9ad0f5',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 5% 120px 5%', 
    textAlign: 'center',
    width: '100%',
    position: 'relative'
  },
  tituloBanner: {
    color: '#003366',
    fontSize: '3.5rem', 
    marginBottom: '15px',
    fontWeight: '700',
    lineHeight: '1.2'
  },
  subtituloBanner: {
    color: '#00509e',
    fontSize: '1.2rem',
    marginBottom: '40px',
    fontWeight: '400'
  },

  // ── BARRA DE BUSCA ──
  buscaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    maxWidth: '900px', 
    margin: '0 auto 50px auto',
    width: '100%',
    position: 'relative'
  },
  inputWrapper: {
    position: 'relative',
    flex: '1',
    maxWidth: '650px'
  },
  inputBusca: {
    width: '100%',
    padding: '18px 50px 18px 25px',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.05)',
    outline: 'none',
    fontSize: '1rem'
  },
  iconeBusca: {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#003366',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  btnBuscar: {
    backgroundColor: '#1a5f7a',
    color: 'white',
    padding: '18px 45px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.05)'
  },

  // ── DROPDOWN DE SUGESTÕES DA BUSCA ──
  dropdownSugestoes: {
    position: 'absolute',
    top: 'calc(100% + 10px)',
    left: '0',
    right: '0',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
    zIndex: 100,
    overflow: 'hidden',
    textAlign: 'left',
    border: '1px solid #eaeaea'
  },
  itemSugestao: {
    padding: '15px 25px',
    borderBottom: '1px solid #f5f5f5',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.2s'
  },
  nomeSugestao: {
    color: '#1a5f7a',
    fontWeight: '700',
    fontSize: '1rem',
    margin: '0 0 4px 0'
  },
  infoSugestao: {
    color: '#777',
    fontSize: '0.85rem',
    margin: 0
  },
  distanciaSugestao: {
    backgroundColor: '#d1fae5',
    color: '#059669',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '700',
    whiteSpace: 'nowrap'
  },

  // ── BOTÕES DE REGIÕES NO BANNER ──
  regioesNoBanner: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: '0 auto'
  },
  btnRegiao: {
    color: 'white',
    border: 'none',
    padding: '14px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    minWidth: '110px',
    flex: '1',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  iconRegiao: {
    height: '32px',
    width: 'auto',
    objectFit: 'contain'
  },
  nomeRegiao: {
    fontSize: '0.95rem',
    fontWeight: '700'
  },

  // ── BALÃO DE ESTADOS ──
  balaoEstados: {
    margin: '-40px 5% 40px 5%',
    padding: '30px',
    borderRadius: '15px',
    border: '2px solid',
    position: 'relative',
    zIndex: 10,
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    animation: 'fadeIn 0.3s ease'
  },
  balaoTitulo: {
    fontSize: '1.1rem',
    fontWeight: '700',
    margin: '0 0 20px 0'
  },
  estadosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '12px'
  },
  btnEstado: {
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    textAlign: 'center'
  },

  // ── SEÇÃO DE FERRAMENTAS ──
  ferramentasContainer: {
    padding: '40px 5% 60px 5%'
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%'
  },
  cardImc: {
    border: '2px solid #2b8471', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0fbf7',
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap' 
  },
  cardHidratacao: {
    border: '2px solid #1a5f7a', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0f7ff'
  },
  tituloCard: {
    width: '100%',
    textAlign: 'left',
    margin: '0 0 20px 0',
    fontSize: '1.2rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '15px'
  },
  inputCalculadora: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    outline: 'none'
  },
  tabelaImc: {
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: '320px', 
    fontSize: '0.95rem',
    flex: '1.2',
    border: '2px solid #000'
  },
  celulaTabela: {
    border: '1px solid #000',
    padding: '10px'
  },

  // ── SEÇÃO SOBRE O PROJETO ──
  sobreContainer: {
    padding: '40px 5%',
    backgroundColor: '#ffffff'
  },
  sobreCard: {
    backgroundColor: '#fbfdfd',
    border: '1px solid #2b8471',
    borderRadius: '15px',
    padding: '40px',
    width: '100%'
  },
  sobreTopico: {
    marginBottom: '30px'
  },
  sobreSubtitulo: {
    color: '#003366',
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '10px',
    display: 'block'
  },
  sobreTexto: {
    color: '#444',
    fontSize: '1rem',
    lineHeight: '1.6',
    textAlign: 'justify'
  },

  // ── RODAPÉ ──
  footerContainer: {
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    padding: '60px 5%',
    color: '#334155',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px'
  },
  footerInfo: {
    maxWidth: '400px'
  },
  footerDescricao: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginTop: '15px',
    lineHeight: '1.5'
  },
  footerColunasWrapper: {
    display: 'flex',
    gap: '80px',
    flexWrap: 'wrap'
  },
  footerColuna: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  footerColunaTitulo: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#0f172a',
    marginBottom: '8px'
  },
  footerLink: {
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'color 0.2s'
  }
};