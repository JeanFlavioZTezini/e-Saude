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
    
    // Retorna o registro recém-criado para o frontend
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error("Erro ao registrar intercorrência:", error);
    res.status(500).json({ erro: 'Erro interno ao salvar no banco de dados.' });
  }
};

module.exports = {
  registrarIntercorrencia
};