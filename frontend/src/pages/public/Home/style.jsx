export const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    alignItems: 'center'
  },
  logo: {
    color: '#2b8471',
    margin: 0
  },
  btnAcesso: {
    backgroundColor: '#1a5f7a',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  banner: {
    backgroundColor: '#cce5ff',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative'
  },
  tituloBanner: {
    color: '#003366',
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  subtituloBanner: {
    color: '#00509e',
    fontSize: '1.2rem',
    marginBottom: '30px'
  },
  buscaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  inputBusca: {
    width: '100%',
    padding: '15px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  btnBuscar: {
    backgroundColor: '#1a5f7a',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer'
  },
  regioesContainer: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#ffffff'
  },
  regioesTitulo: {
    color: '#1a5f7a',
    fontSize: '1rem',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  botoesWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Permite que os botões quebrem de linha em telas menores
    gap: '15px'
  },
  btnRegiao: {
    backgroundColor: 'transparent',
    color: '#003366',
    border: '1px solid #003366',
    padding: '10px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    minWidth: '120px'
  },
  ferramentasContainer: {
    padding: '40px 20px',
    backgroundColor: '#ffffff'
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  cardImc: {
    border: '2px solid #2b8471', 
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: 'white',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap' 
  },
  cardHidratacao: {
    border: '2px solid #1a5f7a', 
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: 'white'
  },
  tituloCard: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 20px 0',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '15px'
  },
  inputCalculadora: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  tabelaImc: {
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: '300px',
    fontSize: '0.9rem',
    flex: '1'
  }
};