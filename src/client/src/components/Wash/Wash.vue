<template>
  <div :class="$style.container">
    <DatePicker />
    <div :class="$style.washList">
      <WashList v-for="key in 3" :key="key" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import DatePicker from "@/client/src/components/Date/DatePicker";
import WashList from "@/client/src/components/Wash/WashList";

export default defineComponent({
  name: "Wash",
  components: {WashList, DatePicker}
})
</script>

<style module lang="scss">
  .container {
    padding: 12px 48px 32px;
    background-color: white;
  }

  .washList {
    padding-top: 20px;
  }
</style>
