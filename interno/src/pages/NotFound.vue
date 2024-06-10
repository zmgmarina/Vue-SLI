<template>
  <div class="not-found center">
    <div class="not-found__content">
      <div class="not-found__content_left">
        <p class="not-found__title">404</p>
        <p class="not-found__text">
          We are sorry, but the page you requested was not found
        </p>
        <router-link to="/" class="not-found__link"
          >Back To Home
          
          <img class="not-found__vector" src="../assets/image/Vector.svg" alt="" />
        </router-link>
      </div>
      <div class="not-found__content_right">
        <img
          class="not-found__image"
          src="../assets/image/Photo404.jpg"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
