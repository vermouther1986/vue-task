<template>
  <div class="p-reviewScore">
    <div class="p-reviw-graph-area">
      <review-left-score :scoreTotal="scoreTotal"></review-left-score>
    </div>
    <div class="p-reviw-graph-area-right">
      <review-right-info></review-right-info>
    </div>
  </div>
</template>

<script setup>
// import { mapActions, mapGetters } from "vuex";
import ReviewLeftScore from "./ReviewLeft.vue";
import ReviewRightInfo from "./ReviewRightInfo.vue";
//  import { onMounted, computed } from "vue";
// import { useStore } from "vuex";
// export default {
//   props: {
//     //   //   ReviewLeftScore,
//     //   //   ReviewRightScore,
//     reviewScore: Object,
//     //   //   // counter: String,
//     //   //   // showComment:Boolean
//   },
//   components: {
//     ReviewLeftScore,
//     ReviewRightScore,
//   },
//   setup() {
//     const store = useStore();
//     onMounted(() => {
//       store.dispatch("setreviewScore");
//     });
//     let reviewScore = computed(() => store.getters.getreviewScore);
//     return { reviewScore };
//   },
// methods: {
//   ...mapActions({ fetchreviewScore: "setreviewScore" }),
// },
// computed: {
//   ...mapGetters({ reviewScorelist: "getreviewScore" }),
// },
// mounted() {
//   this.fetchreviewScore();
// },

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setTotal", goodsId);
});
let scoreTotal = computed(() => store.getters.getTotal);
</script>

<style>
.p-reviewScore {
  display: flex;
  margin-bottom: 15px;
  align-items: flex-end;
}
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
</style>
