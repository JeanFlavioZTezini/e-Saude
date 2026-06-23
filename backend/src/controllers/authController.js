const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // 1. Busca o usuário no banco de dados
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await pool.query(query, [email]);

    // Se não encontrou o e-mail
    if (result.rowCount === 0) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
    }

    const usuario = result.rows[0];

    // 2. Compara a senha digitada com o hash protegido salvo no banco
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
    }

    // 3. Monta os dados que vão dentro do "Crachá Virtual" (Token)
    const payload = {
      id: usuario.id,
      nome: usuario.nome,
      perfil: usuario.perfil,
      unidade_id: usuario.unidade_id,
      municipio: usuario.municipio_responsavel
    };

    // 4. Gera o Token JWT (dura 8 horas)
    const secret = process.env.JWT_SECRET || 'chave_super_secreta_esaude_2026';
    const token = jwt.sign(payload, secret, { expiresIn: '8h' });

    // 5. Retorna o sucesso, o token e os dados do usuário para o React
    res.status(200).json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: payload
    });

  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ erro: 'Erro interno no servidor ao tentar fazer login.' });
  }
};

module.exports = { login };