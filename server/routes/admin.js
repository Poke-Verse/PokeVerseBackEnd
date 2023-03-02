const express = require("express");
const router = express.Router();
const { db, users, pokemon, admin } = require("../models");

// GET route for all admins
router.get("/", (req, res) => {
    admin.findAll().then((data) => {
        res.json(data);
    });
});

// GET route for a specific admin by id
router.get("/:id", (req, res) => {
    admin.findByPk({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific admin by name
router.get("/:name", (req, res) => {
    admin.findOne({
        where: {
            name: req.params.name,
        },
    }).then((data) => {
        res.json(data);
    });
});

// GET route for a specific admin by email
router.get("/:email", (req, res) => {
    admin.findOne({
        where: {
            email: req.params.email,
        },
    }).then((data) => {
        res.json(data);
    });
});
