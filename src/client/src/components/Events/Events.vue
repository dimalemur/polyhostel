<template>
  <div :class="$style.events">
    <Event v-for="(event, index) in events" :key="index" :event="event" />
  </div>
  <button :class="$style.button">Предложить мероприятие</button>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {typeEvent} from "@/client/src/components/Events/types";
import Event from "@/client/src/components/Events/Event.vue";
import popcorn from "@/client/assets/events/popcorn.jpg"
import volleyball from "@/client/assets/events/volleyball.jpg"
import bioGasMask from "@/client/assets/events/bio-gas-mask.jpg"

export default defineComponent({
  name: "Events",
  components: {
    Event
  },
  setup() {
    const events: typeEvent[] = [
      {
        img: popcorn,
        title: "11 июня на первом этаже состоится просмотр кино. Записывайся и приводи своих соседей:)",
        isRecorder: true
      },
      {
        img: volleyball,
        title: '18 июня в спортзале общежития состоится волейбольный матч. Записывайся на игру  и приводи своих соседей:)',
        isRecorder: true
      },
      {
        img: bioGasMask,
        title: '24 июня будет обработка помещений по заявкам. Успей подать заявку!',
        isRecorder: true
      },
    ]

    return {events}
  }
})
</script>

<style module lang="scss">
  .events {
    background-color: white;
    padding: 30px 76px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
  }

  .button {
    display: flex;
    margin-top: 36px;
    margin-bottom: 50px;
    margin-left: auto;
    padding: 7px 14px;
    border: 3px solid #000000;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
  }
</style>
