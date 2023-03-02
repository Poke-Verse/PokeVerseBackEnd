const { sequelize } = require("../db/db");

// To create relationship between models example

// //This adds methods to 'Page', such as '.setAuthor'. It also creates a foreign key attribute on the Page table pointing ot the User table
// Page.belongsTo(User, { as: "author" });
// User.hasMany(Page, {foreignKey: 'authorId'});

// Page.belongsToMany(Tag, {through: 'page_tags'});
// Tag.belongsToMany(Page, {through: 'page_tags'});

module.exports = {
    db: sequelize,
};
