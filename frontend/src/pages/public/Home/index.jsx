import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Droplets, Wrench, Info, Lock, ChevronDown, Calculator } from 'lucide-react';
import { styles } from './style';
import { regioes } from './regioes';
import logoImg from '../../../assets/logo.png';
import bannerBg from '../../../assets/banner-bg.jpg';

import regiaoNorte from '../../../assets/regiao_norte.png';
import regiaoNordeste from '../../../assets/regiao_nordeste.png';
import regiaoCentroOeste from '../../../assets/regiao_centro_oeste.png';
import regiaoSudeste from '../../../assets/regiao_sudeste.png';
import regiaoSul from '../../../assets/regiao_sul.png';

const imagensRegioes = {
  'norte': regiaoNorte,
  'nordeste': regiaoNordeste,
  'centro-oeste': regiaoCentroOeste,
  'sudeste': regiaoSudeste,
  'sul': regiaoSul,
};

export default function Home() {
  // --- ESTADOS DA BUSCA E NAVEGAÇÃO ---
  const [termoBusca, setTermoBusca] = useState('');
  const navigate = useNavigate();

  // --- ESTADOS DAS REGIÕES E CALCULADORAS ---
  const [regiaoSelecionada, setRegiaoSelecionada] = useState(null);
  const [resultadoImc, setResultadoImc] = useState(null);
  const [alturaImc, setAlturaImc] = useState('');
  const [pesoImc, setPesoImc] = useState('');
  const [resultadoHidratacao, setResultadoHidratacao] = useState(null);
  const [idadeHidratacao, setIdadeHidratacao] = useState('');
  const [pesoHidratacao, setPesoHidratacao] = useState('');
  
  // --- REFERÊNCIAS PARA SCROLL SUAVE ---
  const balaoRef = useRef(null);
  const resultadoImcRef = useRef(null);
  const resultadoHidratacaoRef = useRef(null);

  // --- FUNÇÕES ---
  function scrollSuave(ref, offset = 120) {
    setTimeout(() => {
      const posicao = ref.current?.getBoundingClientRect().top + window.scrollY - offset;
      const inicio = window.scrollY;
      const distancia = posicao - inicio;
      const duracao = 800;
      let startTime = null;

      function animacao(timestamp) {
        if (!startTime) startTime = timestamp;
        const progresso = Math.min((timestamp - startTime) / duracao, 1);
        const ease = progresso < 0.5
          ? 2 * progresso * progresso
          : -1 + (4 - 2 * progresso) * progresso;
        window.scrollTo(0, inicio + distancia * ease);
        if (progresso < 1) requestAnimationFrame(animacao);
      }

      requestAnimationFrame(animacao);
    }, 150);
  }

  // Função que dispara ao submeter o formulário de busca
  function handleBuscar(e) {
    e.preventDefault(); // Evita recarregar a página
    if (termoBusca.trim() !== '') {
      navigate(`/busca?q=${encodeURIComponent(termoBusca)}`);
    }
  }

  function handleRegiaoClick(regiao) {
    if (regiaoSelecionada?.id === regiao.id) {
      setRegiaoSelecionada(null);
    } else {
      setRegiaoSelecionada(regiao);
      scrollSuave(balaoRef, 300);
    }
  }

  function handleCalcularImc() {
    if (!alturaImc || !pesoImc) return;
    const alturaM = alturaImc / 100;
    const imc = (pesoImc / (alturaM * alturaM)).toFixed(1);
    let classificacao = '';
    let cor = '';
    if (imc < 18.5)      { classificacao = 'Magreza';                  cor = '#a8e6cf'; }
    else if (imc < 25)   { classificacao = 'Saudável';                 cor = '#4ade80'; }
    else if (imc < 30)   { classificacao = 'Sobrepeso';                cor = '#fcd34d'; }
    else if (imc < 35)   { classificacao = 'Obesidade Grau I';         cor = '#fb923c'; }
    else if (imc < 40)   { classificacao = 'Obesidade Grau Severa II'; cor = '#ef4444'; }
    else                 { classificacao = 'Obesidade Grau Mórbida III'; cor = '#c084fc'; }

    setResultadoImc({ imc, classificacao, cor });
    scrollSuave(resultadoImcRef, 120);
  }
  
  function handleCalcularHidratacao() {
    if (!idadeHidratacao || !pesoHidratacao) return;
    const idade = parseInt(idadeHidratacao);
    const peso = parseFloat(pesoHidratacao);
    let mlPorKg = 35; // padrão adulto

    if (idade <= 10)       mlPorKg = 50;
    else if (idade <= 17)  mlPorKg = 40;
    else if (idade <= 55)  mlPorKg = 35;
    else if (idade <= 65)  mlPorKg = 30;
    else                   mlPorKg = 25;

    const totalMl = (peso * mlPorKg).toFixed(0);
    const totalL = (totalMl / 1000).toFixed(1);
    const copos = Math.ceil(totalMl / 250); // copo de 250ml

    setResultadoHidratacao({ totalMl, totalL, copos });
    scrollSuave(resultadoHidratacaoRef, 120);
  }

  function handleEstadoClick(estado) {
    const slug = estado
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    navigate(`/estados/${slug}`);
  }

  return (
    <div className="home-container">

      {/* ── CABEÇALHO ── */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoImg} alt="Logo e-Saúde" style={{ height: '45px' }} />
          <h2 style={styles.logo}>e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso}>
          <Lock size={16} style={{ marginRight: '8px' }} />
          Acesso restrito
        </button>
      </header>

      {/* ── BANNER + BUSCA + REGIÕES ── */}
      <section style={{ ...styles.banner, backgroundImage: `url(${bannerBg})` }}>
        <h1 style={styles.tituloBanner}>
          Saúde pública mais próxima<br />de você.
        </h1>
        <p style={styles.subtituloBanner}>
          Acesse os serviços de saúde do seu município e encontre a UBS mais próxima.
        </p>

        {/* BARRA DE BUSCA TRANSFORMADA EM FORMULÁRIO */}
        <form style={styles.buscaContainer} className="busca-container" onSubmit={handleBuscar}>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Ex: cidade, estado, nome da unidade de saúde ou tipo de unidade"
              style={styles.inputBusca}
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
            <span style={styles.iconeBusca}><Search size={18} /></span>
          </div>
          <button type="submit" style={styles.btnBuscar}>Buscar</button>
        </form>

        <div style={styles.regioesNoBanner}>
          {regioes.map((regiao) => (
            <button
              key={regiao.id}
              onClick={() => handleRegiaoClick(regiao)}
              style={{
                ...styles.btnRegiao,
                backgroundColor: regiao.cor + '99',
                outline: regiaoSelecionada?.id === regiao.id ? `3px solid ${regiao.cor}` : 'none',
                outlineOffset: '2px',
              }}
            >
              <img
                src={imagensRegioes[regiao.id]}
                alt={regiao.nome}
                style={styles.iconRegiao}
              />
              <span style={styles.nomeRegiao}>{regiao.nome}</span>
              <ChevronDown
                size={14}
                style={{
                  marginTop: '4px',
                  opacity: 0.8,
                  transition: 'transform 0.3s ease',
                  transform: regiaoSelecionada?.id === regiao.id ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── BALÃO DE ESTADOS ── */}
      {regiaoSelecionada && (
        <div ref={balaoRef} style={{ ...styles.balaoEstados, borderColor: regiaoSelecionada.cor + 'aa', backgroundColor: regiaoSelecionada.cor + '22' }}>
          <p style={{ ...styles.balaoTitulo, color: regiaoSelecionada.cor }}>
            Selecione um estado da região {regiaoSelecionada.nome}:
          </p>
          <div style={styles.estadosGrid}>
            {regiaoSelecionada.estados.map((estado) => (
              <button
                key={estado}
                onClick={() => handleEstadoClick(estado)}
                style={{ ...styles.btnEstado, backgroundColor: regiaoSelecionada.cor + '33', color: regiaoSelecionada.cor, }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = regiaoSelecionada.cor + '66'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = regiaoSelecionada.cor + '33'}
              >
                {estado}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── FERRAMENTAS DE SAÚDE ── */}
      <section style={styles.ferramentasContainer}>
        <h3 style={{
          color: '#1a5f7a', marginBottom: '20px', width: '100%',
          fontSize: '1.2rem', fontWeight: '600',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <Wrench size={20} /> Ferramentas de saúde
        </h3>

        <div style={styles.cardsWrapper} className="cards-wrapper">

          {/* CALCULADORA DE IMC */}
          <div style={styles.cardImc}>
            <h4 style={{ ...styles.tituloCard, color: '#2b8471' }}>
              <Calculator size={20} /> Calculadora de IMC
            </h4>

            <div style={{ flex: '1', minWidth: '250px' }}>
              <div style={styles.formGroup}>
                <label style={{ fontSize: '1rem', fontWeight: '600' }}>Altura (em cm):</label>
                <input
                  type="number"
                  placeholder="Digite sua altura"
                  style={styles.inputCalculadora}
                  value={alturaImc}
                  onChange={(e) => setAlturaImc(e.target.value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ fontSize: '1rem', fontWeight: '600' }}>Peso (em kg):</label>
                <input
                  type="number"
                  placeholder="Digite seu peso"
                  style={styles.inputCalculadora}
                  value={pesoImc}
                  onChange={(e) => setPesoImc(e.target.value)}
                />
              </div>
              <button
                style={{ ...styles.btnBuscar, backgroundColor: '#2b8471', padding: '12px 30px', marginTop: '10px' }}
                onClick={handleCalcularImc}
              >
                Calcular
              </button>

              {resultadoImc && (
                <div
                  ref={resultadoImcRef}
                  style={{
                    marginTop: '20px',
                    padding: '16px 24px',
                    borderRadius: '10px',
                    backgroundColor: resultadoImc.cor,
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontWeight: '700', fontSize: '1.2rem', margin: 0 }}>
                    IMC: {resultadoImc.imc}
                  </p>
                  <p style={{ margin: '4px 0 0', fontSize: '1rem' }}>
                    {resultadoImc.classificacao}
                  </p>
                </div>
              )}
            </div>

            <table style={styles.tabelaImc} className="tabela-imc">
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={styles.celulaTabela}>IMC</th>
                  <th style={styles.celulaTabela}>CLASSIFICAÇÃO</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: 'center' }}>
                <tr style={{ backgroundColor: '#a8e6cf' }}><td style={styles.celulaTabela}>&lt; 18,5</td><td style={styles.celulaTabela}>Magreza</td></tr>
                <tr style={{ backgroundColor: '#4ade80' }}><td style={styles.celulaTabela}>18,5 a 24,9</td><td style={styles.celulaTabela}>Saudável</td></tr>
                <tr style={{ backgroundColor: '#fcd34d' }}><td style={styles.celulaTabela}>25,0 a 29,9</td><td style={styles.celulaTabela}>Sobrepeso</td></tr>
                <tr style={{ backgroundColor: '#fb923c' }}><td style={styles.celulaTabela}>30,0 a 34,9</td><td style={styles.celulaTabela}>Obesidade Grau I</td></tr>
                <tr style={{ backgroundColor: '#ef4444' }}><td style={styles.celulaTabela}>35,0 a 39,9</td><td style={styles.celulaTabela}>Obesidade Grau Severa II</td></tr>
                <tr style={{ backgroundColor: '#c084fc' }}><td style={styles.celulaTabela}>&gt; 40,0</td><td style={styles.celulaTabela}>Obesidade Grau Mórbida III</td></tr>
              </tbody>
            </table>
          </div>

          {/* CALCULADORA DE HIDRATAÇÃO */}
          <div style={styles.cardHidratacao}>
            <h4 style={{ ...styles.tituloCard, color: '#1a5f7a' }}>
              <Droplets size={20} /> Calculadora de hidratação
            </h4>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* FORMULÁRIO */}
            <div style={{ minWidth: '250px' }}>
              <div style={styles.formGroup}>
                <label style={{ fontSize: '1rem', fontWeight: '600' }}>Idade:</label>
                <input
                  type="number"
                  placeholder="Digite sua idade"
                  style={styles.inputCalculadora}
                  value={idadeHidratacao}
                  onChange={(e) => setIdadeHidratacao(e.target.value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ fontSize: '1rem', fontWeight: '600' }}>Peso (em kg):</label>
                <input
                  type="number"
                  placeholder="Digite seu peso"
                  style={styles.inputCalculadora}
                  value={pesoHidratacao}
                  onChange={(e) => setPesoHidratacao(e.target.value)}
                />
              </div>
              <button
                style={{ ...styles.btnBuscar, padding: '12px 30px', marginTop: '10px' }}
                onClick={handleCalcularHidratacao}
              >
                Calcular
              </button>
            </div>

            {/* RESULTADO — aparece ao lado no PC, embaixo no celular */}
            {resultadoHidratacao && (
              <div
                ref={resultadoHidratacaoRef}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  padding: '16px 24px',
                  borderRadius: '10px',
                  backgroundColor: '#d0eaff',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                <p style={{ fontWeight: '700', fontSize: '1.2rem', margin: 0 }}>
                  {resultadoHidratacao.totalL}L por dia
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '1rem' }}>
                  {resultadoHidratacao.totalMl}ml — aproximadamente {resultadoHidratacao.copos} copos de 250ml
                </p>
              </div>
            )}

          </div>
          </div>

        </div>
      </section>

      {/* ── SOBRE O PROJETO ── */}
      <section style={styles.sobreContainer}>
        <h3 style={{
          color: '#1a5f7a', marginBottom: '20px', width: '100%',
          fontSize: '1.2rem', fontWeight: '600',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <Info size={20} /> Sobre o projeto
        </h3>
        <div style={styles.sobreCard}>
          <div style={styles.sobreTopico}>
            <span style={styles.sobreSubtitulo}>• O que é o e-Saúde?</span>
            <p style={styles.sobreTexto}>
              O e-Saúde é um portal público criado para aproximar o cidadão dos serviços de saúde do seu município.
              Em vez de enfrentar filas ou depender de informações desatualizadas, você pode consultar diretamente
              quais unidades básicas estão disponíveis na sua região, quais profissionais atendem, quais serviços
              estão disponíveis e onde cada unidade está localizada — tudo em um só lugar, sem precisar criar conta
              ou fazer cadastro.
            </p>
            <p style={{ ...styles.sobreTexto, marginTop: '15px' }}>
              As informações são atualizadas mensalmente com base nos dados oficiais do Cadastro Nacional de
              Estabelecimentos de Saúde (CNES), do Ministério da Saúde.
            </p>
          </div>
          <div style={styles.sobreTopico}>
            <span style={styles.sobreSubtitulo}>• Para quem é?</span>
            <p style={styles.sobreTexto}>
              O e-Saúde foi pensado para qualquer pessoa que precise acessar o SUS — seja para encontrar a UBS
              mais próxima, saber quais especialidades estão disponíveis no bairro, ou entender melhor como
              funciona o sistema público de saúde.
            </p>
          </div>
          <div style={{ ...styles.sobreTopico, marginBottom: 0 }}>
            <span style={styles.sobreSubtitulo}>• Transparência como princípio</span>
            <p style={styles.sobreTexto}>
              Acreditamos que o acesso à informação é o primeiro passo para um serviço público mais eficiente.
              Por isso, todos os dados públicos do e-Saúde são abertos, gratuitos e acessíveis sem qualquer barreira.
            </p>
          </div>
        </div>
      </section>

      {/* ── RODAPÉ ── */}
      <footer style={styles.footerContainer}>
        <div style={styles.footerInfo}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logoImg} alt="Logo e-Saúde" style={{ height: '40px' }} />
            <h2 style={{ ...styles.logo, color: '#4ade80' }}>e-Saúde</h2>
          </div>
          <p style={styles.footerDescricao}>
            Portal público de informações das Unidades Básicas de Saúde do Brasil.<br />
            Dados atualizados mensalmente com base no CNES.
          </p>
        </div>

        <div style={styles.footerColunasWrapper}>
          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Navegação</span>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Buscar UBS</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Ferramentas de Saúde</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Sobre o projeto</a>
          </div>
          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Institucional</span>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Política de Privacidade</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Termos de Uso</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Acessibilidade</a>
          </div>
          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Área restrita</span>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Entrar no sistema</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Suporte técnico</a>
            <a style={styles.footerLink} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#ccc'}>Documentação</a>
          </div>
        </div>
      </footer>

    </div>
  );
}