<template>
  <HeaderComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// import BannerComponent from "./components/BannerComponent.vue";
// import ArticleComponent from "./components/ArticleComponent.vue";
// import CategoryComponent from "./components/CategoryComponent.vue";
// import PaginationComponent from "./components/PaginationComponent.vue";
// import DetailsComponent from "./components/DetailsComponent.vue";


export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss"></style>
