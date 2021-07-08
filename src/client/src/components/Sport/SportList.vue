<template>
  <div :class="$style.container">
    <span :class="$style.time">19:00 - 20:00</span>
    <span :class="$style.recorded">Иванов И. И., Петров П. П., Киров И. П., Фамилия И. О., Фамилия И. О.</span>
    <div :class="$style.buttons">
      <button :class="$style.button" @click="openModal">Записаться</button>
      <button :class="$style.button" disabled>Отмена</button>
    </div>
  </div>
  <teleport v-if="isOpenModal" to="body">
    <Modal
        background-color="white"
        :border-radius="15"
        text-color="black"
        @close="closeModal"
    >
      <div :class="$style.modal">
        Вы записаны в спортзал - 7 июня в 18:00
      </div>
    </Modal>
  </teleport>
</template>

<script>
import {useModal} from "@/client/src/use/useModal";
import Modal from "@/client/src/components/Modal/Modal";

export default {
  name: "SportList",
  components: {Modal},
  setup() {
    const {isOpenModal, closeModal, openModal} = useModal()
    return {isOpenModal, closeModal, openModal}
  }
}
</script>

<style module lang="scss">
  .container {
    padding: 20px;
    display: flex;
    color: black;
    gap: 35px;
    background-color: #F2F2F2;
    align-items: center;
  }

  .time {
    width: 10%;
  }

  .recorded {
    width: 70%;
  }

  .buttons {
    width: 20%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .button {
    border: 3px solid #000000;
    border-radius: 5px;
    padding: 7px 14px;
    font-size: 13px;
    background: none;
    cursor: pointer;
  }

  .button:disabled {
    border: 3px solid #6D6D6D;
    cursor: unset;
  }

  .modal {
    padding: 32px 0;
    text-align: center;
  }
</style>
