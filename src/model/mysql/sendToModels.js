const db = require('./connect');

async function createPost(username, content) {
    const sql = 'INSERT INTO posts (username, content) VALUES (?, ?)';
    const [result] = await db.execute(sql, [username, content]);
    return result;
}

module.exports = {
    createPost
};