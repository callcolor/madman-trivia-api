"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const answers_class_1 = require("./answers.class");
const answers_model_1 = __importDefault(require("../../models/answers.model"));
const answers_hooks_1 = __importDefault(require("./answers.hooks"));
function default_1(app) {
    const options = {
        Model: answers_model_1.default(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/answers', new answers_class_1.Answers(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('answers');
    service.hooks(answers_hooks_1.default);
}
exports.default = default_1;
