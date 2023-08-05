const { DataTypes } = require("sequelize");
const db = require('../db/database');

const Piso = db.define("Piso", {
    NoPiso: {
        type: DataTypes.STRING,
    },
    selecto: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Piso;