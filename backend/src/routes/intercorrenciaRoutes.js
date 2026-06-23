const express = require('express');
const router = express.Router();

// 1. Importa as funções do controller
const { 
  registrarIntercorrencia, 
  listarIntercorrencias, 
  atualizarStatus,
  atualizarIntercorrencia
} = require('../controllers/intercorrenciaController');

// 👇 2. IMPORTA O NOSSO NOVO FILTRO DE SEGURANÇA 👇
const { verificarToken } = require('../middlewares/authMiddleware');

// 3. Coloca o 'verificarToken' no meio do caminho!
// Agora, antes de chegar no controller, o Node passa pelo filtro.
router.post('/', verificarToken, registrarIntercorrencia);
router.get('/', verificarToken, listarIntercorrencias);
router.patch('/:id/status', verificarToken, atualizarStatus);
router.put('/:id', verificarToken, atualizarIntercorrencia);

module.exports = router;