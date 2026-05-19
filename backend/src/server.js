// Chamar as dependências que foram instaladas no backend

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Puxa as variáveis do arquivo .env

const app = express(); //toda vez que quiser usar o express, basta usar a variável app

// Middlewares básicos
app.use(cors()); // Permite que o seu frontend React converse com este backend
app.use(express.json()); // Permite que a API entenda informações no formato JSON

// Rota de teste
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'ok', 
        mensagem: 'API do sistema rodando perfeitamente!' 
    });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});