<template>
  <div :class="$style.mainLayout">
    <div :class="$style.firstNavigate">
      <img src="@/client/assets/polylogoBlack.png" alt="Логотип политеха">
      <button :class="$style.exitButton">Выход</button>
    </div>
    <div :class="$style.profileWrapper">
      <div :class="$style.profile">
        <p :class="$style.fio">Имя Фамилия</p>
        <button :class="$style.settings">Настройки</button>
      </div>
      <div :class="$style.container">
        <Navbar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import Navbar from "../components/Navbar/Navbar";

export default defineComponent({
  name: "MainLayout",
  components: {Navbar}
})
</script>

<style lang="scss" module>
  .mainLayout {
    height: 100%;
    padding: 0 60px;
    background-color: #E5E5E5;
  }

  .firstNavigate {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .exitButton {
    border-radius: 5px;
    border: 3px solid black;
    padding: 6px 18px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    background-color: #E5E5E5;
  }

  .profileWrapper {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
    position: relative;
  }

  .profile {
    width: 100%;
    padding: 36px 32px 110px;
    background-color: black;
    display: flex;
    justify-content: space-between;

    .fio {
      color: white;
      font-size: 35px;
    }
  }

  .settings {
    background-color: black;
    color: white;
    border: 3px solid white;
    border-radius: 5px;
    font-size: 30px;
    font-weight: 400;
    padding: 5px 10px;
    cursor: pointer;
  }

  .container {
    position: absolute;
    top: 110px;
    width: 1200px;
    height: 100%;
  }
</style>
