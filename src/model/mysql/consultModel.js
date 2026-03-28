const db = require('./connect');

async function findUser(username) {
    const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ?', [username]);

    return rows[0];
}

module.exports = {
    findUser
};