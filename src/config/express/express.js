const express = require('express');
const session = require('express-session');
const rateLimiter = require('express-rate-limit');

const path = require('path');
const fs = require('fs'); // importando SSL

const limiter = rateLimiter({
   windowMs: 15*60*1000,
   max: 100,
   message: 'Bloqueio por excesso de requisições'
});

const app = express();

app.use(limiter);

//app.use(express.static(path.resolve('public')));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../public/imagens')));

app.use(express.urlencoded({ extended: true }));

// Salvar sessão usuario logado. Desativado/Ativar
app.use(session({
    secret: 'secure_super_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

module.exports = app;
