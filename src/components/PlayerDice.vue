<template>
  <div class="player-dice">
    <button class="player-dice__button" @click="roll">
      <AppDice size="large" :face="displayedNumber" />
    </button>
  </div>
</template>

<script>
const generateNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export default {
  name: "player-dice",

  data() {
    return {
      displayedNumber: generateNumber()
    };
  },

  methods: {
    roll() {
      const animationKeyFrames = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        900,
        1100,
        1300,
        1600
      ];

      // A poor man's dice roll animation
      animationKeyFrames.forEach(frame => {
        setTimeout(() => {
          this.displayedNumber = generateNumber();
        }, frame);
      });

      // Emit final value
      setTimeout(() => {
        this.displayedNumber = generateNumber();
        this.$emit("rolled", this.displayedNumber);
      }, 1900);
    }
  }
};
</script>

<style scoped lang="scss">
.player-dice {
  &__button {
    @include reset-button;
  }
}
</style>
