const express = require("express");  //base -  vai chamar o http de forma implicita via express
const GenderController = require("../controller/gender.controller"); //vai buscar esse arquivo dentro do meu proprio projeto
const routes = express.Router();  //base - vai ativar recurso de rotas depois de ativar o express

routes.get('/gender', GenderController.listAll);
routes.post('/novo-genero', GenderController.cadastrarGenero);
routes.delete('/deletar/:gender_id', GenderController.deletarGenero);
routes.put('/atualizar/:gender_id', GenderController.atualizarGenero);

module.exports = routes; //base