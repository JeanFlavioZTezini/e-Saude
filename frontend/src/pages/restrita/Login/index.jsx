import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdCard, Lock, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import { styles } from './style';
import logoImg from '../../../assets/logo.png';
import loginBg from '../../../assets/login-bg.png';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    if (!matricula.trim() || !senha.trim()) {
      setErro('Preencha a matrícula/CPF e a senha para continuar.');
      return;
    }

    setCarregando(true);

    // TODO: aqui depois entra a chamada real ao backend (ex: fetch '/api/auth/login')
    // Por enquanto é só visual, então simulamos uma validação fake.
    setTimeout(() => {
      setCarregando(false);
      setErro('Matrícula/CPF ou senha inválidos.'); 
      // Quando o backend estiver pronto, troca isso por:
      // navigate('/restrita/painel');
    }, 900);
  }

  return (
    <div style={styles.pageContainer}>

      {/* ── LADO VISUAL / INSTITUCIONAL ── */}
      <div style={{ ...styles.ladoVisual, backgroundImage: `url(${loginBg})` }} className="lado-visual-login">  
        <div style={styles.overlayLadoVisual}></div>
        <div style={styles.conteudoLadoVisual}>
          <img src={logoImg} alt="Logo e-Saúde" style={styles.logoLadoVisual} />
          <h1 style={styles.tituloLadoVisual}>
            Área restrita<br />e-Saúde
          </h1>
          <p style={styles.textoLadoVisual}>
            Acesso exclusivo para funcionários e gestores da rede pública de saúde.
            Utilize suas credenciais institucionais para entrar.
          </p>
        </div>
      </div>

      {/* ── FORMULÁRIO DE LOGIN ── */}
      <div style={styles.ladoForm} className="lado-form-login">
        <div style={styles.formWrapper}>
          <h2 style={styles.tituloForm}>Entrar</h2>
          <p style={styles.subtituloForm}>
            Informe suas credenciais para acessar o painel administrativo.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Matrícula ou CPF</label>
              <div style={styles.inputWrapper}>
                <span style={styles.iconeInput}><IdCard size={18} /></span>
                <input
                  type="text"
                  placeholder="Digite sua matrícula ou CPF"
                  style={styles.input}
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#0F4C81'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Senha</label>
              <div style={styles.inputWrapper}>
                <span style={styles.iconeInput}><Lock size={18} /></span>
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  style={{ ...styles.input, paddingRight: '42px' }}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#0F4C81'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
                <button
                  type="button"
                  style={styles.iconeSenhaToggle}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {erro && <p style={styles.erroTexto}>{erro}</p>}

            <button
              type="submit"
              style={styles.btnEntrar}
              disabled={carregando}
              onMouseEnter={(e) => { if (!carregando) e.currentTarget.style.backgroundColor = '#0c3a63'; }}
              onMouseLeave={(e) => { if (!carregando) e.currentTarget.style.backgroundColor = '#0F4C81'; }}
            >
              {carregando ? 'Entrando...' : (
                <>
                  <LogIn size={18} /> Entrar
                </>
              )}
            </button>
          </form>

          <div style={styles.avisoRestrito}>
            <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0F4C81' }} />
            Este acesso é destinado exclusivamente a funcionários e gestores autorizados
            da rede pública de saúde. O uso indevido está sujeito às penalidades previstas em lei.
          </div>

          <a style={styles.linkVoltar} onClick={() => navigate('/')}>
            ← Voltar para o site
          </a>
        </div>
      </div>

    </div>
  );
}
