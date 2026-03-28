const express = require('express');
const route = express.Router();
const path = require('path');

const authController = require('../../controller/consultController');
const rateLimiter = require('express-rate-limit');

// const fs = require('fs'); // importando SSL

const limiter = rateLimiter({
   windowMs: 15*60*1000, // 15 min.
   max: 5,
   message: 'Bloqueio por excesso de requisições'
});

route.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.sendFile(path.join(__dirname, '../../views', 'login.html'));
});


route.post('/', limiter, authController.login);

module.exports = route;
