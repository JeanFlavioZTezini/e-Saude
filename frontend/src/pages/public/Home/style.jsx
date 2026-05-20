// Exportamos a constante styles para ser usada como objeto CSS no index.jsx
export const styles = {
  
  // --- ESTILOS DO CABEÇALHO ---
  header: {
    display: 'flex', // Coloca os itens lado a lado
    justifyContent: 'space-between', // Joga a logo pra esquerda e o botão pra direita
    padding: '20px 5%', // 20px em cima/baixo e 5% nas laterais para alinhar com a tela
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea' // Linha sutil separando o cabeçalho do banner
  },
  logo: {
    color: '#0F4C81',
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    fontWeight: '700'
  },
  btnAcesso: {
    backgroundColor: '#1a5f7a',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '25px', // Borda arredondada (formato de pílula)
    cursor: 'pointer', // Muda a setinha do mouse para a mãozinha
    fontWeight: '600',
    fontSize: '0.9rem'
  },

  // --- ESTILOS DO BANNER PRINCIPAL ---
  banner: {
    backgroundColor: '#9ad0f5', // Cor de fundo azul clara
    backgroundImage: 'url("")', // Imagem de fundo do banner
    backgroundSize: 'cover', // Faz a imagem preencher todo o espaço
    backgroundPosition: 'center', // Centraliza a imagem de fundo
    padding: '100px 5%', 
    textAlign: 'center', // Centraliza o texto do título e subtítulo
    width: '100%',
    //height: '550px', // Altura fixa para o banner
    position: 'relative' // Necessário caso queiramos posicionar algo absoluto aqui dentro
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

  // --- ESTILOS DA BARRA DE BUSCA ---
  buscaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Espaço entre o input de texto e o botão buscar
    maxWidth: '900px', // Limita a largura para não ficar gigante em monitores ultrawide
    margin: '0 auto', // Centraliza o container na tela
    width: '100%'
  },
  inputWrapper: {
    position: 'relative', // Permite colocar a lupa flutuando aqui dentro
    flex: '1', // Faz o input crescer para ocupar o espaço disponível
    maxWidth: '650px'
  },
  inputBusca: {
    width: '100%',
    padding: '18px 50px 18px 25px', // O 50px na direita abre espaço para não digitar em cima da lupa
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.27)', // Sombra suave
    outline: 'none', // Remove aquela borda preta feia ao clicar no input
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
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.27)'
  },
  
  // --- ESTILOS DA SEÇÃO DE REGIÕES ---
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
    display: 'flex', // Botões lado a lado
    justifyContent: 'space-between',
    gap: '20px', // Espaço entre os botões
    width: '100%' // Ocupa a largura toda disponível
  },
  btnRegiao: {
    backgroundColor: '#f0f7ff',
    color: '#003366',
    border: '1.5px solid #003366',
    padding: '18px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
    flex: '1', // A MÁGICA: Faz com que todos os botões se estiquem igualmente para preencher a tela
    minWidth: '150px' // Impede que eles fiquem espremidos no celular
  },

  // --- ESTILOS DAS FERRAMENTAS DE SAÚDE ---
  ferramentasContainer: {
    padding: '20px 5% 60px 5%'
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column', // Coloca um card em cima do outro
    gap: '20px',
    width: '100%'
  },
  cardImc: {
    border: '2px solid #2b8471', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0fbf7', 
    display: 'flex', // Coloca o formulário e a tabela lado a lado
    gap: '40px',
    flexWrap: 'wrap' // Se a tela for pequena (celular), joga a tabela pra baixo do formulário
  },
  cardHidratacao: {
    border: '2px solid #1a5f7a', 
    borderRadius: '10px',
    padding: '30px',
    backgroundColor: '#f0f7ff' 
  },
  tituloCard: {
    width: '100%', // Ocupa 100% da linha do flex, forçando os itens seguintes para a linha de baixo
    textAlign: 'center',
    margin: '0 0 20px 0',
    fontSize: '1.2rem',
    fontWeight: '600'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column', // Coloca a Label em cima do Input
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
    borderCollapse: 'collapse', // Tira o espaçamento duplo padrão das bordas das tabelas HTML
    width: '100%',
    minWidth: '400px', 
    fontSize: '1rem',
    flex: '1', // Faz a tabela crescer e preencher o espaço lateral vazio do card
    border: '2px solid #000' 
  },
  celulaTabela: {
    border: '1px solid #000',
    padding: '8px'
  },

  // --- ESTILOS DA SEÇÃO SOBRE O PROJETO ---
  sobreContainer: {
    padding: '40px 5%',
    backgroundColor: '#ffffff'
  },
  sobreCard: {
    backgroundColor: '#f0f7ff', 
    border: '1px solid #1a5f7a',
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
    display: 'block' // Força o span (que é inline por padrão) a se comportar como bloco
  },
  sobreTexto: {
    color: '#444',
    fontSize: '1rem',
    lineHeight: '1.6', // Aumenta o espaço entre as linhas para melhor leitura
    textAlign: 'justify' // Texto alinhado como em jornal/documento oficial
  },

  // --- ESTILOS DO RODAPÉ (FOOTER) ---
  footerContainer: {
    backgroundColor: '#001a2c', 
    padding: '60px 5%',
    color: 'white',
    display: 'flex', // Coloca as info da logo e as colunas de links lado a lado
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Permite quebrar linha em telas pequenas
    gap: '40px'
  },
  footerInfo: {
    maxWidth: '400px' // Limita o tamanho do texto explicativo da esquerda
  },
  footerDescricao: {
    fontSize: '0.9rem',
    color: '#ccc', // Cinza claro para contrastar com o fundo escuro
    marginTop: '15px',
    lineHeight: '1.5'
  },
  footerColunasWrapper: {
    display: 'flex',
    gap: '80px', // Grande espaço entre cada coluna de links
    flexWrap: 'wrap'
  },
  footerColuna: {
    display: 'flex',
    flexDirection: 'column', // Links um embaixo do outro
    gap: '12px'
  },
  footerColunaTitulo: {
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '8px'
  },
  footerLink: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer' // Mostra que é clicável
  }


};