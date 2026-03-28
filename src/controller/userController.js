const { createUser, findUserByEmail } = require('../model/mysql/userModel');
const bcrypt = require('bcrypt');

const path = require('path');

async function register(request, response)
{
   try
   {
      const { username, email, password, confirm_password } = request.body;

      const userExists = await findUserByEmail(email);
      if (userExists)
      {
         return response.status(400).send('<h4>Email já cadastrado </h4>');
      }

      // Validação simples
      if (!username || !email || !password || !confirm_password)
      {
         return response.status(400).send('<h4> Todos os campos são obrigatorios </h4>');
      }

      if (password !== confirm_password)
      {
         return response.status(400).send('<h4> As senhas não conferem </h4>');
      }

      // Tudo Okay
      const hashedPassword = await bcrypt.hash(password, 10);

      // salvar usuario
      await createUser(username, email, hashedPassword);

      // redirecionar
      response.redirect('/');

   } catch (error) {
      console.error(error);
      response.status(500).send('Erro no servidor interno');
   }
}


module.exports = { register };
