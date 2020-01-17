<template>
  <div id="app">
    <PlayView v-if="gameStarted" />
    <InstructionsView v-else @click.native="startGame" />
  </div>
</template>

<script>
import InstructionsView from "./views/Instructions.vue";
import PlayView from "./views/Play.vue";

export default {
  name: "app",

  components: {
    InstructionsView,
    PlayView
  },

  data() {
    return {
      gameStarted: false
    };
  },

  methods: {
    startGame() {
      this.gameStarted = true;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/global";

html,
body,
#app,
#app > * {
  width: 100%;
  height: 100%;
}
</style>
