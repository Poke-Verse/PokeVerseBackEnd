require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');

const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require('../models/user');
const { JWT_SECRET } = process.env;

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

router.post('/register', async (req, res) => {
    const { firstName, password } = req.body;
    try {
        await sequelize.sync({force: true});
        // Hash the password with bcrypt.hash
        const hashedPassword = await bcrypt.hash(password, 10);
        // Call User.create (User is already imported above)
        const user = await User.create({ firstName : firstName, password: hashedPassword });
        // Send back a success message (a string) per the test specs.
        console.log(user)
        res.send(`successfully created user ${user.firstName}`);
    } catch (error) {
        console.error(error);
        next(error)
    }
});
  
router.post('/login', async (req, res) => {
    const { firstName, password } = req.body;
    try {
      const user = await User.findOne({ where: { firstName } });
      if (!user) {
        return res.status(401).send({ message: 'Invalid firstName or password' });
      }
      // Compare the submitted password to the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send({ message: 'Invalid firstName or password' });
      }
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ user, token });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Invalid firstName or password' });
    }
  });

//export the router
module.exports = router;