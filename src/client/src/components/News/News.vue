<template>
  <div :class="$style.container">
    <div :class="$style.title">
      <p>Новости</p>
      <Separator
          width="20"
          unit-width="%"
          height="1.5"
          unit-height="px"
          color="black"
      />
    </div>
    <div :class="$style.news">
      <p>Здесь будут новости</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import Separator from "@/client/src/components/Separator/Separator";

export default defineComponent({
  name: "News",
  components: {Separator}
})
</script>

<style module lang="scss">

  .container {
    background-color: white;
    padding: 20px 70px 0;
    height: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 25px;
  }

  .news {
    padding-top: 14px;
    font-size: 22px;
  }

</style>
