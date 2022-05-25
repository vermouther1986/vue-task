<template>
  <div class="p-reviw-graph-area-right">
    <review-right
      v-for="(rating, index) in ratinglist"
      :key="index"
      :ratingobj="rating"
    ></review-right>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewRight from "./ReviewRight.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setRating", goodsId);
});
let ratinglist = computed(() => {
  return store.getters.getRating;
});
</script>

<style></style>
