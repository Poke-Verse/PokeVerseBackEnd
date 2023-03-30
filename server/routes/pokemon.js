const express = require("express");
const router = express.Router();
const { Pokemon } = require("../db/index");

// Get route for all pokemon
router.get("/", (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        Pokemon.findAll().then((data) => {
            res.json(data);
        });
    }
});

// Get route for a specific pokemon by id
router.get("/:id", (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        Pokemon.findByPk({
            where: {
                id: req.params.id,
            },
        }).then((data) => {
            res.json(data);
        });
    }
});

// GET route for a specific pokemon by name
router.get("/:name", (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        Pokemon.findOne({
            where: {
                name: req.params.name,
            },
        }).then((data) => {
            res.json(data);
        });
    }
});

//GET route for a specific pokemon by type
router.get("/:type", (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        Pokemon.findAll({
            where: {
                type: req.params.type,
            },
        }).then((data) => {
            res.json(data);
        });
    }
});

//export the router
module.exports = router;
