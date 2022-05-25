<template>
  <review-container> </review-container>
</template>

<script>
// import { useRoute } from "vue-router";
// import { useStore } from "vuex";
// import { computed, onMounted } from "vue";
import ReviewContainer from "../components/review/ReviewContainer";

export default {
  components: { ReviewContainer },
};

// const route = useRoute();
// const goodsId = route.params.goodsId;
// const store = useStore();
// onMounted(() => {
//   store.dispatch(" setReviews", goodsId);
// });
// let reviewInfo = computed(() => store.getters.getReviews);
//  review
//   const route = useRoute();
//   const goodsId = route.params.goodsId;
//   const store = useStore();
//    onMounted(() => {
//      store.dispatch("setreviews", goodsId);
//   });
//   let goodsInfo = computed(() => store.getters.getreviews);
</script>

<style></style>
