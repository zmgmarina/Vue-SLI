<template>
  <div class="project-details__banner">
    <div class="project-details__banner-image"></div>
  </div>
  <div class="project-details center">
    <div
      v-for="item in data"
      :key="item.id"
      class="project-details__text-content"
    >
      <h1 class="project-details__title">{{ item.title }}</h1>
      <p class="project-details__text">{{ item.paragraphOne }}</p>
      <p class="project-details__text">{{ item.paragraphTwo }}</p>
    </div>
    <SliderComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SliderComponent from "./SliderComponent.vue";
export default {
  components: {
    SliderComponent,
  },
  computed: {
    ...mapState(['data']),
  },
};
</script>

<style lang="scss" scoped></style>
