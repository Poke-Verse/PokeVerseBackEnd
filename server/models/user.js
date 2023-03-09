const { sequelize } = require('../db/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    favoritePokemon: DataTypes.STRING,
    avatarImg: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  });
  
  module.exports = { User };