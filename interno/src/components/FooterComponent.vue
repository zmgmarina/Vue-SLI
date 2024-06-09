<template>
    <div>
        <footer class="footer center">
      <div class="footer__logo">
        <div class="footer__logo-brand">
          <a href="page.html"
            ><img src="../assets/image/Logo.svg" alt="logo-brand"
          /></a>
          <h2 class="footer__name-brand">Interno</h2>
        </div>
        <p class="footer__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__socialNetwork-link">
          <a href=""><img src="../assets/image/twitter.svg" alt="" /></a>
          <p class="footer__in">in</p>
        </div>
      </div>
      <div class="footer__page">
        <p class="footer__title-pages">Pages</p>
        <nav class="footer__nav">
      <router-link
        class="footer__page-link"
        :to="link.url"
        v-for="link in links"
        :key="link.id"
      >{{ link.title }}
      </router-link>
    </nav>
      </div>
      <div class="footer__contacts">
        <p class="footer__title-contact">Contact</p>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p>contact@interno.com</p>
        <p>(123) 456 - 7890</p>
      </div>
    </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["links"]),
  },
};
</script>