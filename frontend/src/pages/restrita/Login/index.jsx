import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, LogIn, ShieldCheck, Loader2 } from 'lucide-react';
import { styles } from './style';
import logoImg from '../../../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(''); // Controle de erro vindo do backend
  const [carregando, setCarregando] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      // Bate na rota real do backend
      const resposta = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resposta.json();

      // Se a senha estiver errada ou e-mail não existir
      if (!resposta.ok) {
        throw new Error(dados.erro || 'Erro ao tentar fazer login.');
      }

      // 1. Salva o Token e os dados do usuário no navegador
      localStorage.setItem('token', dados.token);
      localStorage.setItem('usuario', JSON.stringify(dados.usuario));

      // 2. Redirecionamento Inteligente baseado no Perfil
      if (dados.usuario.perfil === 'ADMIN_MUNICIPAL') {
        navigate('/gestor-municipal');
      } else if (dados.usuario.perfil === 'GESTOR_UBS') {
        navigate('/gestor-ubs');
      } else {
        throw new Error('Perfil de usuário desconhecido.');
      }

    } catch (err) {
      setErro(err.message); // Exibe a mensagem de erro na tela
    } finally {
      setCarregando(false);
    }
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

        {/* Caixa de Erro Visível se algo der errado */}
        {erro && <div style={styles.caixaErro}>{erro}</div>}

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
            {carregando ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Autenticando...
              </>
            ) : (
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

      {/* LADO DIREITO: APRESENTAÇÃO INSTITUCIONAL */}
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