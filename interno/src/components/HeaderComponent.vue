<template>
  <header class="header center">
    <div class="header__header-brand">
      <a href="#" class="header__logo-brand"
        ><img src="../assets/image/Logo.svg" alt="logo-brand"
      /></a>
      <h2 class="header__name-brand">Interno</h2>
    </div>

    <nav class="header__menu">
      <router-link
        class="header__menu-link"
        :to="link.url"
        v-for="link in links"
        :key="link.id"
      >
        {{ link.title }}
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["links"]),
  },
};
</script>
