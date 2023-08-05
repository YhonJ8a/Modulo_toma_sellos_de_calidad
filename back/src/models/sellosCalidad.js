const { DataTypes } = require("sequelize");
const db = require('../db/database');

const selloCalidad = db.define("sellosCalidad", {
    descSello: {
        type: DataTypes.STRING,
    },
    idtipoSellocalidad: {
        type: DataTypes.INTEGER,
    },
    reponsable: {
        type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.STRING,
    }
})


module.exports = selloCalidad;