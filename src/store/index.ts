import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Quiz } from "@/types/quiz"
import { User } from "@/types/user"
import { ShuffledOptionQuiz } from "@/types/shuffledOptionQuiz"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: new User(0, "", 0, 0),
    userList: new Array<User>(),
    quizList: new Array<Quiz>(),
    isLogedIn: false
  },
  actions: {
    async getResults(context){
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple"
      );
      console.dir("response" + JSON.stringify(response));
      const payload = response.data;
      context.commit("addQuiz",payload)
    }
  },
  mutations: {
    addQuiz(state, payload){
      state.quizList = new Array<Quiz>();
      for( const result of payload.results ){
        state.quizList.push(
          new Quiz(
            result.question,
            result.correct_answer,
            result.incorrect_answers
          )
        )
      }
    },
  },
  modules: {
  },
  getters: {
    getShuffledOptionArray(state): Array<ShuffledOptionQuiz>{
        const newArray = new Array<ShuffledOptionQuiz>();
        const shuffle = (array: Array<string>) => {
          const copiedArray = array.slice();
          for (let i = copiedArray.length - 1; i >= 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [copiedArray[i], copiedArray[rand]] = [
              copiedArray[rand],
              copiedArray[i],
            ];
          }
          return copiedArray;
        };
        for(const quiz of state.quizList){
          const shuffledArray = shuffle([quiz.correct_answer, ...quiz.incorrect_answers]);
          newArray.push(new ShuffledOptionQuiz(quiz.question, shuffledArray, quiz.correct_answer));
        }
        console.log(newArray);
        return newArray;
    },
    getUser(state): User{
      return state.user;
    },
    getUserList(state): Array<User>{
      return state.userList;
    },
    getIsLogedIn(state): boolean{
      return state.isLogedIn;
    }
  }
})
