const { sequelize } = require("./db");
const { Pokemon } = require('../models/pokemon');
const { User } = require('../models/user');

User.hasOne(Pokemon);

module.exports = {
    db: sequelize,
    User,
    Pokemon
};



