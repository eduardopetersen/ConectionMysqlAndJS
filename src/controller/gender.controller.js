const { response } = require("express");
const GenderModel = require("../model/Gender");
const GenderController = {  
    listAll: async (req, res) => {
        const genders = await GenderModel.findAll(); // findAll mesma coisa que "select * from gender"

        return res.json(genders);
    },  


    async cadastrarGenero(req, res) {
        const { gender } = req.body;

        const newGender =  await GenderModel.create({
            gender
        });
        
        res.json(newGender);

    },

     async deletarGenero (req, res) {
        const { gender_id } = req.params;

        await GenderModel.destroy({
            where:{
                gender_id,
            },
        });

        res.json("Gênero removido com sucesso");
    
    },

    async atualizarGenero(req, res) {
        const { gender_id } = req.params;
        const { gender } = req.body;

        const generoAtualizado = await GenderModel.update(
            {
                gender
            },
            {
                where: {
                    gender_id,
                },
            }

            );

        res.json("Genero Atualizado");
    },
};

module.exports = GenderController