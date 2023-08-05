const { DataTypes } = require("sequelize");
const db = require('../db/database');

const proyecto = db.define("proyecto", {
    descProyecto: {
        type: DataTypes.STRING,
    },
    proyectoActivo: {
        type: DataTypes.STRING,
    },
    fases: {
        type: DataTypes.STRING,
    },
    especial: {
        type: DataTypes.STRING,
    },
    lasPlaner: {
        type: DataTypes.STRING,
    },
    sello: {
        type: DataTypes.STRING,
    },
    idSurcursal: {
        type: DataTypes.INTEGER,
    },
    estrato: {
        type: DataTypes.INTEGER,
    },
    lasPlanerInte: {
        type: DataTypes.STRING,
    },
    lasPlanerSem: {
        type: DataTypes.STRING,
    }
})


module.exports = proyecto;