<template>
  <div class="banner">
    <all-sort-list></all-sort-list>
    <swiper-container></swiper-container>
  </div>
</template>

<script>
import AllSortList from "./AllSortList.vue";
import SwiperContainer from "./SwiperContainer.vue";
export default {
  components: {
    SwiperContainer,
    AllSortList,
  },
};
</script>

<style>
.banner {
  width: 1226px;
  display: flex;
  justify-content: space-between;
}
</style>
