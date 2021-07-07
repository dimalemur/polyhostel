<template>
  <div :class="$style.event">
    <div :class="$style.info">
      <img :src="event.img">
      <p :class="$style.title">{{event.title}}</p>
    </div>
    <div :class="$style.buttons">
      <button :class="$style.button" @click="openModal">{{event.isRecorder ? "Отменить запись" : "Записаться"}}</button>
      <button :class="$style.button">Подробнее</button>
    </div>
  </div>
  <teleport to="body" v-if="isOpenModal">
    <Modal
        v-bind="modalProps"
        @close="closeModal"
    />
  </teleport>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {typeEvent} from "@/client/src/components/Events/types";
import {useModal} from "@/client/src/use/useModal";
import Modal from "@/client/src/components/Modal/Modal.vue";

export default defineComponent({
  name: "Event",
  components: {Modal},
  props: {
    event: {
      type: Object as PropType<typeEvent>
    }
  },
  setup() {
    const {isOpenModal, closeModal, openModal} = useModal()
    const modalProps = {
      title: "Вы записаны на волейбольный матч - 18 июня в 14:00",
      borderRadius: 15,
      backgroundColor: "white",
      textColor: "black"
    }
    return {isOpenModal, closeModal, openModal, modalProps}
  }
})
</script>

<style module lang="scss">
  .event {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28%;
    padding-bottom: 40px;
  }

  .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .title {
    margin: 30px 0;
    font-size: 22px;
    line-height: 27px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .button {
    padding: 7px 14px;
    border: 3px solid black;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    background-color: white;
    cursor: pointer;
  }
</style>
