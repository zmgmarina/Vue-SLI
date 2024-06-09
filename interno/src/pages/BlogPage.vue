<template>
  <div class="banner">
    <div class="banner__content">
      <div class="banner__title-content">
        <h2 class="banner__heading">Articles & News</h2>
        <div class="banner__breadcrumbs">
          <div class="banner__breadcrumbs-item">
            <router-link class="banner__breadcrumbs-link" to="/"
              >Home</router-link
            >
          </div>
          <div class="banner__breadcrumbs-item">
            <router-link class="banner__breadcrumbs-link" to="/"
              >Blog</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-article center">
    <h2 class="section-article__title-box-news">Latest Post</h2>
    <div class="section-article__section-post">
      <img src="../assets/image/ImagePost.jpg" alt="" />
      <div class="section-article__section-info">
        <h2 class="section-article__titleNews">
          Low Cost Latest Invented Interior Designing Ideas
        </h2>
        <div class="section-article__text">
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
        </div>
        <div class="section-article__date-button">
          <p class="section-article__date">26 December,2022</p>
          <router-link to="/blogDetails" class="section-article__button-next">
            <svg
              width="52"
              height="52"
              viewBox="0 0 71 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35.5" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32.5 44L40.5 35L32.5 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <h2 class="section-article__title-box-news">Articles & News</h2>

    <div class="section-article__news-box">
      <div v-for="item in data" :key="item.id" class="section-article__box-item">
        <img
          class="section-article__image-design"
          :src="item.img"
          :alt="item.alt"
        />
        <div class="section-article__tag">{{ item.tag }}</div>
        <p class="section-article__titleNews">{{ item.title }}</p>
        <div class="section-article__lower-block">
          <p class="section-article__date">{{ item.date }}</p>

          <router-link to="/blogDetails" class="section-article__button-next">
            <svg
              width="52"
              height="52"
              viewBox="0 0 71 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35.5" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32.5 44L40.5 35L32.5 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        data: [
        {
          id: 1,
          img: require("@/assets/image/ImgNews1.png"),
          alt: "news photo",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          img: require("@/assets/image/ImgNews2.png"),
          alt: "news photo",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 3,
          img: require("@/assets/image/ImgNews3.png"),
          alt: "news photo",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          id: 4,
          img:  require("@/assets/image/ImgNews4.png"),
          alt: "news photo",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          img:  require("@/assets/image/ImgNews5.png"),
          alt: "news photo",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },

        {
          id: 6,
          img: require("@/assets/image/ImgNews6.png"),
          alt: "news photo",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    }
  },
};
</script>
