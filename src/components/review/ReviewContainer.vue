<template>
  <!-- <h1>{{ goodsId }}</h1> -->
  <section
    class="g-grid_item g-sm-block-sm"
    id="js-product-reviews"
    aria-hidden="false"
  >
    <input type="hidden" name="productCodePost" value="" />
    <div id="normal-productreview">
      <h2 class="g-h-2 g-h-i p-hd">
        <i class="g-s g-s-comment" aria-hidden="true"></i>
        <span>レビュー</span>
      </h2>
      <div class="p-reviewScore p-reviewScore-sm">
        <review-score></review-score>
      </div>
      <review-totil> </review-totil>
      <input type="hidden" id="numberOfReviews" value="7" />
      <review-button></review-button>

      <review-list></review-list>
    </div>
  </section>
</template>

<script setup>
// import { computed } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
import ReviewScore from "./ReviewScore.vue";
import ReviewList from "./ReviewList.vue";
import ReviewButton from "./ReviewButton";

// const store = useStore();
// let titleCount = computed(() => store.getters.getTotal.titleCount);
// import { useRoute } from "vue-router";
// export default {
//   components: {
//     ReviewScore,
//     ReviewList,
//     ReviewTotil,
//   },
//   methods: {
//     ...mapActions({ fetchreviewScore: "setreviewScore" }),
//   },
//   computed: {
//     ...mapGetters({ reviewScorelist: "getreviewScore" }),
//   },
//   mounted() {
//     this.fetchreviewScore();
//   },
// };
///
// import { onMounted, computed } from "vue";
// import { useStore } from "vuex";
// const store = useStore();
// onMounted(() => {
//   store.dispatch("setreviewScore");
// });
// let reviewScore = computed(() => store.getters.getreviewScore);
//routerreview
// const route = useRoute();
// const goodsId = route.params.goodsId;
// const store = useStore();
// onMounted(() => {
//   store.dispatch("setreviews", goodsId);
// });
// let reviewScorelist = computed(() => store.getters.getreviews);
//
// const route = useRoute();
// const goodsId = route.params.goodsId;
</script>

<style>
.p-hd {
  font-size: 1.8rem;
  margin-bottom: 13px;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
