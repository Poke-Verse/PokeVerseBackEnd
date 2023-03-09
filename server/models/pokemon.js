const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Pokemon = sequelize.define('pokemon', {
    regionalPokeDexId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    pokedexEntry: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    image: DataTypes.STRING
  });
  
  module.exports = { Pokemon };