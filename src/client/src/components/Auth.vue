<template>
  <div :class="$style.container">
    <img :class="$style.logo" src="@/client/assets/auth/logo.png" alt="">
    <div :class="$style.hostel">
      <div :class="$style.hostelContainer">
        <h1 :class="$style.hostelNumber">Общежитие №6</h1>
      </div>
      <div :class="$style.hostelButtons">
        <button :class="[$style.auth, $style.button]">
          <h2>Вход</h2>
        </button>
        <button :class="[$style.info, $style.button]">
          <h2>Информация</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
  name: "Auth"
})
</script>

<style module lang="scss">
  .container {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/auth/auth-background.jpg") no-repeat center center;
    background-size: cover;
    color: white;
    height: 100%;
  }

  .logo {
    width: 340px;
    height: 37px;
    margin-top: 42px;
    margin-left: 77px;
  }

  .hostel {
    display: flex;
    justify-content: center;
    margin: 196px 135px 0;
    position: relative;
  }

  .hostelContainer {
    width: 1170px;
    height: 195px;
    background-color: black;
    padding-top: 36px;
    padding-left: 28px;
  }

  .hostelNumber {
    text-align: left;
    font-weight: 700;
    font-size: 58px;
  }

  .hostelButtons {
    position: absolute;
    top: 150px;
  }

  .button {
    height: 150px;
    border: none;
    cursor: pointer;
    font-size: 45px;
    text-transform: uppercase;
  }

  .auth {
    width: 450px;
    background-color: #874BA0;
    color: white;
  }

  .info {
    width: 572px;
    background-color: #FFFFFF;
  }
</style>