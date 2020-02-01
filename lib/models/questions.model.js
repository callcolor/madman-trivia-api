"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const sequelize_1 = require("sequelize");
function default_1(app) {
    const sequelizeClient = app.get('sequelizeClient');
    const questions = sequelizeClient.define('questions', {
        id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: sequelize_1.DataTypes.ENUM,
            values: ['MULTIPLE', 'BOOLEAN'],
            allowNull: false
        },
        difficulty: {
            type: sequelize_1.DataTypes.ENUM,
            values: ['EASY', 'MEDIUM', 'HARD'],
            allowNull: false
        },
        question: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        answers: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
            allowNull: false
        },
        correctAnswerInsecure: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
            allowNull: false
        },
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });
    // eslint-disable-next-line no-unused-vars
    questions.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };
    return questions;
}
exports.default = default_1;
