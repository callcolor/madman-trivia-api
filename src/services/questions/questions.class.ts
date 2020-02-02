import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Id, Params } from '@feathersjs/feathers';
import axios from 'axios';
import questionsHooks from './questions.hooks';
const shuffle = require('shuffle-array');
const md5 = require("blueimp-md5");
var Base64 = require('js-base64').Base64;
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const decode = function(str: string) {
  return entities.decode(Base64.decode(str));
}

export class Questions extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find (params?: Params) {
    const query = params?.query || {};

    const questions = [];
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple&encode=base64');
      const tdbq = response.data.results[0];
      const question = {
        _id: md5(JSON.stringify(tdbq)),
        question: decode(tdbq.question),
        answers: shuffle(tdbq.incorrect_answers.concat(tdbq.correct_answer)).map((answer: string) => decode(answer)),
        correctAnswerInsecure: decode(tdbq.correct_answer),
      }

      //TODO: Persist question
      questions.push(question);
    } catch (e) {
      console.log(e);
    }

    return questions;
  }
}
