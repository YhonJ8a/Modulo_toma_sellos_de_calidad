const Piso = require("../models/piso");
const roter = require("express").Router();
const db = require("../db/database");

//todos los proyectos
roter.get("/", async (req, res) => {
  const piso = await Piso.findAll();
  res.json(piso);
});

//todos los proyectos
roter.get("/selec", async (req, res) => {
  const piso = await Piso.findAll({
    where: {
      selecto: false,
    },
  });
  res.json(piso);
});

//todos los proyectos
roter.get("/ocultos", async (req, res) => {
  const piso = await Piso.findAll({
    where: {
      selecto: true,
    },
  });
  res.json(piso);
});
//proyecto por id
roter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const piso = await Piso.findByPk(id);
  const p1iso = await Piso.res.json(piso);
});

// crear proyecto
roter.post("/new", async (req, res) => {
  const { NoPiso, selecto } = req.body;
  if (NoPiso === null) {
    return res.status(400).json({
      Error: "CAMPOS INCOMPLETOS",
    });
  }
  const piso = await Piso.create({ NoPiso, selecto });
  res.json(piso);
});


roter.put("/update/:id", async (req, res) => {
    const { id } = req.params;

    try{
      const user = await Piso.update({ selecto: true}, {
        where: {
          NoPiso: id 
        }
      });
      return res.status(200).json({ user });
    }catch(err){
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
});

module.exports = roter;
