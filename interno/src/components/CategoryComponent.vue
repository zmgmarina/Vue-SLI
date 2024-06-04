<template>
  <div class="project-content center">
    <div class="buttons-category">
      <button
        v-for="button in buttons"
        :key="button.id"
        @click="sortByCategory(button.id)"
        type="button"
        :class="[
              'buttons-category__button',
              button.id === buttonIsActive ? 'buttons-category__button_active' : false,
            ]">
        {{ button.title }}
      </button>
    </div>
    <div class="projects">
      <div class="project-box" v-for="project in currentProjects" :key="project.id">
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
          <button class="project-box__button-next">
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
          </button>
        </div>
      </div>
    </div>
   </div>
</template>

<script>

export default {
    data() {
    return {
      buttons: [
        {
          id: "Bathroom",
          title: "Bathroom",
        },
        {
          id: "Bad Room",
          title: "Bad Room",
        },
        {
          id: "Kitchan",
          title: "Kitchan",
        },
        {
          id: "Living Area",
          title: "Living Area",
        },
      ],
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

      projects: [
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
        {
          id: "Bad Room",
          title: "Minimal Bad Room",
          image: require("@/assets/image/bathroom5.jpeg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Classic Minimal Bad Room",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Minimal Bad Room",
          image: require("@/assets/image/bathroom1.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Modern Bad Room",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },

        {
          id: "Bad Room",
          title: "Minimal Bad Room",
          image: require("@/assets/image/bathroom1.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Classic Minimal Bad Room",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Modern Bad Room",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Bad Room",
          title: "Minimal Bad Room",
          image: require("@/assets/image/bathroom4.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Minimal Kitchan",
          image: require("@/assets/image/imgProject1.png"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Classic Minimal Kitchan",
          image: require("@/assets/image/ImagePost2.png"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Minimal Kitchan",
          image: require("@/assets/image/ImagePost1.png"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Modern Kitchan",
          image: require("@/assets/image/kithen1.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Minimal Kitchan",
          image: require("@/assets/image/kithen2.jpeg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Classic Minimal Kitchan",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Kitchan",
          title: "Modern Kitchan",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Classic Minimal Living Area",
          image: require("@/assets/image/livingArea2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Minimal Living Area",
          image: require("@/assets/image/livingArea3.webp"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Modern Living Area",
          image: require("@/assets/image/livingArea2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Minimal Living Area",
          image: require("@/assets/image/livingArea5.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Classic Minimal Living Area",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Modern Living Area",
          image: require("@/assets/image/bathroom3.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Minimal Living Area",
          image: require("@/assets/image/bathroom4.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
        {
          id: "Living Area",
          title: "Classic Minimal Living Area",
          image: require("@/assets/image/bathroom2.jpg"),
          alt: "photo",
          link1: "Decore",
          link2: "Artchitecture",
        },
      ],
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
    }

  },
};
</script>

<style lang="scss" scoped>
.project-content {
  display: flex;
  flex-direction: column;
  gap: 61px;
  
}

.buttons-category {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &__button {
    border-radius: 18px;
    padding: 26px 66px;
    width: 219px;
    height: 75px;
    border: none;
    background: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.25;
    font-family: "Jost";
    letter-spacing: 0.02em;
    text-align: center;
    color: #292f36;
  }

  &__button:hover {
    background: #cda274;
    color: #fff;
  }

  &__button_active {
    background: #cda274;
    color: #fff;
    }
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

}

.project-box {
  position: relative;
  &__image {
    display: flex;
    max-width: 585px;
  }
  &__star-box {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &__star_active path {
    fill: #ffa928;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 22px;
  }

  &__content-item {
    display: flex;
    min-width: 290px;
    height: 70px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-content: flex-start;
    justify-content: flex-end;
  }

  &__title {
    color: #292f36;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
  }

  &__breadcrumbs {
    margin: 0;
    padding: 0;
  }

  &__breadcrumbs-item {
    display: inline-block;
    align-items: center;

    &:not(:last-child)::after {
      content: "/";
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  &__breadcrumbs-link {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.22px;
    transition: all 1s ease;

    &:hover {
      color: #cda274;
      transition: all 0.5s ease;
    }
    &:active {
      color: #4d5053;
      transition: all 1s ease;
    }
  }

  &__button-next {
    border: none;
    border-radius: 100%;
    cursor: pointer;
  }

  &__button-next:hover {
    background-color: #f4f0ec;
    transition: all 0.5s ease;
  }
}
</style>
