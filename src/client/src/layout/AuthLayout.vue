<template>
  <Auth />
</template>

<script>
import {defineComponent} from "vue"
import Auth from "@/client/src/components/Auth/Auth";
export default defineComponent({
  name: "AuthLayout",
  components: {Auth}
})
</script>

<style scoped>

</style>
