<template>
  <h1>Привет</h1>
  <HelloComponents/>
  <GalaryComponent msg="Картинки"/>
  <h2>Калькулятор 1</h2>
  <CalcComponent/>
  <h2>Калькулятор 2</h2>
  <CalcComponent/>
  <ProductDetails/>
  

</template>

<script>
import HelloComponents from './components/HelloComponents.vue';
import GalaryComponent from './components/GalaryComponent.vue';
import CalcComponent from './components/CalcComponent.vue';
import ProductDetails from './components/ProductDetails.vue';


export default {
  name: 'App',
  components: {
    HelloComponents,
    GalaryComponent,
    CalcComponent,
    ProductDetails,
    
  }
}
</script>

<style lang="scss">
 

</style>
