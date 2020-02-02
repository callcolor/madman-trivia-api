"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_sequelize_1 = require("feathers-sequelize");
const axios_1 = __importDefault(require("axios"));
const shuffle = require('shuffle-array');
const md5 = require("blueimp-md5");
var Base64 = require('js-base64').Base64;
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const decode = function (str) {
    return entities.decode(Base64.decode(str));
};
class Questions extends feathers_sequelize_1.Service {
    constructor(options, app) {
        super(options);
    }
    async find(params) {
        var _a;
        const query = ((_a = params) === null || _a === void 0 ? void 0 : _a.query) || {};
        const questions = [];
        try {
            const response = await axios_1.default.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple&encode=base64');
            const tdbq = response.data.results[0];
            const question = {
                _id: md5(JSON.stringify(tdbq)),
                question: decode(tdbq.question),
                answers: shuffle(tdbq.incorrect_answers.concat(tdbq.correct_answer)).map((answer) => decode(answer)),
                correctAnswerInsecure: decode(tdbq.correct_answer),
            };
            //TODO: Persist question
            questions.push(question);
        }
        catch (e) {
            console.log(e);
        }
        return questions;
    }
}
exports.Questions = Questions;
