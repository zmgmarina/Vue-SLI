<template>
  <HeaderComponent />
  <BannerComponent />
  <ArticleComponent />
  <CategoryComponent />
  <PaginationComponent />
  <DetailsComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import BannerComponent from "./components/BannerComponent.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    CategoryComponent,
    PaginationComponent,
    DetailsComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss"></style>
