const postModel = require('../model/mysql/sendToModels');

async function createPost(req, res) {
    try {
        const { username, post } = req.body;

        if (!username || !post) {
            return res.status(400).send("Preencha todos os campos");
        }

        await postModel.createPost(username, post);

        res.redirect('/'); // ou resposta JSON
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
}

module.exports = {
    createPost
};