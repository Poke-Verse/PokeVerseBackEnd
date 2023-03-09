const express = require("express");
const router = express.Router();

// different model routers
router.use("/users", require("./users"));
router.use("/pokemon", require("./pokemon"));
router.use("/admin", require("./admin"));

module.exports = router;