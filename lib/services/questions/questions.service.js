"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_class_1 = require("./questions.class");
const questions_model_1 = __importDefault(require("../../models/questions.model"));
const questions_hooks_1 = __importDefault(require("./questions.hooks"));
function default_1(app) {
    const options = {
        Model: questions_model_1.default(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/questions', new questions_class_1.Questions(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('questions');
    service.hooks(questions_hooks_1.default);
}
exports.default = default_1;
