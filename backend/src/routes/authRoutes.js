const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Rota POST: Recebe e-mail e senha do frontend
router.post('/login', login);

module.exports = router;