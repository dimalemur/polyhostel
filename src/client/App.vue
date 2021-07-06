<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRoute} from "vue-router";
import MainLayout from "@/client/src/layout/MainLayout.vue";
import AuthLayout from "@/client/src/layout/AuthLayout.vue";

export default defineComponent({
  name: 'App',
  components: {AuthLayout, MainLayout},
  setup() {
    const route = useRoute()

    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  }
});
</script>

<style>
  @import "~reset-css";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    font-family: Montserrat, sans-serif;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }
</style>
