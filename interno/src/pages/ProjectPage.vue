<template>
  <div class="banner-project">
    <div class="banner-project__content">
      <div class="banner-project__title-content">
        <h2 class="banner-project__heading">Articles & News</h2>
        <div class="banner-project__breadcrumbs">
          <div class="banner-project__breadcrumbs-item">
            <router-link class="banner-project__breadcrumbs-link" to="/"
              >Home</router-link
            >
          </div>
          <div class="banner-project__breadcrumbs-item">
            <router-link class="banner-project__breadcrumbs-link" to="/blog"
              >Blog</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="project-content center">
    <div class="buttons-category">
      <button
        v-for="button in buttons"
        :key="button.id"
        @click="sortByCategory(button.id)"
        type="button"
        :class="[
          'buttons-category__button',
          button.id === buttonIsActive
            ? 'buttons-category__button_active'
            : false,
        ]"
      >
        {{ button.title }}
      </button>
    </div>
    <div class="projects">
      <div
        class="project-box"
        v-for="project in currentProjects"
        :key="project.id"
      >
        <img
          class="project-box__image"
          :src="project.image"
          alt="{{ project.alt }}"
        />
        <div class="project-box__star-box">
          <svg
            @click="changeStarColor"
            class="project-box__star"
            :id="project.id"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_993_156)">
              <path
                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_993_156"
                x="0.186424"
                y="0.431396"
                width="35.6271"
                height="34.3619"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_993_156"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_993_156"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="project-box__content">
          <div class="project-box__content-item">
            <h3 class="project-box__title">{{ project.title }}</h3>
            <div class="project-box__breadcrumbs">
              <li class="project-box__breadcrumbs-item">
                <a href="#" class="project-box__breadcrumbs-link">{{
                  project.link1
                }}</a>
              </li>
              <li class="project-box__breadcrumbs-item">
                <a href="#" class="project-box__breadcrumbs-link">{{
                  project.link2
                }}</a>
              </li>
            </div>
          </div>
          <router-link
              to="/projectDetails"
              class="project-box__item-button"
            >
              <svg
              width="71"
              height="70"
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
    <PaginationComponent
      :totalNumberPaginationPages="setTotalNumberOfPages()"
      :currentPage="currentPage"
      :pageKey="pageKey"
      @pagechanged="changeCurrentPage"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      currentPage: 1,
      limitOfCardsPerPage: 4,
      pageKey: "project",
      currentProjects: [
        {
          id: "Bathroom",
          title: "Minimal Bethroom",
          image: require("@/assets/image/bathroom1.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Classic Minimal Bethroom",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Modern Bethroom",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Minimal Bethroom",
          image: require("@/assets/image/bathroom4.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Minimal Bethroom",
          image: require("@/assets/image/bathroom1.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Modern Bethroom",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bathroom",
          title: "Classic Minimal Bethroom",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
      ],
      buttonIsActive: "Kitchan",
    };
  },

  methods: {
    changeStarColor(e) {
      const star = e.target.closest(".project-box__star");
      star.classList.toggle("project-box__star_active");
    },

    sortByCategory(id) {
      const categoryId = id;
      this.buttonIsActive = categoryId;
      this.currentProjects = [];
      this.projects.forEach((project) => {
        if (categoryId === project.id) {
          return this.currentProjects.push(project);
        }
      });
    },
    setTotalNumberOfPages() {
      return Math.ceil(this.currentProjects.length / this.limitOfCardsPerPage);
    },
    paginateListOfCards(currentProjects) {
      const newList = this.currentProjects;
      console.log(newList);
      let page = this.currentPage;
      let perPage = this.limitOfCardsPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return newList.slice(from, to);
    },
    changeCurrentPage(page) {
      console.log(page);
      this.currentPage = page;
      this.$router.push(
        `/${this.pageKey}/${this.buttonIsActive}/${this.currentPage}`
      );
    },
    changeCurrentCategoryList(id) {
      const buttonId = id;
      this.currentProjects = [];
      this.getProjects.forEach((project) => {
        if (project.tag === buttonId) {
          this.buttonIsActive = buttonId;
          this.currentPage = 1;
          this.$router.push(
            `/${this.pageKey}/${this.buttonIsActive}/${this.currentPage}`
          );
          return this.currentProjects.push(project);
        }
      });
    },
  },
  computed: {
    ...mapState(["buttons", "projects"]),
    ...mapGetters(["getProjects"]),

    updatedCurrentCategoryiesList() {
      return (this.currentProjects = this.changeCurrentCategoryList);
    },
    displayedCards() {
      return this.paginateListOfCards(this.currentProjects);
    },
  },
};
</script>
