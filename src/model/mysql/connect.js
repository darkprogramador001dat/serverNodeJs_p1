// src/model/mysql/connect.js

const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '.env') // ajuste conforme seu projeto
});

if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    console.error('Erro: Variáveis de ambiente do MySQL não definidas corretamente!');
    process.exit(1);
}

// Cria pool de conexões para melhor performance
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exporta a versão com promise para usar async/await nos models
const db = pool.promise();

db.getConnection()
    .then(conn => {
        console.log('----[ Conectado ao MySQL2 ]----\n\n');
        conn.release(); // devolve conexão para o pool
    })
    .catch(err => {
        console.error('Erro ao conectar MySQL2:', err);
        process.exit(1); // encerra o app se não conectar
    });

module.exports = db;
