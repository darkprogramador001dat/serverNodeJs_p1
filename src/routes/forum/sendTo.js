const express = require('express');
const route = express.Router();

const authMiddleware = require('../../controller/authMiddleware');

const postController = require('../../controller/sendToControllers');

const path = require('path');

route.get('/', authMiddleware, (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.sendFile(path.join(__dirname, '../../views', 'sendTo.html')); 
});


route.post('/', postController.createPost);


module.exports = route;