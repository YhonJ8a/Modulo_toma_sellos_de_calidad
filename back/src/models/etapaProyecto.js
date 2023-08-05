const { DataTypes } = require("sequelize");
const db = require('../db/database');

const EtapaProyecto = db.define("etapaproyectos", {
    descEtapaProyecto: {
        type: DataTypes.STRING,
    },
    hc: {
        type: DataTypes.STRING,
    },
    hcFace: {
        type: DataTypes.STRING,
    },
    noInmuebles: {
        type: DataTypes.INTEGER,
    },
    noAscensores: {
        type: DataTypes.INTEGER,
    },
    noSotanos: {
        type: DataTypes.INTEGER,
    },
    noSemisotanos: {
        type: DataTypes.INTEGER,
    },
    noIntermedios: {
        type: DataTypes.INTEGER,
    },
    primeNivelVivienda: {
        type: DataTypes.INTEGER,
    },
    ultimoNivelVivienda: {
        type: DataTypes.INTEGER,
    },
    nivelesSuperiores: {
        type: DataTypes.INTEGER,
    },
    areaPromedio: {
        type: DataTypes.INTEGER,
    },
    activo: {
        type: DataTypes.INTEGER,
    }
})

module.exports = EtapaProyecto;