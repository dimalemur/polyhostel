<template>
  <div :class="$style.container">
    <DatePicker />
    <div :class="$style.sportList">
      <SportList v-for="key in 10" :key="key" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import DatePicker from "@/client/src/components/Date/DatePicker";
import SportList from "@/client/src/components/Sport/SportList";

export default defineComponent({
  name: "Sport",
  components: {SportList, DatePicker}
})
</script>

<style module lang="scss">
  .container {
    background: white;
    padding: 12px 48px 32px;
  }

  .sportList {
    padding-top: 20px;
  }
</style>
