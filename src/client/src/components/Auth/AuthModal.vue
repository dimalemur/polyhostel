<template>
  <Modal background-color="#874BA0" :border-radius="15" @close="$emit('close')">
    <div :class="$style.container">
      <div>
        <label>
          <span :class="$style.label">Логин*</span>
          <input :class="$style.input" type="text">
        </label>
      </div>
      <div :class="$style.password">
        <label>
          <span :class="$style.label">Пароль*</span>
          <input :class="$style.input" type="password">
        </label>
      </div>
      <div :class="$style.rememberMe">
        <input :class="$style.input" type="checkbox">
        <span :class="$style.label">Запомнить меня</span>
      </div>
      <div :class="$style.notificationWrapper">
        <p :class="$style.notification">
          * При первом входе в систему студент вводит логин и пароль,
          выданный при поступлении
        </p>
      </div>
      <div :class="$style.auth">
        <button :class="$style.button">Вход</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../Modal/Modal";
export default {
  name: "AuthModal",
  components: {Modal}
}
</script>

<style module lang="scss">

.container {
  padding: 60px 32px 35px;
  font-family: Montserrat, sans-serif;
}

.label {
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
  display: block;
}

.input {
  border: 2px solid white;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
  }
}

.password {
  margin-top: 25px;
}

.rememberMe {
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 14px;

  .label {
    display: inline;
    margin-bottom: 0;
    font-size: 15px;
  }

  .input {
    margin-right: 7px;
    width: 15px;
    height: 15px;
  }
}

.notificationWrapper {
  padding: 8px 45px;
  margin-top: 26px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.75);

  .notification {
    text-align: center;
    color: black;
    font-size: 16px;
  }
}

.auth {
  margin-top: 36px;
  display: flex;
  justify-content: center;

  .button {
    padding: 8px 23px;
    border-radius: 5px;
    border: 3px solid #FFFFFF;
    background-color: #874BA0;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
}

</style>