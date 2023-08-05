const Contratistas = require('../models/contratista');
const roter = require('express').Router();


//todos los proyectos
roter.get('/', async(req, res) => {
    const contratista = await Contratistas.findAll();
    res.json(contratista)
});

//proyecto por id
roter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const contratista = await Contratistas.findByPk(id);
    res.json(contratista);
});

// crear proyecto 
roter.post('/new', async (req, res) => {
    const { descContratista, an8, nit, estado} = req.body;
    if (!descContratista || !an8 || !nit){
        return res.status(400).json({
            Error:"CAMPOS INCOMPLETOS"
        })
    }
    const contratista = await Contratistas.create({ descContratista, an8, nit, estado});
    res.json(contratista);
});

module.exports = roter;