<template>
  <section class="g-grid_item g-sm-block-sm" id="js-product-qa">
    <!-- //header -->
    <h2 class="g-h-2 g-h-i p-hd">
      <i class="g-s g-s-comment" aria-hidden="true"></i>
      <span>商品Q&amp;A</span>
    </h2>
    <div id="ZVCQuestionsArea" class="">
      <div class="zv-cqa-step">
        <div class="zv-cqa-step-link">
          <span>全{{ totalcount }}件</span>
          <span
            v-if="currentpage > 1"
            @click="cut"
            class="zv-cqa-previous zv-cqa-page-btn"
          >
            <i class="zv-cqa-arrow zv-cqa-arrow-left" data-page="3">&lt;</i>
          </span>
          <span> ページ{{ currentpage }}/{{ totalPage }} </span>

          <span
            v-if="currentpage < totalPage"
            @click="add"
            class="zv-cqa-next zv-cqa-page-btn"
          >
            <i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="4">&gt;</i>
          </span>
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
          <span
            v-if="currentpage > 1"
            @click="cut"
            class="zv-cqa-previous zv-cqa-page-btn"
          >
            <i class="zv-cqa-arrow zv-cqa-arrow-left" data-page="3">&lt;</i>
          </span>

          <span>ページ{{ currentpage }}/{{ totalPage }}</span>
          <span
            v-if="currentpage < totalPage"
            @click="add"
            class="zv-cqa-next zv-cqa-page-btn"
          >
            <i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="4">&gt;</i>
          </span>
        </div>
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

<style scoped>
.g-lg-grid-2.g-grid-lg > .g-grid_item {
  width: calc((100% - 40px) / 2 - 0.1px);
  padding: 20px 20px;
  box-sizing: content-box;
}
.zv-cqa-step {
  display: flex;
}
.zv-select-wrap {
  margin-left: 2em;
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
.p-hd {
  font-size: 2rem;
}
.p-hd {
  margin-bottom: 13px;
}
.g-h-i,
.g-lg-h-i {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.g-s-comment {
  background-position: -13em -13em;
}
g-h-i > span,
.g-lg-h-i > span {
  flex: 1 1;
}
#ZVCQA {
  font-size: 14px;
  margin-bottom: 30px;
  color: #333;
  padding: 0;
}
#ZVCQA .zv-cqa-step-link {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
  padding-bottom: 5px;
}
.zv-cqa-page-btn {
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
#ZVCQA i.zv-cqa-arrow,
#ZVCQA a.zv-cqa-next,
#ZVCQA a.zv-cqa-previous {
  transition: transform 0.3s;
  color: #009e96;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  letter-spacing: 0;
  text-transform: none;
}

.zv-cqa-step {
  box-shadow: 0 1px 0 0 #dbdbdb;
}
#ZVCQA .zv-select-wrap {
  overflow: hidden;
  position: relative;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  background: #ffffff;
  width: auto;
  display: inline-block;

  vertical-align: middle;
}
#ZVCQA .zv-select-wrap::before {
  position: absolute;
  top: 0.9em;
  right: 0.9em;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #bdc3c7;
}
#ZVCQA .zv-select {
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 4px 38px 4px 8px;
  font-size: 13px;
}
slot {
  display: contents;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
</style>
