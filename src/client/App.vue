<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
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
