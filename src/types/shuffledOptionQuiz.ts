export class ShuffledOptionQuiz {
  constructor(
    private _question: string,
    private _shuffledOption: Array<string>,
    private _correct_answer: string
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

  public get shuffledOption(): Array<string> {
    return this._shuffledOption;
  }

  public set shuffledOption(shuffledOption: Array<string>) {
    this._shuffledOption = shuffledOption;
  }
}
