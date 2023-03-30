const express = require("express");
const router = express.Router();
const { User } = require("../db/index");

// GET route for all admins
router.get("/", async (req, res) => {
    const admins = await User.findAll({
        where: {
            isAdmin: true,
        },
    });
    if (!admins) {
        res.status(400).send("Applciation has no admins");
    } else {
        res.send(admins);
    }
});

// GET route for a specific admin by id
router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);

    if (!user) {
        res.status(400).send(`No admin with id: ${req.params.id}`);
    } else {
        if (!user.isAdmin) {
            res.status(400).send(
                `User with id: ${req.params.id} is not an admin.`
            );
        } else {
            res.send(user);
        }
    }
});

// GET route for a specific admin by name
router.get("/name/:name", async (req, res) => {
    const user = await User.findOne({
        where: {
            firstName: req.params.name,
        },
    });
    if (!user) {
        res.status(400).send(`No admin with name: ${req.params.name}`);
    } else {
        if (!user.isAdmin) {
            res.status(400).send(
                `User with name: ${req.params.name} is not an admin.`
            );
        } else {
            res.send(user);
        }
    }
});

// GET route for a specific admin by email
router.get("/email/:email", async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.params.email,
        },
    });

    if (!user) {
        res.status(400).send(`No admin with email: ${req.params.email}`);
    } else {
        if (!user.isAdmin) {
            res.status(400).send(
                `User with email: ${req.params.email} is not an admin.`
            );
        } else {
            res.send(user);
        }
    }
});

module.exports = router;
