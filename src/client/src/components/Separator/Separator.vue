<template>
  <div :style="styles"></div>
</template>

<script>
import {computed, defineComponent} from "vue";

const units = ["px", "rem", "rm", "%"]

export default defineComponent({
  name: "Separator",
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "black"
    },
    unitWidth: {
      type: String,
      default: "px",
      validator(value) {
        return units.includes(value)
      }
    },
    unitHeight: {
      type: String,
      default: "px",
      validator(value) {
        return units.includes(value)
      }
    }
  },
  setup(props) {
    const styles = computed(() => {
      const width = `width: ${props.width}${props.unitWidth};`;
      const height = `height: ${props.height}${props.unitHeight};`;
      const color = `background-color: ${props.color};`;
      return width + height + color;
    })

    return {styles}
  }
})
</script>

<style module lang="scss">

</style>
