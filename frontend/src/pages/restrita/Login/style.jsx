export const styles = {
  containerBase: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  colunaFormulario: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 10%',
    backgroundColor: '#ffffff',
    boxShadow: '10px 0 30px rgba(0,0,0,0.02)',
    zIndex: 2
  },
  colunaApresentacao: {
    flex: '1',
    backgroundColor: '#1a5f7a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    color: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  logo: {
    color: '#2b8471',
    fontSize: '2rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '40px',
    cursor: 'pointer'
  },
  tituloLogin: {
    fontSize: '2rem',
    color: '#0f172a',
    marginBottom: '10px',
    fontWeight: '700'
  },
  subtituloLogin: {
    color: '#64748b',
    fontSize: '1rem',
    marginBottom: '30px'
  },
  // 👇 Estilo adicionado para mensagens de erro do backend
  caixaErro: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #fca5a5',
    fontSize: '0.95rem',
    textAlign: 'center',
    marginBottom: '25px',
    fontWeight: '500'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '20px'
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#334155'
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  iconeInput: {
    position: 'absolute',
    left: '15px',
    color: '#94a3b8'
  },
  input: {
    width: '100%',
    padding: '14px 14px 14px 45px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  btnEntrar: {
    backgroundColor: '#2b8471',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.2s'
  },
  btnVoltar: {
    background: 'none',
    border: 'none',
    color: '#64748b',
    marginTop: '30px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '0.95rem',
    fontWeight: '500'
  },
  textoApresentacao: {
    maxWidth: '80%',
    zIndex: 2
  },
  tituloApresentacao: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2'
  },
  descricaoApresentacao: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    lineHeight: '1.6'
  }
};