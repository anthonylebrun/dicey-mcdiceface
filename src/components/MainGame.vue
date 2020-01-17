<template>
  <div class="main-game">
    <ScoreBoard class="main-game__score" :results="results" />
    <PlayerControls
      v-if="!gameOver"
      class="main-game__controls"
      @play="playTurn($event)"
      @reset="resetGame"
    />
    <div v-else @click="resetGame" class="main-game__over">
      <p class="title">Game Over!</p>
      <p class="paragraph">Tap to play again.</p>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";
import PlayerControls from "@/components/PlayerControls.vue";

const startingScores = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

export default {
  name: "main-game",

  components: {
    ScoreBoard,
    PlayerControls
  },

  data() {
    return {
      results: { ...startingScores }
    };
  },

  computed: {
    gameOver() {
      return Object.values(this.results).some(count => count >= 5);
    }
  },

  methods: {
    playTurn(outcome) {
      this.results[outcome]++;
    },
    resetGame() {
      this.results = { ...startingScores };
    }
  }
};
</script>

<style scoped lang="scss">
.main-game {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__score {
    min-height: 60%;
  }

  &__controls {
    flex-grow: 1;
  }

  &__over {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
}
</style>
