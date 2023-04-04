// This file is to configure the server with middlewares.
require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const { decodeToken } = require("./auth/decodeToken");

// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

// Auth Middleware
app.use(async (req, res, next) => {
    const auth = req.header("Authorization");
    if (!auth) {
        next();
    } else {
        const [, token] = auth.split(" ");

        try {
            req.token = jwt.verify(token, JWT_SECRET);
            const payload = decodeToken(token);
            req.userId = payload.userId;
            next();
        } catch (e) {
            res.status(401).send("Token not valid");
        }
    }
});

app.use("/api", require("./routes"));

// Authorization middleware has to be before we set the routes
// Otherwise the routes will not have authorization or anything to protect them.

module.exports = { app };
