const consultModel = require('../model/mysql/consultModel');
const bcrypt = require('bcrypt');

async function login(request, response) {
    try {
        const {username, password } = request.body;

        const user = await consultModel.findUser(username);

        if (!user)
        {
            return response.status(401).send('<h5> Usuário não existe </h5>');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
        {
            return response.status(401).send('<h5> senha incorreta</h5>');
        }

        request.session.user = {
            id: user.id,
            username: user.username
        };

        response.redirect('/');
    } catch (error) {
        response.status(500).send('<h5> Erro interno servidor </h5>');
    }
}

module.exports = { login };