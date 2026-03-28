const app = require('./app');
const ssl = require('./config/openssl/openssl');

const https = require('https');
const dotenv = require('dotenv');

require('dotenv').config({
    path: require('path').resolve(__dirname, './config/dotenv/.env')
});
const HOST = process.env.HOST;
const PORT = process.env.PORT;


https.createServer(ssl, app).listen(PORT, () => {
    console.clear();
    console.log('++++++++++++++++++++++++++');
    console.log('| Servidor NodeJS online |');
    console.log('++++++++++++++++++++++++++\n\n\n');
    console.log('')
    console.log('---------------------------------------------------------------------');
    console.log(`=> https://${HOST}:${PORT}/`);
    console.log(`=> https://${HOST}:${PORT}/registered`);
    console.log(`=> https://${HOST}:${PORT}/login`);
    console.log(`=> https://${HOST}:${PORT}/about`);
    console.log(`=> https://${HOST}:${PORT}/post`);
    console.log('---------------------------------------------------------------------\n');

});
