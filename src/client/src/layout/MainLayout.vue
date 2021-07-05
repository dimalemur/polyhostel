<template>
  <Navbar />
  <router-view />
</template>

<script>
import {defineComponent} from "vue"
import Navbar from "../components/Navbar/Navbar";

export default defineComponent({
  name: "MainLayout",
  components: {Navbar}
})
</script>

<style scoped>

</style>
