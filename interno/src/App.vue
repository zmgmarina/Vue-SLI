<template>
  <HeaderComponent/>
  <BannerComponent/>
  <ArticleComponent/>
  <FooterComponent/>
 




</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import ArticleComponent from './components/ArticleComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    FooterComponent,
    
    
  }
}
</script>


<style lang="scss">

</style>
