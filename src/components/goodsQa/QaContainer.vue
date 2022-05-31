<template>
  <section class="g-grid_item g-sm-block-sm" id="js-product-qa">
    <!-- //header -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalcount }}件</span>

        <span
          ><button v-if="currentpage > 1" @click="cut">上一页</button
          ><span class="material-symbols-outlined"> chevron_left </span>ページ{{
            currentpage
          }}/{{ totalPage
          }}<span class="material-symbols-outlined"> chevron_right </span
          ><button v-if="currentpage < totalPage" @click="add">
            下一页
          </button></span
        >

        <span class="zv-cqa-next zv-cqa-page-btn"
          ><i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
            >&gt;</i
          ></span
        >
      </div>
      <div class="zv-select-wrap">
        <select
          @change="sortList"
          id="zv-cqa-select-sort"
          class="zv-select"
          name="sort"
        >
          <option value="total_yes">トップ評価</option>
          <option value="created_at" selected="">新しい順</option>
        </select>
      </div>
    </div>
    <div class="zv-cqa">
      <question-list
        v-for="(qa, index) in qaPage"
        :key="index"
        v-bind="qa"
      ></question-list>
    </div>

    <!-- footer -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalcount }}件</span>

        <span>ページ{{ currentpage }}/{{ totalPage }}</span>

        <span class="zv-cqa-next zv-cqa-page-btn"
          ><i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
            >&gt;</i
          ></span
        >
      </div>
    </div>
    <div id="ZVCQAPost">
      <question-sumbmit></question-sumbmit>
    </div>
  </section>
</template>

<script setup>
import QuestionList from "./QuestionList.vue";
import QuestionSumbmit from "./QuestionSubmit.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();

onMounted(() => {
  store.dispatch("setQalist", goodsId);
});
const start = computed(() => (currentpage.value - 1) * 3);
const end = computed(() => start.value + 3);
const qalist = computed(() => {
  return store.getters.getQalist.qaList;
});
const qaPage = computed(() => qalist.value.slice(start.value, end.value));
const totalcount = computed(() => {
  return store.getters.getQalist.qaList.length;
});
const currentpage = computed(() => {
  return store.getters.getcurrentPageNo;
});
const cut = () => {
  store.commit("CutPageNo");
};
const add = () => {
  store.commit("AddPageNo");
};
const totalPage = computed(() => {
  if (totalcount.value % 3 != 0) {
    return Math.floor(totalcount.value / 3 + 1);
  } else {
    return Math.floor(totalcount.value / 3);
  }
});

const sortList = (e) => {
  store.commit("sortList", e.target.value);
};
</script>

<style>
.g-lg-grid-2.g-grid-lg > .g-grid_item {
  width: calc((100% - 40px) / 2 - 0.1px);
  padding: 20px 20px;
  box-sizing: content-box;
}

section {
  display: block;
}
.p-hd {
  font-size: 2rem;
  margin-bottom: 13px;
  font-weight: bold;
}
.g-h-i {
  display: flex;
  align-items: center;
}
.g-s-comment {
  background-position: -13em -13em;
}
g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  background: url(https://www.nitori-net.jp/ec/_ui/responsive/common/images/icon.svg?ts=20200115)
    no-repeat;
  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
}
i {
  font-style: italic;
}
.p-hd {
  font-size: 2rem;
}
.g-h-i > span,
.g-lg-h-i > span {
  flex: 1 1;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
