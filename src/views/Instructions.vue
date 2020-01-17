<template>
  <div class="instructions">
    <div class="instructions__content">
      <h1 class="title">HOW TO PLAY</h1>
      <p class="paragraph">
        Welcome to Dicey McDiceface, the not-so-popular game that appeals to our
        human instincts to mash on buttons.
      </p>
      <p class="paragraph">
        There is no strategy to this game, simply roll the dice until a specific
        number has been rolled 5 times, after which that number "wins" and the
        game ends.
      </p>
      <p class="paragraph">
        Should you wish to spice things up, I recommend using this for illegal
        gambling or turning it into a drinking game. Alternatively, you could
        simply eat hot salsa while playing.
      </p>
      <p class="paragraph">Tap anywhere to begin!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.instructions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__content {
    max-width: 450px;
    padding: 24px;

    h1,
    p {
      margin-bottom: 16px;
    }
  }
}
</style>
