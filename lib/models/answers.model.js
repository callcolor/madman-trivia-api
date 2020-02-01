"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const sequelize_1 = require("sequelize");
function default_1(app) {
    const sequelizeClient = app.get('sequelizeClient');
    const answers = sequelizeClient.define('answers', {
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        questionId: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        isCorrect: {
            type: sequelize_1.DataTypes.BOOLEAN
        }
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });
    // eslint-disable-next-line no-unused-vars
    answers.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };
    return answers;
}
exports.default = default_1;
