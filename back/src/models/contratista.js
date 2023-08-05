const { DataTypes } = require("sequelize");
const db = require('../db/database');

const contratista = db.define("contratista", {
    descContratista: {
        type: DataTypes.STRING,
    },
    an8: {
        type: DataTypes.STRING,
    },
    nit: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.INTEGER,
    }
});

module.exports = contratista;