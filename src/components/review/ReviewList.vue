<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <review-list-view
        v-for="(review, index) in reviewlist"
        :key="index"
        v-bind:review="review"
      ></review-list-view>
    </ul>
  </div>
  <div class="g-foot-v g-foot-sm" id="js-review-more" aria-hidden="true">
    <review-list-hidden
      v-for="(review1, index1) in reviewlist"
      :key="index1"
      v-bind:review1="review1"
    ></review-list-hidden>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// import ReviewCom from "./ReviewCom.vue";
import ReviewListView from "./reviewListView.vue";
import ReviewListHidden from "./reviewListHidden.vue";

// export default {
//   ReviewListView,
//   ReviewListVHidden,
// };
//动态json获取
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setreviewsList", goodsId);
});
let reviewlist = computed(() => store.getters.getreviewsList);
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
