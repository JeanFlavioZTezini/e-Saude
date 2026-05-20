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
    fontSize: '0.9rem'
  },
  banner: {
    backgroundColor: '#9ad0f5', // Cor base igual ao Figma
    /* IMPORTANTE: Quando você exportar a imagem do Figma, remova os comentários abaixo */
    // backgroundImage: 'url("/banner-bg.png")', 
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    padding: '100px 5%', 
    textAlign: 'center',
    width: '100%',
    position: 'relative'
  },
  tituloBanner: {
    color: '#003366',
    fontSize: '3.5rem', 
    marginBottom: '15px',
    fontWeight: '700'
  },
  subtituloBanner: {
    color: '#00509e',
    fontSize: '1.2rem',
    marginBottom: '40px',
    fontWeight: '400'
  },
  buscaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    maxWidth: '900px', 
    margin: '0 auto',
    width: '100%'
  },
  inputWrapper: {
    position: 'relative',
    flex: '1',
    maxWidth: '650px'
  },
  inputBusca: {
    width: '100%',
    padding: '18px 50px 18px 25px', // Espaço extra na direita para a lupa
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
    pointerEvents: 'none'
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
  
  // SEÇÃO DE REGIÕES
  regioesContainer: {
    padding: '60px 5%',
    textAlign: 'center'
  },
  regioesTitulo: {
    color: '#1a5f7a',
    fontSize: '1.2rem',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600'
  },
  botoesWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    width: '100%' /* Removemos o maxWidth para esticar na tela toda */
  },
  btnRegiao: {
    backgroundColor: '#f0f7ff', // Fundo igual ao Figma
    color: '#003366',
    border: '1.5px solid #003366',
    padding: '18px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
    flex: '1', 
    minWidth: '150px'
  },

  // SEÇÃO DE FERRAMENTAS
  ferramentasContainer: {
    padding: '20px 5% 60px 5%'
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%' /* Removemos o maxWidth aqui também */
  },
  cardImc: {
    border: '2px solid #2b8471', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0fbf7', // Fundo levemente verde igual ao Figma
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap' 
  },
  cardHidratacao: {
    border: '2px solid #1a5f7a', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0f7ff' // Fundo levemente azul igual ao Figma
  },
  tituloCard: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 20px 0',
    fontSize: '1.2rem',
    fontWeight: '600'
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
    backgroundColor: '#ffffff'
  },
  tabelaImc: {
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: '400px', 
    fontSize: '1rem',
    flex: '1',
    border: '2px solid #000' // Borda preta forte
  },
  celulaTabela: {
    border: '1px solid #000',
    padding: '8px'
  }
};