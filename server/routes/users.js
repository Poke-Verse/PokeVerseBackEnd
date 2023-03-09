const express = require("express");
const router = express.Router();
// const { db, users, pokemon, admin } = require("../models");

// GET route for all users
router.get("/", (req, res) => {
    users.findAll().then((data) => {
        res.json(data);
    });
});

// GET route for a specific user by id
router.get("/:id", (req, res) => {
    users.findByPk({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific user by name
router.get("/:name", (req, res) => {
    users.findOne({
        where: {
            name: req.params.name,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific user by email
router.get("/:email", (req, res) => {
    users.findOne({
        where: {
            email: req.params.email,
        },
    }).then((data) => {
        res.json(data);
    });
});

//export the router
module.exports = router;