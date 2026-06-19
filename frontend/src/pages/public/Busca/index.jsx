import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Lock, Map, Loader2, Navigation } from 'lucide-react';
import { styles } from './style';

export default function Busca() {
  const [searchParams] = useSearchParams();
  const termoDigitado = searchParams.get('q') || '';
  
  // 1. Agora o React pega as coordenadas que vieram da Home
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  
  const navigate = useNavigate();

  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarUnidades = async () => {
      setCarregando(true);
      setErro(null);

      try {
        // 2. Montamos a URL garantindo que o GPS seja enviado para o Backend (se existir)
        let urlDaApi = `http://localhost:3000/api/ubs/busca?q=${encodeURIComponent(termoDigitado)}`;
        if (lat && lng) {
          urlDaApi += `&lat=${lat}&lng=${lng}`;
        }

        const resposta = await fetch(urlDaApi);
        
        if (!resposta.ok) {
          throw new Error('Falha na resposta do servidor');
        }

        const dados = await resposta.json();
        setResultados(dados); 
        
      } catch (err) {
        console.error("Erro na integração:", err);
        setErro("Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3000.");
      } finally {
        setCarregando(false);
      }
    };

    buscarUnidades();
  }, [termoDigitado, lat, lng]); 

  return (
    <div>
      {/* CABEÇALHO */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <h2 style={styles.logo}>🩺 e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso}>
          <Lock size={16} style={{ marginRight: '8px' }} /> Acesso restrito
        </button>
      </header>

      {/* ÁREA DE RESULTADOS */}
      <div style={styles.containerBusca}>
        <h1 style={styles.tituloBusca}>
          {termoDigitado ? `Resultados para: "${termoDigitado}"` : "Busca de Unidades"}
        </h1>

        {carregando ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1a5f7a', marginTop: '20px' }}>
            <Loader2 className="animate-spin" size={24} />
            <span style={{ fontSize: '1.1rem' }}>Calculando unidades mais próximas...</span>
          </div>
        ) : erro ? (
          <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <strong>Erro:</strong> {erro}
          </div>
        ) : (
          <>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>
              Encontramos {resultados.length} unidade(s) correspondente(s).
            </p>

            {resultados.length === 0 ? (
              <div style={{ backgroundColor: '#f3f4f6', padding: '30px', textAlign: 'center', borderRadius: '10px', marginTop: '20px' }}>
                <p style={{ color: '#555', fontSize: '1.1rem' }}>Nenhuma unidade de saúde encontrada na sua região.</p>
              </div>
            ) : (
              <div style={styles.gridResultados}>
                {resultados.map((ubs) => {
                  const enderecoParaMapa = encodeURIComponent(`${ubs.nome}, ${ubs.endereco}, ${ubs.cidade}`);
                  const linkGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${enderecoParaMapa}`;

                  return (
                    <div key={ubs.id} style={styles.cardUbs}>
                      <h3 style={styles.nomeUbs}>{ubs.nome}</h3>
                      
                      {/* 3. EXIBIÇÃO DA DISTÂNCIA (Só aparece se o Backend enviou o cálculo) */}
                      {ubs.distancia && (
                        <div style={{ ...styles.infoLinha, color: '#059669', fontWeight: '700', backgroundColor: '#d1fae5', padding: '6px 10px', borderRadius: '6px', display: 'inline-flex', width: 'fit-content' }}>
                          <Navigation size={16} color="#059669" style={{ flexShrink: 0 }} />
                          <span>A {ubs.distancia.toFixed(1)} km de você</span>
                        </div>
                      )}
                      
                      <div style={styles.infoLinha}>
                        <MapPin size={18} color="#2b8471" style={{ flexShrink: 0 }} />
                        <span>{ubs.endereco} <br/> <small style={{ color: '#888' }}>{ubs.cidade}</small></span>
                      </div>
                      
                      <div style={styles.infoLinha}>
                        <Clock size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                        <span>{ubs.horario}</span>
                      </div>

                      <div style={styles.infoLinha}>
                        <Phone size={18} color="#3b82f6" style={{ flexShrink: 0 }} />
                        <span>{ubs.telefone}</span>
                      </div>

                      <div style={styles.botoesWrapper}>
                        <button style={styles.btnDetalhes} onClick={() => navigate(`/unidade/${ubs.id}`)}>
                          Informações <ArrowRight size={16} />
                        </button>
                        
                        <a href={linkGoogleMaps} target="_blank" rel="noopener noreferrer" style={styles.btnMapa}>
                          <Map size={16} /> Rota
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}