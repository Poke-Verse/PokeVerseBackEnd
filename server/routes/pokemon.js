const express = require("express");
const router = require("express").Router();
// const { db, users, pokemon, admin } = require("../models");

// Get route for all pokemon
router.get("/", (req, res) => {
    pokemon.findAll().then((data) => {
        res.json(data);
    });
});

// Get route for a specific pokemon by id
router.get("/:id", (req, res) => {
    pokemon.findByPk({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific pokemon by name
router.get("/:name", (req, res) => {
    pokemon.findOne({
        where: {
            name: req.params.name,
        },
    }).then((data) => {
        res.json(data);
    });
});

//GET route for a specific pokemon by type
router.get("/:type", (req, res) => {
    pokemon.findAll({
        where: {
            type: req.params.type,
        },
    }).then((data) => {
        res.json(data);
    });
});

//export the router
module.exports = router;


