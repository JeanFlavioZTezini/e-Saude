import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, LogIn, ShieldCheck } from 'lucide-react';
import { styles } from './style';
import logoImg from '../../../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCarregando(true);

    // TODO: Mais para frente, aqui faremos a requisição POST para o seu Backend Node.js
    // bater no banco de dados e verificar se o usuário existe.
    
    console.log("Tentando logar com:", email, senha);
    
    // Simulando um tempo de carregamento e logando o usuário
    setTimeout(() => {
      setCarregando(false);
      navigate('/gestor-municipal'); // Redireciona para o painel!
    }, 1500);
  };

  return (
    <div style={styles.containerBase}>
      
      {/* LADO ESQUERDO: FORMULÁRIO DE LOGIN */}
      <div style={styles.colunaFormulario}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          <img src={logoImg} alt="Logo e-Saúde" style={{ height: '40px' }} />
          e-Saúde
        </div>

        <h1 style={styles.tituloLogin}>Acesso Restrito</h1>
        <p style={styles.subtituloLogin}>Insira suas credenciais para acessar o painel da unidade.</p>

        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>E-mail institucional</label>
            <div style={styles.inputWrapper}>
              <Mail size={20} style={styles.iconeInput} />
              <input 
                type="email" 
                placeholder="nome@esaude.gov.br" 
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Senha</label>
            <div style={styles.inputWrapper}>
              <Lock size={20} style={styles.iconeInput} />
              <input 
                type="password" 
                placeholder="••••••••" 
                style={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" style={styles.btnEntrar} disabled={carregando}>
            {carregando ? 'Verificando...' : (
              <>
                Entrar no sistema <LogIn size={20} />
              </>
            )}
          </button>
        </form>

        <button style={styles.btnVoltar} onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Voltar para a página inicial
        </button>
      </div>

      {/* LADO DIREITO: APRESENTAÇÃO INSTITUCIONAL (Opcional, mas dá um visual incrível) */}
      <div style={styles.colunaApresentacao}>
        <ShieldCheck size={80} color="#9ad0f5" style={{ marginBottom: '30px' }} />
        <div style={styles.textoApresentacao}>
          <h2 style={styles.tituloApresentacao}>Gestão Inteligente<br/>de Saúde Pública</h2>
          <p style={styles.descricaoApresentacao}>
            Este é um ambiente seguro destinado exclusivamente aos profissionais de saúde e administradores de unidades cadastradas no sistema e-Saúde.
          </p>
        </div>
      </div>

    </div>
  );
}