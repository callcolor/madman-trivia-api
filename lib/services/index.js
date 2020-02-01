"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users/users.service"));
const questions_service_1 = __importDefault(require("./questions/questions.service"));
const answers_service_1 = __importDefault(require("./answers/answers.service"));
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.configure(users_service_1.default);
    app.configure(questions_service_1.default);
    app.configure(answers_service_1.default);
}
exports.default = default_1;
