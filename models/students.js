
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Student = sequelize.define('student', {
    Student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Student_name: Sequelize.STRING,
    Student_email:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    Student_password:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    Student_phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Student_Branch: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Student_state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CreatedOn: { type: new Date() },
    ModifiedOn: { type: new Date() },
    IsDeleted: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Student'
    });
module.exports = Student;
