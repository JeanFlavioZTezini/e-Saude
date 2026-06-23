const jwt = require('jsonwebtoken');
require('dotenv').config();

const verificarToken = (req, res, next) => {
  // O token geralmente vem no cabeçalho assim: "Bearer eyJhbGciOiJIUzI1..."
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  // Se o frontend não mandou o crachá
  if (!token) {
    return res.status(401).json({ erro: 'Acesso negado. Nenhum token de autenticação foi fornecido.' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'chave_super_secreta_esaude_2026';
    
    // Verifica se o token é verdadeiro e se não está vencido
    const payload = jwt.verify(token, secret);
    
    // Salva os dados do usuário na requisição para podermos usar depois
    req.usuario = payload; 
    
    next(); // Tudo certo! Deixa o fluxo continuar para o Controller.
  } catch (error) {
    res.status(403).json({ erro: 'Token inválido ou expirado.' });
  }
};

module.exports = { verificarToken };