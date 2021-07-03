<template>
  <div :class="$style.container">
    <div :class="$style.modalBackdrop" @click="$emit('close')"></div>
    <div :class="$style.modal" :style="modalStyles">
      <h3 v-if="title" :class="$style.title">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, Ref} from "vue";

export default defineComponent({
  name: "Modal",
  emits: ["close"],
  props: {
    title: String,
    backgroundColor: {
      type: String,
      default: "black"
    },
    borderRadius: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const modalStyles: Ref<string> = computed(() => {
      const backgroundColor = props.backgroundColor
      const borderRadius = props.borderRadius
      return `border-radius: ${borderRadius}px; background-color: ${backgroundColor}`
    })

    return {
      modalStyles
    }
  }
})
</script>

<style module lang="scss">

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 700px;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-50%) translateY(-50%);
  position: fixed;
  left: 50%;
  color: white;
  top: 50%;
}

.modalBackdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
  z-index: 100;
}

.title {
  font-size: 40px;
  text-align: center;
}

</style>
