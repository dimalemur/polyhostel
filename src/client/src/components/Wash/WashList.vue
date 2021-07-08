<template>
  <div :class="$style.container">
    <span :class="$style.time">9:00 - 10:00</span>
    <div :class="$style.washerWrapper">
      <ul :class="$style.washer">
        <li>1 машинка</li>
        <li>2 машинка</li>
        <li>3 машинка</li>
      </ul>
    </div>
    <div :class="$style.recordedWrapper">
      <ul :class="$style.recorded">
        <li>Фамилия И. О.</li>
        <li>Фамилия И. О.</li>
        <li>Фамилия И. О.</li>
      </ul>
    </div>
    <div :class="$style.roomWrapper">
      <ul :class="$style.room">
        <li>блок 1110А</li>
        <li>блок 110Б</li>
        <li>блок 1610А</li>
      </ul>
    </div>
    <div :class="$style.buttons">
      <button :class="$style.button">Записаться</button>
      <button :class="$style.button" disabled>Отмена</button>
    </div>
  </div>
  <Separator :width="100" unit-width="%" height="1.5" unit-height="px" />
</template>

<script>
import Separator from "@/client/src/components/Separator/Separator";

export default {
  name: "WashList",
  components: {Separator}
}
</script>

<style module lang="scss">
  .container {
    padding: 30px 20px;
    display: flex;
    align-items: center;
    gap: 50px;
    background-color: #E5E5E5;
    font-size: 18px;
  }

  .time {
    width: 15%;
    text-align: center;
  }

  .washer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    &Wrapper {
      width: 20%;
    }
  }

  .recorded {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    &Wrapper {
      width: 20%;
    }
  }

  .room {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    &Wrapper {
      width: 15%;
    }
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
</style>
