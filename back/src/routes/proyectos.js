const Proyecto = require('../models/proyecto');
const roter = require('express').Router();


//todos los proyectos
roter.get('/', async(req, res) => {
    const proyecto = await Proyecto.findAll();
    res.json(proyecto)
});

//proyecto por id
roter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findByPk(id);
    res.json(proyecto);
});

// crear proyecto 
roter.post('/new', async (req, res) => {
    const { descProyecto, proyectoActivo, fases, especial, lasPlaner, sello, idSurcursal, estrato, lasPlanerInte, lasPlanerSem } = req.body;
    if (!descProyecto || !proyectoActivo || !fases || !especial || !lasPlaner){
        return res.status(400).json({
            Error:"CAMPOS INCOMPLETOS"
        })
    }
    const proyecto = await Proyecto.create({descProyecto, proyectoActivo, fases, especial, lasPlaner, sello, idSurcursal, estrato, lasPlanerInte, lasPlanerSem});
    res.json(proyecto);
});

module.exports = roter;