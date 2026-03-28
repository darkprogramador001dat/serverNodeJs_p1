Antes de começar, sendo necessario configurações do projeto, segui abaixo:

As ferramentas para a construção do software
[+] ferrementas: 
 node --version v18.19.1
 OpenSSL 3.0.13 30
 VScode


A preparação do ambiente aonde sera armazenado os dados do programa, etc.
[+] configuração NodeJS:
 sudo apt install nodejs
 mkdir node
 cd node/
 npm init -y
 npm i https
 npm i express
 npm i express-rate-limit
 npm i mysql2
 npm i bcrypt
 npm i fs
 npm i dotenv



As dependências para que o projeto rode conforme, o que foi escrito
[+] dependencias: 
 https: ^1.0.0
 express: ^5.2.1
 express-rate-limit: ^8.3.1
 express-session": ^1.19.0
 mysql2: ^3.18.2
 bcrypt: ^6.0.0
 fs: ^0.0.1-security
 dotenv: ^17.3.1



Para que o projeto funcione em HTTPS, saiba-mais...
Sendo necessario, estar em src/config/openssl/ gerar codigos abaixos.
[+] configurações OpenSSL:
 sudo apt install openssl
 openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
 openssl req -new -key private_key.pem -out request.csr
 openssl x509 -req -in request.csr -signkey private_key.pem -out certificate.pem -days 365
 
 
 
Armazenando nossos dados no mysql para não perdelos
[+] configurações MySQL:
 CREATE DATABASE squareroom;
 USE squareroom;

/* Tabela de usuarios */
 CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id)
 );

/* Tabelas POST usuarios */
 CREATE TABLE posts (
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(50) NOT NULL,
   content TEXT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (id)
 );
