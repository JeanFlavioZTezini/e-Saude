const express = require('express');
const router = express.Router();
const { registrarIntercorrencia } = require('../controllers/intercorrenciaController');

// Define que quando houver um POST nesta rota, o controller será ativado
router.post('/', registrarIntercorrencia);

module.exports = router;