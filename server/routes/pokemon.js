const express = require("express");
const router = express.Router();
const { Pokemon } = require("../db/index");
const { Op } = require("sequelize");

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
router.get("/:id", async (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        const pokemon = await Pokemon.findByPk(req.params.id);

        if (!pokemon) {
            res.status(400).send(
                `Pokemon with id: ${req.params.id} does not exist`
            );
        } else {
            res.send(pokemon);
        }
    }
});

// GET route for a specific pokemon by name
router.get("/name/:name", async (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        const pokemon = await Pokemon.findOne({
            where: {
                name: req.params.name,
            },
        });

        if (!pokemon) {
            res.status(400).send(
                `Pokemon with name: ${req.params.name} does not exist`
            );
        } else {
            res.send(pokemon);
        }
    }
});

//GET route for a specific pokemon by type
router.get("/type/:type", async (req, res) => {
    if (!req.token) {
        res.status(401).send("Unauthenticated");
    } else {
        const pokemon = await Pokemon.findAll({
            where: {
                type: {
                    [Op.like]: `%${req.params.type}`,
                },
            },
        });

        if (!pokemon) {
            res.status(400).send(
                `Pokemon with type: ${req.params.type} does not exist`
            );
        } else {
            res.send(pokemon);
        }
    }
});

//export the router
module.exports = router;
