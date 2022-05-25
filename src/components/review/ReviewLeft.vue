<template>
  <div class="p-reviw-graph-area-left-row">
    <span class="p-reviw-graph-area-comp-eva">総合評価</span>
  </div>
  <div>
    <div
      class="p-reviw-graph-area-score p-reviw-graph-area-average p-reviw-graph-area-average-sm"
    >
      <span class="g-digit p-reviw-graph-area-g-score">{{
        scoreTotal.avgScore
      }}</span>
      <!-- <star-rating
        class="star"
        :star-size="20"
        :rating="scoreTotal.avgScore"
        :read-only="true"
        :increment="0.01"
        :show-rating="ture"
        :rounded-corners="true"
      ></star-rating> -->
    </div>
    <div class="p-reviw-graph-area-left-row p-reviw-graph-area-left-row-score">
      <div class="g-score p-reviw-graph-area-g-score">
        <span :data-score="scoreTotal.avgScore"></span>
      </div>
    </div>
    <div class="p-g-left-row">
      <a class="g-link" id="js-totalrate" data-clickable=""
        ><span
          >(<span id="js-reviews">{{ scoreTotal.reviewCount }}</span
          >)</span
        ></a
      >
      <p class="p-reviw-graph-area-foot">
        {{ scoreTotal.reviewCount }}評価 {{ scoreTotal.titleCount }}商品レビュー
      </p>
    </div>
  </div>
</template>

<script>
// import StarRating from "vue-star-rating";
export default {
  // component: {
  //   StarRating,
  // },
  props: {
    scoreTotal: {
      avgScore: Number,
      reviewCount: Number,
      titleCount: Number,
      // counter: String,
      // showComment:Boolean
    },
  },
};
</script>

<style>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}
.p-reviw-graph-area-g-score {
  margin-left: 0px !important;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.p-reviw-graph-area-score {
  color: #333;
  margin: initial !important;
}
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px px 0;
}
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}

#js-totalrate {
  text-decoration: underline;
  text-decoration-skip-ink: none;
}
[data-clickable] {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
