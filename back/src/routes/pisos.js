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

    try {
        const user = await Piso.update({ selecto: true }, {
            where: {
                NoPiso: id
            }
        });
        return res.status(200).json({ user });
    } catch (err) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
});

//todos los proyectos
roter.get("/api/v1/cutcontrols", async (req, res) => {
    const piso = {
        "data": [
            {
                "id": 289,
                "id_visioncenter_projects": "1",
                "num_visioncenter_projects": "1",
                "nameproject": "Dilugano",
                "order_id_main_imosix": "1",
                "order_id_imosix": "1",
                "order_id_erp": "00004589_048",
                "product_id_erp": "8702423-310",
                "description_project": "Dilugano1 Vestier 1801A",
                "quanty_project_total": 1,
                "shipping_date_customer": "2023-01-29",
                "last_commitment_date": "2023-02-14",
                "factory_delivery_date": "2023-02-10",
                "week_mum": 6,
            },
            {
                "id": 290,
                "id_visioncenter_projects": "2",
                "num_visioncenter_projects": "3",
                "nameproject": "Mamaguevo",
                "order_id_main_imosix": "1",
                "order_id_imosix": "1",
                "order_id_erp": "00004589_048",
                "product_id_erp": "8702425-310",
                "description_project": "Dilugano2 Vestier 2  Apto 1891A",
                "quanty_project_total": 1,
                "shipping_date_customer": "2023-01-29",
                "last_commitment_date": "2023-02-14",
                "factory_delivery_date": "2023-02-10",
                "week_mum": 6,
            },
            {
                "id": 291,
                "id_visioncenter_projects": "3",
                "num_visioncenter_projects": "5",
                "nameproject": "Malaga",
                "order_id_main_imosix": "1",
                "order_id_imosix": "1",
                "order_id_erp": "00004589_048",
                "product_id_erp": "8702425-310",
                "description_project": "Dilugano3 Vestier 4  Apto 2301A",
                "quanty_project_total": 1,
                "shipping_date_customer": "2023-01-29",
                "last_commitment_date": "2023-02-14",
                "factory_delivery_date": "2023-02-10",
                "week_mum": 6,
            },
        ]
    };
    res.json(piso);
});

//todos los proyectos
roter.get("/api/v2/prueba", async (req, res) => {
    const piso = {
        "data": [
            {
                "id": 289,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Jhon",
            },
            {
                "id": 290,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Manuel",
            },
            {
                "id": 291,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Jose",
            },
            {
                "id": 292,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Karen",
            },
            {
                "id": 293,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Sol",
            },
            {
                "id": 294,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Pedro",
            },
            {
                "id": 295,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Carlos",
            },
            {
                "id": 296,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Mario",
            },
            {
                "id": 297,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Maria",
            },
            {
                "id": 298,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Jhon",
            },
            {
                "id": 299,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Manuel",
            },
            {
                "id": 300,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Jose",
            },
            {
                "id": 301,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Karen",
            },
            {
                "id": 302,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Sol",
            },
            {
                "id": 303,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Pedro",
            },
            {
                "id": 304,
                "idprojects": "cas1",
                "numprojects": "1",
                "nameproject": "Dilugano",
                "main_imosix": "1",
                "imosix": "Carlos",
            },
            {
                "id": 305,
                "idprojects": "cas2",
                "numprojects": "3",
                "nameproject": "Prosper",
                "main_imosix": "1",
                "imosix": "Mario",
            },
            {
                "id": 306,
                "idprojects": "cas3",
                "numprojects": "5",
                "nameproject": "Malaga",
                "main_imosix": "1",
                "imosix": "Maria",
            },
        ]
    };
    res.json(piso);
});

module.exports = roter;
