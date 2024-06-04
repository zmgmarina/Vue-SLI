<template>
  <div class="pagination-box">
    <ul v-for="item in items" :key="item.id" >
      <a href="#" class="pagination-item">{{ item.page }}</a>
    </ul>
    <a href="#" class="pagination-item">
        <svg
          class="section-news__pagination-image"
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          page: "01",
        },
        {
          id: 2,
          page: "02",
        },
        {
          id: 3,
          page: "03",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
