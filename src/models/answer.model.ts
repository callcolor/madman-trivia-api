export class Answer {
  userId: number;
  questionId: string;
  answer: string;
  isCorrect: boolean;

  constructor(userId: number, questionId: string, answer: string, isCorrect: boolean) {
    this.userId = userId;
    this.questionId = questionId;
    this.answer = answer;
    this.isCorrect = isCorrect;
  }
}
