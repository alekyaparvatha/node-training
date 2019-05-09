const Sequelize = require('sequelize');
const sequelize = new Sequelize('learning', 'root', 'dbpass',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        logging: false
    });
sequelize.authenticate()
    .then(function () {
        console.log("MariaDB Connection Established");
        // logger.info("MariaDB Connection Established");
    })
    .catch(function (err) {
        //console.log("Error Connecting to Database" + err);
        // logger.error("Error Connecting to Database" + err);
    })
    .done();
module.exports = sequelize;
