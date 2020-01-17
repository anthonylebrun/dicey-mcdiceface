<template>
  <div class="player-controls">
    <button class="player-controls__reset" @click="$emit('reset')">
      <img svg-inline src="@/assets/restart.svg" />
    </button>
    <PlayerDice class="player-controls__dice" @rolled="$emit('play', $event)" />
    <p class="player-controls__help title">
      Tap dice to roll
    </p>
  </div>
</template>

<script>
import PlayerDice from "@/components/PlayerDice.vue";

export default {
  name: "player-controls",

  components: {
    PlayerDice
  }
};
</script>

<style scoped lang="scss">
.player-controls {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__dice {
    margin-bottom: 16px;
  }

  &__reset {
    @include reset-button;
    position: absolute;
    top: 16px;
    right: 16px;
    color: map-get($colors, danger);

    svg path {
      fill: currentColor !important;
    }
  }
}
</style>
