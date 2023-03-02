// This file is to configure the server with middlewares.

// load environment variables from .env or elsewhere
const express = require("express");
const app = express();

// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("./api", require("./routes"));

module.exports = { app };
