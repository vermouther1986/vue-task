<template>
  <section class="g-grid_item g-sm-block-sm" id="js-product-qa">
    <!-- //header -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全6件</span>

        <span>ページ1/2</span>

        <span class="zv-cqa-next zv-cqa-page-btn"
          ><i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
            >&gt;</i
          ></span
        >
      </div>
      <div class="zv-select-wrap">
        <select id="zv-cqa-select-sort" class="zv-select" name="sort">
          <option value="total_yes">トップ評価</option>
          <option value="created_at" selected="">新しい順</option>
        </select>
      </div>
    </div>

    <question-list></question-list>
    <!-- footer -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全6件</span>

        <span>ページ1/2</span>

        <span class="zv-cqa-next zv-cqa-page-btn"
          ><i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
            >&gt;</i
          ></span
        >
      </div>
    </div>
    <question-sumbmit></question-sumbmit>
  </section>
</template>

<script setup>
import QuestionList from "./QuestionList.vue";
import QuestionSumbmit from "./QuestionSubmit.vue";

</script>

<style>
</style>
