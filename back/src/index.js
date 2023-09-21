
const express = require('express');
const cors = require('cors');
const proyectos = require("./routes/proyectos");
const atapasProyectos = require("./routes/atapasProyectos");
const contratistas = require("./routes/contratistas");
const sellosDeCalidad = require("./routes/sellosDeCalidad");
const pisos = require("./routes/pisos");
const db = require('./db/database');
const unidadesTSello = require('./routes/unidadesTomaSellos');
const app = express();
const port = process.env.port || 3030;

app.use(express.json());//escribe informacion
app.use(cors());//habilta para nueVas solicitudes a la app


(async () => {
    try {
        await db.authenticate();
        console.log("BASE DE DATOS CONECTADA");
        await db.sync();
    }catch(err){
        console.log("ERROR AL CONECTARCE A LA BASE DE DATOS");
        throw new Error(err);
    }
})()


app.use('/proyecto', proyectos);
app.use('/atapasProyectos', atapasProyectos);
app.use('/contratistas', contratistas);
app.use('/sellosDeCalidad', sellosDeCalidad);
app.use('/unidadesTSello', unidadesTSello);
app.use('/pisos', pisos);


app.listen(port, () => {
    console.log('listening on port:' , port);
});

