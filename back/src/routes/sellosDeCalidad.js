const SellosCalidad = require('../models/sellosCalidad');
const roter = require('express').Router();


//todos los proyectos
roter.get('/', async(req, res) => {
    const sellosCalidad = await SellosCalidad.findAll();
    res.json(sellosCalidad)
});

//proyecto por id
roter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const sellosCalidad = await SellosCalidad.findByPk(id);
    res.json(sellosCalidad);
});

// crear proyecto 
roter.post('/new', async (req, res) => {
    const {descSello,  idtipoSellocalidad, reponsable, estado } = req.body;
    if (!descSello || !idtipoSellocalidad || !reponsable || !estado){
        return res.status(400).json({
            Error:"CAMPOS INCOMPLETOS"
        })
    }
    const sellosCalidad = await SellosCalidad.create({descSello,  idtipoSellocalidad, reponsable, estado });
    res.json(sellosCalidad);
});

module.exports = roter;