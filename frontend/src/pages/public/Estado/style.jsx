export const styles = {
  // ── CABEÇALHO (reaproveita o padrão das outras páginas) ──
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
    fontWeight: '700',
    cursor: 'pointer'
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

  // ── CONTAINER PRINCIPAL ──
  containerEstado: {
    padding: '40px 5% 60px 5%',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  linkVoltar: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#666',
    fontSize: '0.9rem',
    textDecoration: 'none',
    cursor: 'pointer',
    marginBottom: '20px'
  },

  // ── CABEÇALHO DO ESTADO ──
  headerEstado: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '10px',
    flexWrap: 'wrap'
  },
  tituloEstado: {
    fontSize: '2rem',
    fontWeight: '700',
    margin: 0
  },
  badgeRegiao: {
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'white'
  },
  subtituloEstado: {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '35px'
  },

  // ── BARRA DE BUSCA DE CIDADES ──
  buscaCidadeWrapper: {
    position: 'relative',
    maxWidth: '420px',
    marginBottom: '25px'
  },
  inputBuscaCidade: {
    width: '100%',
    padding: '14px 18px 14px 44px',
    borderRadius: '10px',
    border: '1.5px solid #ddd',
    fontSize: '0.95rem',
    outline: 'none'
  },
  iconeBuscaCidade: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none'
  },

  // ── LISTA DE CIDADES ──
  contadorCidades: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '15px'
  },
  gridCidades: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '12px'
  },
  btnCidade: {
    backgroundColor: '#ffffff',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    padding: '14px 16px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#333',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.2s ease'
  },

  // ── ESTADOS DE CARREGAMENTO / ERRO / VAZIO ──
  estadoCarregando: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#1a5f7a',
    fontSize: '1rem',
    padding: '40px 0'
  },
  estadoErro: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '10px'
  },
  estadoVazio: {
    backgroundColor: '#f3f4f6',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '10px',
    color: '#555',
    marginTop: '10px'
  }
};
