<template>
  <nav :class="$style.navbar">
    <ul>
      <li>
        <router-link to="/news">Новости</router-link>
      </li>
      <li>
        <router-link to="/events">Мероприятия</router-link>
      </li>
      <li>
        <router-link to="/sport">Спорт</router-link>
      </li>
      <li>
        <router-link to="/wash">Стирка</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "Navbar"
})
</script>

<style lang="scss" module>
  .navbar {

  }
</style>
