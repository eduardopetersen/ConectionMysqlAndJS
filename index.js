const express = require("express"); // vai chamar o http de forma implicita via express
const { hasConection } = require("./src/database");
const routes = require("./src/routes"); // vai buscar esse arquivo dentro do meu proprio projeto


const server = express(); // vai gerar o servidor
hasConection(); 
server.use(express.json()); // quando precisar utilizar JSON escrever essa linha
server.use(routes); // vai falar para o server usar esse arquivo de rotas

server.listen(8000, () => console.log("Servidor rodando na porta 8000"));