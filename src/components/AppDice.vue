<template>
  <div class="app-dice" :class="variantClasses">
    <div class="app-dice__box">
      <div class="app-dice__face">
        <img v-if="face === 1" svg-inline src="@/assets/dice/dice-1.svg" />
        <img v-if="face === 2" svg-inline src="@/assets/dice/dice-2.svg" />
        <img v-if="face === 3" svg-inline src="@/assets/dice/dice-3.svg" />
        <img v-if="face === 4" svg-inline src="@/assets/dice/dice-4.svg" />
        <img v-if="face === 5" svg-inline src="@/assets/dice/dice-5.svg" />
        <img v-if="face === 6" svg-inline src="@/assets/dice/dice-6.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-dice",

  props: {
    face: {
      type: Number,
      validator: num => [1, 2, 3, 4, 5, 6].indexOf(num) !== -1,
      default: 1
    },
    border: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator: val => ["small", "large"].includes(val),
      default: "small"
    }
  },

  computed: {
    variantClasses() {
      return {
        "app-dice--borderless": !this.border,
        "app-dice--small": this.size === "small",
        "app-dice--large": this.size === "large"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.app-dice {
  display: inline-block;

  &--small {
    width: 40px;
    height: 40px;
  }

  &--large {
    width: 100px;
    height: 100px;
  }

  &__box,
  &__face,
  svg {
    width: 100%;
    height: 100%;
  }

  &__box {
    background: white;
    border-radius: 8px;
    border: 1px solid map-get($colors, lighter);
    box-shadow: 0px 1px 1px map-get($colors, shadow);

    @at-root .app-dice--borderless & {
      border-color: transparent;
    }
  }
}
</style>
