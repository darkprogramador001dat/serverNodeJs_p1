const express = require('express');
const route = express.Router();

const path = require('path');

route.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.sendFile(path.join(__dirname, '../../views', 'home.html')); 
});



module.exports = route;
