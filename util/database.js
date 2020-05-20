const Sequelize = require('sequelize/index');

const sequelize = new Sequelize('node-complete', 'root', 'shamsuddin5311', {
    dialect:'mysql',
    host:'localhost'
});


module.exports = sequelize;
