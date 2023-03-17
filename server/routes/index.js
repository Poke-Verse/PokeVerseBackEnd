const express = require("express");
const router = express.Router();

// different model routers
router.use("/users", require("./users"));
router.use("/pokemon", require("./pokemon"));

module.exports = router;
