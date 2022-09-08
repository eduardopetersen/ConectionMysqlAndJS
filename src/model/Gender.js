const sequelize = require("sequelize");
const db = require("../database");

const Gender = db.define( //criar constante (pode ser o nome da tabela) e definir as informações que constam nela
    "Gender", 
    {
        gender_id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gender: {
            type: sequelize.DataTypes.STRING, //varchar = String
        }
    },
    {
        tableName: "gender", 
        timestamps: false, //sequelize vai supor que tem essas informações por padrao. Como não tem esses campos na tabela(data de criação / update) é falso.
    }
);

module.exports = Gender; // precisa ser o mesmo nome da const na linha 4
