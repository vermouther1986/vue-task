<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(Silde, index) in slides" :key="index">
      <div>
        <a :href="Silde.link">
          <img :src="Silde.imgSrc" />
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("setSwiperSilder");
    });
    let slides = computed(() => store.getters.getSwiperSilder);
    //
    return {
      slides,
      modules: [Pagination, Navigation],
    };
  },
};
</script>
