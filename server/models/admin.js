const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Admin = sequelize.define('admin', {
    name: DataTypes.STRING,
    