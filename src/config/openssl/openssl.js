const path = require('path');
const fs = require('fs');

const ssl = {
    key: fs.readFileSync(path.resolve(__dirname, 'private_key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'certificate.pem'))
};

module.exports = ssl;