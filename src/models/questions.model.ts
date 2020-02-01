// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const questions = sequelizeClient.define('questions', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['MULTIPLE', 'BOOLEAN'],
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ['EASY', 'MEDIUM', 'HARD'],
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answers: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    correctAnswerInsecure: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (questions as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return questions;
}
