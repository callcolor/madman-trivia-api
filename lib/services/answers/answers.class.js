"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_sequelize_1 = require("feathers-sequelize");
const answer_model_1 = require("../../models/answer.model");
class Answers extends feathers_sequelize_1.Service {
    constructor(options, app) {
        super(options);
    }
    async create(answer, params) {
        // TODO: validate and persist answer
        return new answer_model_1.Answer(0, "0", "", true);
    }
}
exports.Answers = Answers;
