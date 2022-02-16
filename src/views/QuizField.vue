<template>
  <div class="quiz-field">
    <h1>Japanese Anime Quiz App</h1>
    <h2>日本のアニメのクイズが出題されます!</h2>
    <div class="correct-count">
      <hr />
      <span class="correct-number">現在の正解数: {{ numberOfCorrect }} 問 / 5問</span>
      <hr />
      
    </div>
    <div class="now-loading" v-show="canShowLoading">Now Loading....</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShuffledOptionQuiz } from "@/types/shuffledOptionQuiz";
@Component
export default class QuizField extends Vue {
  private currentQuizList = new Array<ShuffledOptionQuiz>();
  private currentIndex = 0;
  private canShowLoading = true;
  private numberOfCorrect = 0;

  async created(): Promise<void> {
    this.canShowLoading = true;
    await this.$store.dispatch("getResults");
    this.canShowLoading = false;
    this.currentQuizList = this.$store.getters.getShuffledOptionArray;
  }
}
</script>

<style scoped></style>
