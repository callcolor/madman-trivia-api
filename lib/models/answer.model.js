"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Answer {
    constructor(userId, questionId, answer, isCorrect) {
        this.userId = userId;
        this.questionId = questionId;
        this.answer = answer;
        this.isCorrect = isCorrect;
    }
}
exports.Answer = Answer;
