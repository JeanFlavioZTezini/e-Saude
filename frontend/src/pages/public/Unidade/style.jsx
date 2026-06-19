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
  containerDetalhes: {
    padding: '40px 5%',
    backgroundColor: '#fafbfc',
    minHeight: '80vh'
  },
  btnVoltar: {
    background: 'none',
    border: 'none',
    color: '#1a5f7a',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px'
  },
  cardPrincipal: {
    backgroundColor: '#ffffff',
    border: '1px solid #e1e4e8',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    marginBottom: '30px'
  },
  tituloUnidade: {
    color: '#003366',
    fontSize: '2.2rem',
    marginTop: '0',
    marginBottom: '20px',
    borderBottom: '2px solid #9ad0f5',
    paddingBottom: '15px'
  },
  gridInfos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '20px'
  },
  blocoInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  tituloBloco: {
    color: '#1a5f7a',
    fontSize: '1.1rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 0 10px 0'
  },
  textoInfo: {
    color: '#555',
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: 0
  },
  secaoServicos: {
    backgroundColor: '#f0f7ff',
    borderRadius: '10px',
    padding: '25px',
    marginTop: '30px'
  },
  tagsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '15px'
  },
  tagServico: {
    backgroundColor: '#ffffff',
    color: '#1a5f7a',
    border: '1px solid #9ad0f5',
    padding: '8px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600'
  }
};