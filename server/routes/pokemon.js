const express = require("express");
const router = express.Router();
const { Pokemon } = require("../db/index");

// Get route for all pokemon
router.get("/", (req, res) => {
    Pokemon.findAll().then((data) => {
        res.json(data);
    });
});

// Get route for a specific pokemon by id
router.get("/:id", (req, res) => {
    Pokemon.findByPk({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific pokemon by name
router.get("/:name", (req, res) => {
    Pokemon.findOne({
        where: {
            name: req.params.name,
        },
    }).then((data) => {
        res.json(data);
    });
});

//GET route for a specific pokemon by type
router.get("/:type", (req, res) => {
    Pokemon.findAll({
        where: {
            type: req.params.type,
        },
    }).then((data) => {
        res.json(data);
    });
});

//export the router
module.exports = router;
