import React from 'react';
// Importamos o objeto 'styles' do nosso arquivo style.jsx para aplicar o CSS inline
import { styles } from './style';

export default function Home() {
  return (
    // A div principal que engloba toda a página. No React, o return precisa ter apenas um "pai".
    <div className="home-container">
      
      {/* ==========================================
          CABEÇALHO (HEADER)
          Contém a logo do projeto e o botão de login
          ========================================== */}
      <header style={styles.header}>
        <div>
          <h2 style={styles.logo}>🩺 e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso}>
          Acesso restrito
        </button>
      </header>

      {/* ==========================================
          BANNER PRINCIPAL (HERO SECTION)
          A primeira coisa que o usuário vê. Contém 
          o título principal e o campo de busca.
          ========================================== */}
      <section style={styles.banner}>
        <h1 style={styles.tituloBanner}>
          Saúde pública mais próxima<br/>de você. {/* A tag <br/> quebra a linha do texto */}
        </h1>
        <p style={styles.subtituloBanner}>
          Acesse os serviços de saúde do seu município e encontre a UBS mais próxima.
        </p>

        {/* BARRA DE BUSCA COM LUPA */}
        <div style={styles.buscaContainer}>
          <div style={styles.inputWrapper}>
            {/* Campo onde o usuário digita */}
            <input 
              type="text" 
              placeholder="Ex: cidade, estado, nome da unidade de saúde ou tipo de unidade" 
              style={styles.inputBusca}
            />
            {/* Ícone de lupa posicionado de forma absoluta dentro do input */}
            <span style={styles.iconeBusca}>🔍</span>
          </div>
          {/* Botão para disparar a pesquisa */}
          <button style={styles.btnBuscar}>
            Buscar
          </button>
        </div>
      </section>

      {/* ==========================================
          SEÇÃO DE REGIÕES
          Botões para atalhos rápidos de busca por 
          regiões do Brasil.
          ========================================== */}
      <section style={styles.regioesContainer}>
        <h3 style={styles.regioesTitulo}>
          🔎 Encontre Qualquer Posto de Saúde do Brasil
        </h3>
        <div style={styles.botoesWrapper}>
          <button style={styles.btnRegiao}>Norte</button>
          <button style={styles.btnRegiao}>Nordeste</button>
          <button style={styles.btnRegiao}>C. Oeste</button>
          <button style={styles.btnRegiao}>Sudeste</button>
          <button style={styles.btnRegiao}>Sul</button>
        </div>
      </section>

      {/* ==========================================
          SEÇÃO DE FERRAMENTAS DE SAÚDE
          Contém os cards independentes para as 
          calculadoras de IMC e Hidratação.
          ========================================== */}
      <section style={styles.ferramentasContainer}>
        <h3 style={{ color: '#1a5f7a', marginBottom: '20px', width: '100%', fontSize: '1.2rem', fontWeight: '600', textAlign: 'left' }}>
          🔗 Ferramentas de saúde
        </h3>

        <div style={styles.cardsWrapper}>
          
          {/* CALCULADORA DE IMC (Com Formulário e Tabela Visual) */}
          <div style={styles.cardImc}>
            <h4 style={{...styles.tituloCard, color: '#2b8471'}}>📊 Calculadora de IMC</h4>
            
            {/* Formulário de entrada de dados do IMC */}
            <div style={{ flex: '1', minWidth: '250px' }}>
              <div style={styles.formGroup}>
                <label style={{fontSize: '1rem', fontWeight: '600'}}>Altura (em cm):</label>
                <input type="number" placeholder="Digite sua altura" style={styles.inputCalculadora} />
              </div>
              <div style={styles.formGroup}>
                <label style={{fontSize: '1rem', fontWeight: '600'}}>Peso (em kg):</label>
                <input type="number" placeholder="Digite seu peso" style={styles.inputCalculadora} />
              </div>
              <button style={{...styles.btnBuscar, backgroundColor: '#2b8471', padding: '12px 30px', marginTop: '10px'}}>Calcular</button>
            </div>

            {/* Tabela estática de classificação do IMC */}
            <table style={styles.tabelaImc}>
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

          {/* CALCULADORA DE HIDRATAÇÃO (Apenas Formulário) */}
          <div style={styles.cardHidratacao}>
            <h4 style={{...styles.tituloCard, color: '#1a5f7a'}}>💧 Calculadora de hidratação</h4>
            <div style={{ maxWidth: '300px' }}>
              <div style={styles.formGroup}>
                <label style={{fontSize: '1rem', fontWeight: '600'}}>Idade:</label>
                <input type="number" placeholder="Digite sua idade" style={styles.inputCalculadora} />
              </div>
              <div style={styles.formGroup}>
                <label style={{fontSize: '1rem', fontWeight: '600'}}>Peso (em kg):</label>
                <input type="number" placeholder="Digite seu peso" style={styles.inputCalculadora} />
              </div>
              <button style={{...styles.btnBuscar, padding: '12px 30px', marginTop: '10px'}}>Calcular</button>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SEÇÃO SOBRE O PROJETO
          Card explicativo com propósito e diretrizes 
          do sistema e-Saúde.
          ========================================== */}
      <section style={styles.sobreContainer}>
        <h3 style={{ color: '#1a5f7a', marginBottom: '20px', width: '100%', fontSize: '1.2rem', fontWeight: '600', textAlign: 'left' }}>
          ℹ️ Sobre o projeto
        </h3>

        <div style={styles.sobreCard}>
          <div style={styles.sobreTopico}>
            <span style={styles.sobreSubtitulo}>• O que é o e-Saúde?</span>
            <p style={styles.sobreTexto}>
              O e-Saúde é um portal público criado para aproximar o cidadão dos serviços de saúde do seu município. Em vez de enfrentar filas ou depender de informações desatualizadas, você pode consultar diretamente quais unidades básicas estão disponíveis na sua região, quais profissionais atendem, quais serviços estão disponíveis e onde cada unidade está localizada — tudo em um só lugar, sem precisar criar conta ou fazer cadastro.
            </p>
            <p style={{...styles.sobreTexto, marginTop: '15px'}}>
              As informações são atualizadas mensalmente com base nos dados oficiais do Cadastro Nacional de Estabelecimentos de Saúde (CNES), do Ministério da Saúde, garantindo que o que você vê aqui reflita a realidade da rede pública de saúde brasileira.
            </p>
          </div>

          <div style={styles.sobreTopico}>
            <span style={styles.sobreSubtitulo}>• Para quem é?</span>
            <p style={styles.sobreTexto}>
              O e-Saúde foi pensado para qualquer pessoa que precise acessar o SUS — seja para encontrar a UBS mais próxima, saber quais especialidades estão disponíveis no bairro, ou entender melhor como funciona o sistema público de saúde. A plataforma foi desenvolvida com foco em simplicidade, para que qualquer cidadão consiga usá-la, independentemente da familiaridade com tecnologia.
            </p>
          </div>

          <div style={{...styles.sobreTopico, marginBottom: 0}}>
            <span style={styles.sobreSubtitulo}>• Transparência como princípio</span>
            <p style={styles.sobreTexto}>
              Acreditamos que o acesso à informação é o primeiro passo para um serviço público mais eficiente. Por isso, todos os dados públicos do e-Saúde são abertos, gratuitos e acessíveis sem qualquer barreira. O sistema segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) e os princípios de acessibilidade digital.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          RODAPÉ (FOOTER)
          Final da página com links de navegação 
          e informações institucionais.
          ========================================== */}
      <footer style={styles.footerContainer}>
        {/* Lado esquerdo do rodapé (Logo e texto) */}
        <div style={styles.footerInfo}>
          <h2 style={{...styles.logo, color: '#4ade80'}}>🩺 e-Saúde</h2>
          <p style={styles.footerDescricao}>
            Portal público de informações das Unidades Básicas de Saúde do Brasil.<br/>
            Dados atualizados mensalmente com base no CNES.
          </p>
        </div>

        {/* Lado direito do rodapé (Colunas de Links) */}
        <div style={styles.footerColunasWrapper}>
          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Navegação</span>
            <a style={styles.footerLink}>Buscar UBS</a>
            <a style={styles.footerLink}>Ferramentas de Saúde</a>
            <a style={styles.footerLink}>Sobre o projeto</a>
          </div>

          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Institucional</span>
            <a style={styles.footerLink}>Política de Privacidade</a>
            <a style={styles.footerLink}>Termos de Uso</a>
            <a style={styles.footerLink}>Acessibilidade</a>
          </div>

          <div style={styles.footerColuna}>
            <span style={styles.footerColunaTitulo}>Área restrita</span>
            <a style={styles.footerLink}>Entrar no sistema</a>
            <a style={styles.footerLink}>Suporte técnico</a>
            <a style={styles.footerLink}>Documentação</a>
          </div>
        </div>
      </footer>

    </div> /* Fim da div home-container */
  );
}