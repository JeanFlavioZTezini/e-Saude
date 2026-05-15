-- 1. Criação da tabela de Unidades de Saúde
CREATE TABLE IF NOT EXISTS unidades_de_saude (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    endereco TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Criação da tabela de Gestores
-- A chave estrangeira (unidade_id) garante que cada gestor pertença a uma unidade
CREATE TABLE IF NOT EXISTS gestores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    unidade_id INTEGER NOT NULL REFERENCES unidades_de_saude(id) ON DELETE RESTRICT,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Criação da tabela de Funcionários
-- A chave estrangeira (gestor_id) garante que cada funcionário responda a um gestor
CREATE TABLE IF NOT EXISTS funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    gestor_id INTEGER NOT NULL REFERENCES gestores(id) ON DELETE RESTRICT,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);