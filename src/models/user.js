import { dbUsers } from "../db/index";
import firebase from "firebase";

export class User {
  constructor({id, name, score, trialCount}){
    this.id = id;
    this.name = name;
    this.score = score;
    this.trialCount = trialCount;
  }

  static async save({ name, score, trialCount }){
    if(!name){
      throw new Error("名前を入力してください。")
    }

    const postData = {
      name,
      score,
      trialCount
    }

    const docRef = await dbUsers.add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = User.create(docRef.id, data);

    return model;
  }

  static create(id, data){
    return User({
      id,
      name: data.name,
      score: data.score,
      trialCount: data.trialCount
    })
  }

  static async fetchUsers(){
    const collection = await dbUsers.get();
    if( collection.empty ){
      return [];
    }

    return collection.docs.map(doc => {
      return User.create(doc.id, doc.data())
    })
  }
}
