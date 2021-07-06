<template>
  <nav :class="$style.navbar">
    <ul>
      <li>
        <router-link to="/news" :class="[$style.link, $style.active]">Новости</router-link>
      </li>
      <li>
        <router-link to="/events" :class="$style.link">Мероприятия</router-link>
      </li>
      <li>
        <router-link to="/sport" :class="$style.link">Спорт</router-link>
      </li>
      <li>
        <router-link to="/wash" :class="$style.link">Стирка</router-link>
      </li>
    </ul>
    <Separator
      :width="100"
      unit-width="%"
      :height="11"
      unit-height="px"
      color="#55B432"
    />
  </nav>
</template>

<script>
import {defineComponent} from "vue"
import Separator from "@/client/src/components/Separator/Separator";

export default defineComponent({
  name: "Navbar",
  components: {Separator}
})
</script>

<style lang="scss" module>
  .navbar {
    width: 100%;
    ul {
      display: flex;
      justify-content: center;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 120px;
    color: white;
    text-decoration: none;
    background-color: #874BA0;

    &:hover {
      text-decoration: none;
    }
  }
</style>

<style lang="scss" scoped>

  .active {
    background-color: #55B432;
  }

</style>
