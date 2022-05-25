<template>
  <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
    <div class="g-score p-reviw-graph-area-score">
      <span :data-score="ratingobj.rating"
        >::before<span class="g-clip">{{ ratingobj.rating }}</span
        >::after</span
      >
    </div>
    <div
      class="a-meter g-mater-visble"
      id="js-mater5"
      :data-rate="ratingobj.rating"
    >
      <div class="a-meter-bar" :style="{ width: width }"></div>
    </div>
    <a
      class="g-link g-link-visble"
      id="js-rate5"
      :data-rate="ratingobj.rating"
      :title="title"
      data-clickable=""
      >{{ ratingobj.ratingCount }}人</a
    >
  </div>
</template>

<script>
export default {
  props: {
    ratingobj: {
      rating: Number,
      allScore: Number,
      reviewCount: Number,
      percentnumber: Number,
      ratingCount: Number,
    },
  },
  data() {
    return {
      with: '100%',
      title:
        "レビューの" +
        this.ratingobj.percentnumber +
        "%に星" +
        this.ratingobj.rating +
        "つが付いています。",
    };
  },

  methods: {},
};
</script>

<style>
.p-reviw-graph-area-right {
  box-sizing: border-box;
  display: inline-block;
  padding: 2px 2px 2px 2px;
  vertical-align: top;
  width: 100%;
}
.p-reviw-graph-area-row-sm {
  display: flex;
  flex-wrap: wrap;
}
.p-reviw-graph-area-score {
  color: #333;
  margin: initial !important;
}
.g-score,
.g-lg-score {
  font-size: smaller;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 16px;
}
.p-reviw-graph-area-score {
  color: #333;
  margin: initial !important;
}
.g-score [data-score],
.g-lg-score [data-score] {
  display: flex;
  overflow: hidden;
  width: 90px;
  margin-right: 0.4em;
}
.p-reviw-graph-area-score {
  color: #333;
  margin: initial !important;
}
.g-score [data-score$=".0"]::before,
.g-lg-score [data-score$=".0"]::before {
  width: 0px;
}
.g-score [data-score^="5"]::before,
.g-lg-score [data-score^="5"]::before {
  padding-left: 90px;
}
.g-score [data-score]::before,
.g-score [data-score]::after,
.g-lg-score [data-score]::before,
.g-lg-score [data-score]::after {
  height: 16px;
  content: "";
  background-size: auto 100%;
}
.g-score [data-score]::before,
.g-lg-score [data-score]::before {
  box-sizing: content-box;
  background-image: url(https://www.nitori-net.jp/ec/_ui/responsive/common/images/parts/star_on.svg);
}
.g-clip,
.g-lg-clip {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.p-reviw-graph-area-score {
  color: #333;
  margin: initial !important;
}
.g-score [data-score]::before,
.g-score [data-score]::after,
.g-lg-score [data-score]::before,
.g-lg-score [data-score]::after {
  height: 16px;
  content: "";
  background-size: auto 100%;
}
.g-score [data-score]::after,
.g-lg-score [data-score]::after {
  background-image: url(https://www.nitori-net.jp/ec/_ui/responsive/common/images/parts/star_off.svg);
  background-position: 100% center;
  flex: 1 1;
}
.a-meter {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px #e3e6e6;
  background-color: #dbdbdb;
  height: 10px;
  width: calc(100% - 110px - 4em);
  margin-left: 0px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.a-meter .a-meter-bar {
  -webkit-transition: width 0.5s ease;
  transition: width 0.5s ease;
  float: left;
  font-size: 0;
  height: 100%;
  width: 0;
}
.a-meter .a-meter-bar {
  border-radius: 4px;
  box-shadow: inset -2px 0 0 -1px #a4433c, inset 0 0 0 1px #8d3a34;
  background-color: #eb6157;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.g-link-visble {
  text-decoration: underline;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
[data-clickable] {
  cursor: pointer;
}
.g-score [data-score],
.g-lg-score [data-score] {
  display: flex;
  overflow: hidden;
  width: 90px;
  margin-right: 0.4em;
}
.g-score [data-score^="4"]::before,
.g-lg-score [data-score^="4"]::before {
  padding-left: 72px;
}
core [data-score]::after,
.g-lg-score [data-score]::before,
.g-lg-score [data-score]::after {
  height: 16px;
  content: "";
  background-size: auto 100%;
}
.a-meter .a-meter-bar {
  -webkit-transition: width 0.5s ease;
  transition: width 0.5s ease;
  float: left;
  font-size: 0;
  height: 100%;
  width: 0;
}
.a-meter .a-meter-bar {
  /* border-radius: 4px; */
  /* box-shadow: inset -2px 0 0 -1px #a4433c, inset 0 0 0 1px #8d3a34; */
  background-color: #eb6157;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.g-score [data-score^="3"]::before,
.g-lg-score [data-score^="3"]::before {
  padding-left: 54px;
}
.g-score [data-score^="2"]::before,
.g-lg-score [data-score^="2"]::before {
  padding-left: 36px;
}
.g-score [data-score^="1"]::before,
.g-lg-score [data-score^="1"]::before {
  padding-left: 18px;
}
</style>
