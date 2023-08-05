const { DataTypes } = require("sequelize");
const db = require('../db/database');

const unidadesTSello = db.define("unidadestsellos", {
    idProyecto: {
        type: DataTypes.INTEGER,
    },
    noPiso: {
        type: DataTypes.INTEGER,
    },
    idSello: {
        type: DataTypes.INTEGER,
    },
    IdContratista: {
        type: DataTypes.INTEGER,
    },
    IdAgrupacion: {
        type: DataTypes.INTEGER,
    }
});

module.exports = unidadesTSello;
