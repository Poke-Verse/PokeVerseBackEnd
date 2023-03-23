require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const { JWT_SECRET } = process.env;

// GET route for all users
router.get("/", async (req, res) => {
    const users = await User.findAll();
    if (users.length == 0) {
        res.send([]);
    }
    res.send(users);
});

// GET route for a specific user by id
router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user == null) {
        res.status(400).send("No user with that id.");
    }
    res.send(user);
});

// GET route for a specific user by name
router.get("/:name", async (req, res) => {
    const user = await User.findOne({
        where: {
            name: req.params.name,
        },
    });
    if (user == null) {
        res.status(400).send("No user with that name.");
    }
    res.send(user);
});

// GET route for a specific user by email
router.get("/:email", async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.params.email,
        },
    });
    if (user == null) {
        res.status(400).send("No user with that email.");
    }
    res.send(user);
});

// POST route to register a new user
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email: email,
            password: hashedPassword,
        });
        res.send("Successfully created user");
    } catch (error) {
        res.send(error);
    }
});

// POST route to login for users
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res
                .status(401)
                .send({ message: "Invalid firstName or password" });
        }
        // Compare the submitted password to the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res
                .status(401)
                .send({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.send({ user, token });
    } catch (err) {
        res.status(401).send("Invalid email or password");
    }
});

// PUT route to update an user using the ID as PK.
router.put("/:id", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        age,
        favoritePokemon,
        avatarImg,
        isAdmin,
    } = req.body;

    try {
        const user = await User.findByPk(req.params.id);
        if (user == null) {
            res.status(400).send(
                `User with id: ${req.params.id} was not found`
            );
        }
        user.update({
            firstName,
            lastName,
            email,
            password,
            age,
            favoritePokemon,
            avatarImg,
            isAdmin,
        });
        res.send(user);
    } catch (e) {
        res.send(e);
    }
});
// DELETE route to delete an user using the ID as PK.
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(400).send(
                `User with id: ${req.params.id} was not found.`
            );
        }
        await user.destroy();
        res.send(`User with id: ${req.params.id} was deleted.`);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
