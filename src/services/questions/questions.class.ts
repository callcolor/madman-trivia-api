import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Id, Params } from '@feathersjs/feathers';
import axios from 'axios';
import questionsHooks from './questions.hooks';
const shuffle = require('shuffle-array');
const md5 = require("blueimp-md5");

export class Questions extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find (params?: Params) {
    const query = params?.query || {};

    const questions = [];
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple');
      const tdbq = response.data.results[0];
      const question = {
        _id: md5(JSON.stringify(tdbq)),
        question: tdbq.question,
        answers: shuffle(tdbq.incorrect_answers.concat(tdbq.correct_answer)),
        correctAnswerInsecure: tdbq.correct_answer,
      }

      //TODO: Persist question
      questions.push(question);
    } catch (e) {
      console.log(e);
    }

    return questions;
  }
}
