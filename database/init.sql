-- Limpa as tabelas antigas se existirem para evitar conflitos
DROP TABLE IF EXISTS intercorrencias CASCADE;
DROP TABLE IF EXISTS funcionarios CASCADE;
DROP TABLE IF EXISTS gestores CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS unidades_de_saude CASCADE;

-- 1. Criação da tabela de Unidades de Saúde (Agora com município)
CREATE TABLE unidades_de_saude (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    endereco TEXT,
    municipio VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabela unificada de Usuários (Acomoda Administrador e Gestor UBS)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    perfil VARCHAR(50) NOT NULL, -- Vai receber 'ADMIN_MUNICIPAL' ou 'GESTOR_UBS'
    municipio_responsavel VARCHAR(100), -- Preenchido APENAS se for ADMIN_MUNICIPAL
    unidade_id INTEGER REFERENCES unidades_de_saude(id) ON DELETE SET NULL, -- Preenchido APENAS se for GESTOR_UBS
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Criação da tabela de Intercorrências
CREATE TABLE intercorrencias (
    id SERIAL PRIMARY KEY,
    ubs_nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    impacto VARCHAR(50) NOT NULL,
    data_ocorrido DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Aguardando Validação',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);gestor@ubstiradentes.com
