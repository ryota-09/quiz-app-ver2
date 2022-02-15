export class User {
  constructor(
    private _id: number,
    private _name: string,
    private _score: number,
    private _trialCount: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this._score = score;
  }

  public get trialCount(): number {
    return this._trialCount;
  }

  public set trialCount(trialCount: number) {
    this._trialCount = trialCount;
  }
}
