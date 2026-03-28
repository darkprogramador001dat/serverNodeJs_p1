const express = require('express');
const route = express.Router();

const path = require('path');

route.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../views', 'page_error.html')); 
});



module.exports = route;