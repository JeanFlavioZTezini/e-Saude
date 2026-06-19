export const styles = {
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
  containerBusca: {
    padding: '40px 5%',
    backgroundColor: '#fafbfc',
    minHeight: '80vh'
  },
  tituloBusca: {
    color: '#003366',
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  gridResultados: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
    marginTop: '30px'
  },
  cardUbs: {
    backgroundColor: '#ffffff',
    border: '1px solid #e1e4e8',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  nomeUbs: {
    color: '#1a5f7a',
    fontSize: '1.3rem',
    fontWeight: '700',
    margin: 0
  },
  infoLinha: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: '1.4'
  },
  botoesWrapper: {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
    paddingTop: '10px'
  },
  btnDetalhes: {
    flex: '1',
    backgroundColor: '#f0f7ff',
    color: '#1a5f7a',
    border: '1px solid #1a5f7a',
    padding: '12px',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
  },
  btnMapa: {
    flex: '1',
    backgroundColor: '#4ade80',
    color: '#003366',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none'
  }
};