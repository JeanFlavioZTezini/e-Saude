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

      {/* BANNER PRINCIPAL (AZUL) */}
      <section style={styles.banner}>
        <h1 style={styles.tituloBanner}>
          Saúde pública mais próxima de você.
        </h1>
        <p style={styles.subtituloBanner}>
          Acesse os serviços de saúde do seu município e encontre a UBS mais próxima.
        </p>

        {/* BARRA DE BUSCA */}
        <div style={styles.buscaContainer}>
          <input 
            type="text" 
            placeholder="Ex: cidade, estado, nome da unidade de saúde..." 
            style={styles.inputBusca}
          />
          <button style={styles.btnBuscar}>
            Buscar
          </button>
        </div>
      </section>

      {/* SEÇÃO DE REGIÕES */}
      <section style={styles.regioesContainer}>
        <h3 style={styles.regioesTitulo}>
          🗺️ Encontre Qualquer Posto de Saúde do Brasil
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
        <h3 style={{ color: '#1a5f7a', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px auto', fontSize: '1rem' }}>
          🔧 Ferramentas de saúde
        </h3>

        <div style={styles.cardsWrapper}>
          
          {/* CALCULADORA DE IMC */}
          <div style={styles.cardImc}>
            <h4 style={{...styles.tituloCard, color: '#2b8471'}}>📊 Calculadora de IMC</h4>
            
            <div style={{ flex: '1', minWidth: '200px' }}>
              <div style={styles.formGroup}>
                <label style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Altura (em cm):</label>
                <input type="number" placeholder="Digite sua altura" style={styles.inputCalculadora} />
              </div>
              <div style={styles.formGroup}>
                <label style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Peso (em kg):</label>
                <input type="number" placeholder="Digite seu peso" style={styles.inputCalculadora} />
              </div>
              <button style={{...styles.btnBuscar, backgroundColor: '#2b8471', padding: '10px 20px', marginTop: '10px'}}>Calcular</button>
            </div>

            {/* TABELA DE IMC */}
            <table style={styles.tabelaImc} border="1">
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={{ padding: '8px' }}>IMC</th>
                  <th style={{ padding: '8px' }}>CLASSIFICAÇÃO</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: 'center' }}>
                <tr style={{ backgroundColor: '#a8e6cf' }}><td style={{ padding: '5px' }}>&lt; 18,5</td><td>Magreza</td></tr>
                <tr style={{ backgroundColor: '#c1f0c1' }}><td style={{ padding: '5px' }}>18,5 a 24,9</td><td>Saudável</td></tr>
                <tr style={{ backgroundColor: '#ffe4b5' }}><td style={{ padding: '5px' }}>25,0 a 29,9</td><td>Sobrepeso</td></tr>
                <tr style={{ backgroundColor: '#ffb347' }}><td style={{ padding: '5px' }}>30,0 a 34,9</td><td>Obesidade Grau I</td></tr>
                <tr style={{ backgroundColor: '#ff6961' }}><td style={{ padding: '5px' }}>35,0 a 39,9</td><td>Obesidade Grau Severa II</td></tr>
                <tr style={{ backgroundColor: '#d8b2d8' }}><td style={{ padding: '5px' }}>&gt; 40,0</td><td>Obesidade Grau Mórbida III</td></tr>
              </tbody>
            </table>
          </div>

          {/* CALCULADORA DE HIDRATAÇÃO */}
          <div style={styles.cardHidratacao}>
            <h4 style={{...styles.tituloCard, color: '#1a5f7a'}}>💧 Calculadora de hidratação</h4>
            <div style={{ maxWidth: '300px' }}>
              <div style={styles.formGroup}>
                <label style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Idade:</label>
                <input type="number" placeholder="Digite sua idade" style={styles.inputCalculadora} />
              </div>
              <div style={styles.formGroup}>
                <label style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Peso (em kg):</label>
                <input type="number" placeholder="Digite seu peso" style={styles.inputCalculadora} />
              </div>
              <button style={{...styles.btnBuscar, padding: '10px 20px', marginTop: '10px'}}>Calcular</button>
            </div>
          </div>

        </div>
      </section>

    </div> /* <-- A div principal home-container fecha aqui */
  ); /* <-- E o return fecha aqui, uma única vez! */
}