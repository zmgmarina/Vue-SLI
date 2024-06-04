<template>
  <HeaderComponent/>
  <BannerComponent/>
  <ArticleComponent/>
  <FooterComponent/>
  <ProjectComponent/>
  <CategoryComponent/>
  <PaginationComponent/>
 




</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import ArticleComponent from './components/ArticleComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    FooterComponent,
    ProjectComponent,
    CategoryComponent,
    PaginationComponent,
    
    
  }
}
</script>


<style lang="scss">

</style>
