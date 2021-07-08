<template>
  <ul :class="$style.dateList">
    <li :class="[$style.date, $style.selected]">07.07.2021</li>
    <li :class="$style.date">08.07.2021</li>
    <li :class="$style.date">09.07.2021</li>
    <li :class="$style.date">10.07.2021</li>
    <li :class="$style.date">11.07.2021</li>
    <li :class="$style.date">12.07.2021</li>
    <li :class="$style.date">13.07.2021</li>
  </ul>
</template>

<script>
export default {
  name: "DatePicker"
}
</script>

<style module lang="scss">
  .dateList {
    display: flex;
    justify-content: space-between;
  }

  .date {
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
  }

  .selected {
    border-bottom: 2px solid #55B432;
    padding-bottom: 3px;
    color: #55B432;
  }
</style>
