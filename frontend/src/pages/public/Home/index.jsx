import React from 'react';
import { styles } from './style';

export default function Home() {
  return (
    <div className="home-container">
      {/* CABEÇALHO */}
      <header style={styles.header}>
        <div>
          <h2 style={styles.logo}>🩺 e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso}>
          Acesso restrito
        </button>
      </header>

      {/* BANNER PRINCIPAL */}
      <section style={styles.banner}>
        <h1 style={styles.tituloBanner}>
          Saúde pública mais próxima<br/>de você.
        </h1>
        <p style={styles.subtituloBanner}>
          Acesse os serviços de saúde do seu município e encontre a UBS mais próxima.
        </p>

        {/* BARRA DE BUSCA COM LUPA */}
        <div style={styles.buscaContainer}>
          <div style={styles.inputWrapper}>
            <input 
              type="text" 
              placeholder="Ex: cidade, estado, nome da unidade de saúde ou tipo de unidade" 
              style={styles.inputBusca}
            />
            <span style={styles.iconeBusca}>🔍</span>
          </div>
          <button style={styles.btnBuscar}>
            Buscar
          </button>
        </div>
      </section>

      {/* SEÇÃO DE REGIÕES */}
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

      {/* SEÇÃO DE FERRAMENTAS DE SAÚDE */}
      <section style={styles.ferramentasContainer}>
        <h3 style={{ color: '#1a5f7a', marginBottom: '20px', width: '100%', fontSize: '1.2rem', fontWeight: '600', textAlign: 'left' }}>
          🔗 Ferramentas de saúde
        </h3>

        <div style={styles.cardsWrapper}>
          
          {/* CALCULADORA DE IMC */}
          <div style={styles.cardImc}>
            <h4 style={{...styles.tituloCard, color: '#2b8471'}}>📊 Calculadora de IMC</h4>
            
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

            {/* TABELA DE IMC */}
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

          {/* CALCULADORA DE HIDRATAÇÃO */}
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

    </div>
  );
}