<template>
    <div>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide v-for="slide in slidImages">
            <div class="swiper-zoom-container">
                <img class="swiper-slide__img" :src="slide.image" :alt="slide.alt" />
            </div>
        </swiper-slide>
    </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/zoom';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { mapState } from "vuex";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
    computed: {
    ...mapState(['data', 'slidImages']),
  },
        
};
</script>