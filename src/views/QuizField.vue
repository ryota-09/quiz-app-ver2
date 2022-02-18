<template>
  <div class="quiz-field">
    <h1>Japanese Anime Quiz App</h1>
    <h2>日本のアニメのクイズが出題されます!</h2>
    <div class="correct-count">
      <hr />
      <span class="correct-number">現在の正解数: {{ numberOfCorrect }} 問 / 5問</span>
      <hr />
    </div>
    <div v-show="quizShowFrag">
    <div class="center question" >Q{{currentIndex + 1}}&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].question) }}</div>
    <ol class="center">
      <li v-on:click="answerButton0">&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].shuffledOption[0]) }}</li>
      <li v-on:click="answerButton1">&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].shuffledOption[1]) }}</li>
      <li v-on:click="answerButton2">&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].shuffledOption[2]) }}</li>
      <li v-on:click="answerButton3">&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].shuffledOption[3]) }}</li>
    </ol>
    <span class="answer" v-show="answerShowFrag">Answer:&nbsp;&nbsp;{{ unescapeHTML(currentQuizList[currentIndex].correct_answer) }}</span>
    <hr />
  </div>
    <div class="nextquiz-button">
      <button type="button" v-on:click="setNextQuiz" v-show="canShowButton">次の問題へ</button>
    </div>
    <div class="now-loading" v-show="canShowLoading">Now Loading....</div>
    <div class="restart-button">
      <button type="button" v-on:click="reStartButton" v-show="canShowButton">もう一度</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShuffledOptionQuiz } from "@/types/shuffledOptionQuiz";
@Component
export default class QuizField extends Vue {
  private myAnswer = 0;
  private currentQuizList = new Array<ShuffledOptionQuiz>();
  private currentIndex = 0;
  private canShowLoading = true;
  private numberOfCorrect = 0;
  private count = 0;
  private answerShowFrag = false;
  private canShowButton = false;
  private quizShowFrag = true;

  async created(): Promise<void> {
    this.canShowLoading = true;
    await this.$store.dispatch("getResults");
    this.canShowLoading = false;
    this.currentQuizList = this.$store.getters.getShuffledOptionArray;
  }

  setNextQuiz(): void{
    this.count = 0;
    this.answerShowFrag = false;
    this.currentIndex++;
    if( this.currentIndex >= 6){
      alert("今回の正解数は" + this.numberOfCorrect + "問です。")
      this.reStartButton();
      return;
    }
    
  }

  answerButton0(): void {
    this.myAnswer = 0;
    this.answerShowFrag = true;
    this.count++;

    this.answerShowFrag = true;
    this.canShowButton = true;

    if( this.count >= 2){
      alert("2回クリックはできません!")
      return;
    }

    if (this.currentQuizList[this.currentIndex].shuffledOption[this.myAnswer] === this.currentQuizList[this.currentIndex].correct_answer) {
      this.numberOfCorrect++;
      this.answerShowFrag = true;
      alert("正解!");
    } else {
      alert(`違うよ!!答えは ${this.unescapeHTML(this.currentQuizList[this.currentIndex].correct_answer)} です!!`);
    }

  }

  answerButton1(): void {
    this.myAnswer = 1;
    this.answerShowFrag = true;
    this.count++;

    this.answerShowFrag = true;
    this.canShowButton = true;

    if( this.count >= 2){
      alert("2回クリックはできません!")
      return;
    }

    if (this.currentQuizList[this.currentIndex].shuffledOption[this.myAnswer] === this.currentQuizList[this.currentIndex].correct_answer) {
      this.numberOfCorrect++;
      this.answerShowFrag = true;
      alert("正解!");
    } else {
      alert(`違うよ!!答えは ${this.unescapeHTML(this.currentQuizList[this.currentIndex].correct_answer)} です!!`);
    }

  }

  answerButton2(): void {
    this.myAnswer = 2;
    this.answerShowFrag = true;
    this.count++;

    this.answerShowFrag = true;
    this.canShowButton = true;

    if( this.count >= 2){
      alert("2回クリックはできません!")
      return;
    }

    if (this.currentQuizList[this.currentIndex].shuffledOption[this.myAnswer] === this.currentQuizList[this.currentIndex].correct_answer) {
      this.numberOfCorrect++;
      this.answerShowFrag = true;
      alert("正解!");
    } else {
      alert(`違うよ!!答えは ${this.unescapeHTML(this.currentQuizList[this.currentIndex].correct_answer)} です!!`);
    }

  }

  answerButton3(): void {
    this.myAnswer = 3;
    this.answerShowFrag = true;
    this.count++;

    this.answerShowFrag = true;
    this.canShowButton = true;

    if( this.count >= 2){
      alert("2回クリックはできません!")
      return;
    }

    if (this.currentQuizList[this.currentIndex].shuffledOption[this.myAnswer] === this.currentQuizList[this.currentIndex].correct_answer) {
      this.numberOfCorrect++;
      this.answerShowFrag = true;
      alert("正解!");
    } else {
      alert(`違うよ!!答えは ${this.unescapeHTML(this.currentQuizList[this.currentIndex].correct_answer)} です!!`);
    }
  }

  reStartButton(): void{
    this.myAnswer = 0;
    this.currentQuizList = new Array<ShuffledOptionQuiz>();
    this.currentIndex = 0;
    this.canShowLoading = true;
    this.numberOfCorrect = 0;
    this.count = 0;
    this.answerShowFrag = false;
    this.canShowButton = false;
    this.quizShowFrag = true;

    this.canShowLoading = true;
    this.$store.dispatch("getResults");
    this.canShowLoading = false;
    this.currentQuizList = this.$store.getters.getShuffledOptionArray;
  }

  unescapeHTML(str: string): string {
    const div = document.createElement("div");
    div.innerHTML = str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/ /g, "&nbsp;")
      .replace(/\r/g, "&#13;")
      .replace(/\n/g, "&#10;");
    return div.textContent || div.innerText;
  }

  
}
</script>

<style scoped>
.question {
  font-size: 20px;
  font-weight: 600;
  word-break: break-all;
}
.answer {
  font-size: 30px;
  font-weight: 600;
  word-break: break-all;
}
.center {
  display: flex;
  justify-content: center;
}
li {
  margin: 10px;
  list-style: none;
  list-style-position: inside;
  font-size: 20px;
  font-weight: 900;
  
  border: solid 1px black;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  background: #ffffff;
  word-break: break-all;
  cursor: pointer;
}

li:hover {
  background: lightgreen;
}

ol {
  padding: 0 auto;
  display: flex;
  flex-direction: column;
}
.restart-button {
  margin: 10px 0;
}
.ver03{
  padding: 0 100px;
}
.correct-number {
  font-size: 25px;
  font-family:monospace;
}
.nowLoading {
  font-size: 40px;
  margin-top: 30%;
}
.nextquiz-button {
  margin: 5px;
}
</style>
