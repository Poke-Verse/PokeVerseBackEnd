const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../db/db");

const Pokemon = sequelize.define("pokemon", {
    regional_pokedex_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    pokedex_entry: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    image: DataTypes.STRING,
});

module.exports = { Pokemon };
