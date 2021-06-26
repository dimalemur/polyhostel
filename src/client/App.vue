<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const title = computed(() => store.state.test.title)
    return {title}
  }
});
</script>

<style>

</style>
