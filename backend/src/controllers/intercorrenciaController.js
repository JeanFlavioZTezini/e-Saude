const pool = require('../config/db');

const registrarIntercorrencia = async (req, res) => {
  try {
    const { ubs_nome, tipo, descricao, impacto, data_ocorrido } = req.body;

    const query = `
      INSERT INTO intercorrencias (ubs_nome, tipo, descricao, impacto, data_ocorrido)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    
    const values = [ubs_nome, tipo, descricao, impacto, data_ocorrido];
    const result = await pool.query(query, values);
    
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error("Erro ao registrar intercorrência:", error);
    res.status(500).json({ erro: 'Erro interno ao salvar no banco de dados.' });
  }
};

const listarIntercorrencias = async (req, res) => {
  try {
    const { ubs } = req.query; // Pega o nome da UBS se for passado na URL
    
    let query = 'SELECT * FROM intercorrencias ORDER BY data_ocorrido DESC, id DESC';
    let values = [];

    // Se vier uma UBS específica, filtra só as dela. Se não, traz todas (para o Administrador)
    if (ubs) {
      query = 'SELECT * FROM intercorrencias WHERE ubs_nome = $1 ORDER BY data_ocorrido DESC, id DESC';
      values = [ubs];
    }

    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao listar intercorrências:", error);
    res.status(500).json({ erro: 'Erro interno ao buscar no banco de dados.' });
  }
};

// 👇 NOVA FUNÇÃO: ATUALIZAR STATUS 👇
const atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params; // Pega o ID da intercorrência pela URL
    const { status } = req.body; // Pega o novo status que o frontend mandou

    const query = 'UPDATE intercorrencias SET status = $1 WHERE id = $2 RETURNING *;';
    const values = [status, id];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ erro: 'Intercorrência não encontrada.' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    res.status(500).json({ erro: 'Erro interno ao atualizar no banco de dados.' });
  }
};

const atualizarIntercorrencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, descricao, impacto, data_ocorrido } = req.body;

    // Atualiza os dados e volta o status para 'Aguardando Validação'
    const query = `
      UPDATE intercorrencias 
      SET tipo = $1, descricao = $2, impacto = $3, data_ocorrido = $4, status = 'Aguardando Validação'
      WHERE id = $5 
      RETURNING *;
    `;
    const values = [tipo, descricao, impacto, data_ocorrido, id];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ erro: 'Intercorrência não encontrada.' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao editar intercorrência:", error);
    res.status(500).json({ erro: 'Erro interno ao editar no banco de dados.' });
  }
};

// Não se esqueça de exportar a nova função aqui embaixo!
module.exports = {
  registrarIntercorrencia,
  listarIntercorrencias,
  atualizarStatus,
  atualizarIntercorrencia
};