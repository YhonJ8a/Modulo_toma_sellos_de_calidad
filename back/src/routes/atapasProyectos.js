const EtapaProyecto = require('../models/etapaProyecto');
const roter = require('express').Router();


//todos los proyectos
roter.get('/', async(req, res) => {
    const etapaProyecto = await EtapaProyecto.findAll();
    res.json(etapaProyecto)
});

//proyecto por id
roter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const etapaProyecto = await EtapaProyecto.findByPk(id);
    res.json(etapaProyecto);
});

// crear proyecto 
roter.post('/new', async (req, res) => {
    const {descEtapaProyecto, hc, hcFace, noInmuebles, noAscensores, noSotanos, noSemisotanos, noIntermedios} = req.body;
    if (!descEtapaProyecto || !hc || !hcFace ){
        return res.status(400).json({
            Error:"CAMPOS INCOMPLETOS"
        })
    }
    const etapaProyecto = await EtapaProyecto.create({descEtapaProyecto, hc, hcFace, noInmuebles, noAscensores, noSotanos, noSemisotanos, noIntermedios});
    res.json(etapaProyecto);
});

module.exports = roter;