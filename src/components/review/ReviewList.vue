<template>
  <div id="js-reviewList">
    <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p>
    <ul class="g-reviewList">
      <review-list-view
        v-for="(review, index) in reviews"
        :key="index"
        v-bind:review="review"
      ></review-list-view>
    </ul>
    <div v-if="showed" class="g-foot-v g-foot-sm" id="js-review-more">
      <ul class="g-reviewList">
        <review-list-view
          v-for="(review2, index2) in reviewList2"
          :key="index2"
          v-bind:review="review2"
        ></review-list-view>
      </ul>
    </div>
  </div>
  <!-- //隐藏reviewbuttton -->
  <div class="g-foot-v g-foot-sm" id="js-review-more" aria-hidden="false">
    <p class="g-align-tc">
      <a
        @click="showMore"
        class="g-link displaymorereview"
        href="#p-reviewMore"
        role="button"
        aria-expanded="false"
        aria-controls="p-reviewMore"
        data-label="閉じる"
        data-accordion='{"scroll":false}'
      >
        <i class="g-i g-i-arrow-d"></i><span>({{ text }})</span></a
      >
    </p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// import ReviewCom from "./ReviewCom.vue";
import ReviewListView from "./reviewListView.vue";

// export default {
//   ReviewListView,
//   ReviewListVHidden,
// };
//动态json获取
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
//click
const showMore = () => {
  if (!showed.value) {
    if (reviewList2.value.length === 0) {
      store.dispatch("setReview", { goodsId: goodsId, offset: 3 });
    } else {
      store.commit("setShowed", true);
    }
  } else {
    store.commit("setShowed", false);
  }
};
onMounted(() => {
  store.dispatch("setReview", { goodsId: goodsId, offset: 0 });
});

const reviewCount = computed(() => store.getters.getReview.reviewCount);
const reviews = computed(() => store.getters.getReview.reviewList);
const reviewList2 = computed(() => store.getters.getReviewList);
const showed = computed(() => store.getters.getShowed);

const text = computed(() => {
  if (!showed.value && reviews.value !== undefined) {
    return (
      "もっと見る (" + reviews.value.length + "/" + reviewCount.value + ")"
    );
  } else {
    return "閉じる";
  }
});

// onMounted(() => {
//   store.dispatch("setreviewsList", goodsId);
// });
// let reviewlist = computed(() => store.getters.getreviewsList);
// let titleCount = computed(() => store.getters.getTotal.titleCount);
// //onclick函数
// const onBtnClick = () => {
//   let showDetail = !showDetail;
// };
</script>

<style scoped>
ul,
ol {
  padding: 0;
  list-style: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>
