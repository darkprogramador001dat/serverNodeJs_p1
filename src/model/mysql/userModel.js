const db = require('./connect');

async function createUser(username, email, hashedPassword)
{
   const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
   const [result] = await db.execute(query, [username, email, hashedPassword]);
   return result;
}

async function findUserByEmail(email)
{
   const query = 'SELECT * FROM users WHERE email = ?';
   const [rows] = await db.execute(query, [email]);
   return rows[0];
}

module.exports = { 
   createUser,
   findUserByEmail
};
