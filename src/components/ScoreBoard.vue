<template>
  <div class="score-board">
    <div
      v-for="number in [1, 2, 3, 4, 5, 6]"
      :key="number"
      class="score-board__column"
      :class="{ 'score-board__column--winner': results[number] >= 5 }"
    >
      <div v-for="n in results[number]" :key="n" class="score-board__dice">
        <AppDice :face="number" :border="false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score-board",

  props: {
    results: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.score-board {
  display: flex;
  justify-content: space-between;
  background: map-get($colors, primary);

  &__column {
    min-width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    &:not(:last-child) {
      border-right: 1px solid transparentize(white, 0.8);
    }

    &--winner {
      background-color: map-get($colors, success);
    }
  }

  &__dice {
    margin: 4px;
  }
}
</style>
