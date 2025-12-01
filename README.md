# Projeto Node.js com Express, Sequelize e Autenticação JWT

Este projeto é uma API Node.js utilizando **Express**, **Sequelize**,
**SQLite**, **JWT** e **dotenv**, com estrutura completa para
autenticação, CRUD de usuários e configuração de ambiente.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   Node.js
-   Express
-   SQLite + Sequelize ORM
-   JWT (JSON Web Token)
-   BCrypt.js
-   Dotenv
-   Sequelize CLI
-   Nodemon

------------------------------------------------------------------------

## 📦 Instalação

``` bash
git clone seu-repo-aqui
cd seu-projeto
npm install
```

------------------------------------------------------------------------

## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

``` bash
cp .env.example .env
```

Edite os valores conforme necessário.

------------------------------------------------------------------------

## 🛠️ Executar Migrações

``` bash
npx sequelize db:migrate
```

------------------------------------------------------------------------

## ▶️ Rodar o servidor

Modo desenvolvimento:

``` bash
npm run dev
```

Modo produção:

``` bash
npm start
```

O servidor iniciará em:\
**http://localhost:3000**

------------------------------------------------------------------------


## 👤 Rotas de Usuários (protegidas)

Necessário enviar:

    Authorization: Bearer TOKEN_AQUI

-   `GET /users` --- Lista usuários\
-   `GET /users/:id` --- Busca usuário\
-   `PUT /users/:id` --- Atualiza usuário\
-   `DELETE /users/:id` --- Remove usuário

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

    /
     ├── config
     │    └── database.js
     ├── controllers
     ├── middlewares
     ├── migrations
     ├── models
     ├── routes
     └── server.js

------------------------------------------------------------------------

## 🧪 Testar com Insomnia / Postman

Cole o token JWT no header:

    Authorization: Bearer SEU_TOKEN

------------------------------------------------------------------------


