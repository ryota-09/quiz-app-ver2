export class Quiz {
  constructor(
    private _question: string,
    private _correct_answer: string,
    private _incorrect_answers: Array<string>
  ) {}

  public get question(): string {
    return this._question;
  }

  public set question(question: string) {
    this._question = question;
  }

  public get correct_answer(): string {
    return this._correct_answer;
  }

  public set correct_answer(correct_answer: string) {
    this._correct_answer = correct_answer;
  }

  public get incorrect_answers(): Array<string> {
    return this._incorrect_answers;
  }

  public set incorrect_answers(incorrect_answers: Array<string>) {
    this._incorrect_answers = incorrect_answers;
  }
}
