import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Lock, ArrowLeft, Loader2, MapPin, ChevronRight } from 'lucide-react';
import { styles } from './style';
import { regioes } from '../Home/regioes';
import logoImg from '../../../assets/logo.png';

// Monta um mapa "slug-do-estado" -> { nome, regiao } a partir do regioes.js da Home,
// usando a mesma lógica de slug já usada no handleEstadoClick.
function gerarSlug(texto) {
  return texto
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buscarInfoEstadoPorSlug(slug) {
  for (const regiao of regioes) {
    const encontrado = regiao.estados.find((estado) => gerarSlug(estado) === slug);
    if (encontrado) {
      return { nome: encontrado, regiaoNome: regiao.nome, regiaoCor: regiao.cor };
    }
  }
  return null;
}

export default function Estado() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const infoEstado = useMemo(() => buscarInfoEstadoPorSlug(slug), [slug]);

  const [cidades, setCidades] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [termoBusca, setTermoBusca] = useState('');

  useEffect(() => {
    async function buscarCidades() {
      setCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch(`http://localhost:3000/api/estados/${slug}/cidades`);

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar as cidades deste estado.');
        }

        const dados = await resposta.json();
        setCidades(dados);
      } catch (err) {
        console.error('Erro ao buscar cidades:', err);
        setErro('Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3000.');
      } finally {
        setCarregando(false);
      }
    }

    buscarCidades();
  }, [slug]);

  function handleCidadeClick(nomeCidade) {
    navigate(`/busca?q=${encodeURIComponent(nomeCidade)}`);
  }

  const cidadesFiltradas = cidades.filter((cidade) =>
    cidade.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div>
      {/* ── CABEÇALHO ── */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logoImg} alt="Logo e-Saúde" style={{ height: '40px' }} />
          <h2 style={styles.logo}>e-Saúde</h2>
        </div>
        <button style={styles.btnAcesso} onClick={() => navigate('/login')}>
          <Lock size={16} style={{ marginRight: '8px' }} /> Acesso restrito
        </button>
      </header>

      <div style={styles.containerEstado}>

        <a style={styles.linkVoltar} onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Voltar para a página inicial
        </a>

        {/* ── CABEÇALHO DO ESTADO ── */}
        {infoEstado ? (
          <>
            <div style={styles.headerEstado}>
              <h1 style={styles.tituloEstado}>{infoEstado.nome}</h1>
              <span style={{ ...styles.badgeRegiao, backgroundColor: infoEstado.regiaoCor }}>
                {infoEstado.regiaoNome}
              </span>
            </div>
            <p style={styles.subtituloEstado}>
              Selecione uma cidade para encontrar as Unidades Básicas de Saúde disponíveis.
            </p>
          </>
        ) : (
          <h1 style={styles.tituloEstado}>Estado não encontrado</h1>
        )}

        {/* ── BARRA DE BUSCA DE CIDADES ── */}
        {!carregando && !erro && cidades.length > 0 && (
          <div style={styles.buscaCidadeWrapper}>
            <span style={styles.iconeBuscaCidade}><Search size={18} /></span>
            <input
              type="text"
              placeholder="Buscar cidade..."
              style={styles.inputBuscaCidade}
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </div>
        )}

        {/* ── ESTADOS DE CARREGAMENTO / ERRO ── */}
        {carregando ? (
          <div style={styles.estadoCarregando}>
            <Loader2 className="animate-spin" size={22} />
            <span>Carregando cidades...</span>
          </div>
        ) : erro ? (
          <div style={styles.estadoErro}>
            <strong>Erro:</strong> {erro}
          </div>
        ) : cidadesFiltradas.length === 0 ? (
          <div style={styles.estadoVazio}>
            Nenhuma cidade encontrada{termoBusca && ` para "${termoBusca}"`}.
          </div>
        ) : (
          <>
            <p style={styles.contadorCidades}>
              {cidadesFiltradas.length} cidade(s) encontrada(s)
            </p>
            <div style={styles.gridCidades}>
              {cidadesFiltradas.map((cidade) => (
                <button
                  key={cidade.id}
                  style={styles.btnCidade}
                  onClick={() => handleCidadeClick(cidade.nome)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = infoEstado?.regiaoCor || '#1a5f7a';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={15} color="#888" />
                    {cidade.nome}
                  </span>
                  <ChevronRight size={16} color="#aaa" />
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
