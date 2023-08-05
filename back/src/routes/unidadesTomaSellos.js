const db = require('../db/database');
const unidadesTSellos = require('../models/unidadesTomaSello');
const roter = require('express').Router();


//todos los proyectos
roter.get('/', async(req, res) => {
    const unidades = await unidadesTSellos.findAll();
    res.json(unidades)
});

//proyecto por id
roter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const unidades = await unidadesTSellos.findByPk(id);
    res.json(unidades);
});

//proyecto-id
roter.get('/idProject/:id', async (req, res) => {
    const { id } = req.params;
    const unidades = await unidadesTSellos.findByPk(idProyecto);
    res.json(unidades);
});

//proyecto-id
roter.get('/idProject/selec/', async (req, res) => {
    const queries = ["select * from 'contratista'",  "select * from 'contratista'"];

    db.query(queries.join(';'), function (error, results, fields) {
        if (error) throw error;
        res.render('test', {
            columnNames: results[0], 
            dataRegistros: resp      
        });
    
    });
});

// crear proyecto 
roter.post('/new', async (req, res) => {
    try{
        const { idProyecto,noPiso, idSello, IdContratista , IdAgrupacion} = req.body;   
        console.log(req.body);
        if ( idProyecto===null|| noPiso===null|| idSello===null|| IdContratista===null || IdAgrupacion===null ){
            return res.status(400).json({
                Error:"CAMPOS INCOMPLETOS"
            })
        }
        console.log("    GUARDADO REALIZADO CORRECTAMENTE   ");
        const unidades = await unidadesTSellos.create({ idProyecto, noPiso, idSello, IdContratista , IdAgrupacion});
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar' });
    }

});

module.exports = roter;