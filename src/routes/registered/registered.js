const express = require('express');
const route = express.Router();
const path = require('path');

const { register } = require('../../controller/userController');

// Servir o HTML
route.get('/', (request, response) => {
    const filePath = path.join(__dirname, '../../views', 'registered.html');

    // Envia o arquivo com tratamento de erro
    response.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar registered.html:', err);
            response.status(500).send('Erro interno do servidor');
        }
    });
});


route.post('/register', register);


module.exports = route;
