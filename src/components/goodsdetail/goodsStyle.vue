<template>
  <h2 class="g-h-2 g-h-i p-hd">
    <i class="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span>
  </h2>
  <ul class="g-flow-xs p-featureIcons js-pictograms">
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8919962910750/0077053.jpg"
        alt=""
      />
    </li>
  </ul>
  <div id="p-specMore" aria-hidden="false" data-accordion-more="">
    <ul class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"></ul>
    <table class="g-table-a js-sku-specs">
      <tbody>
        <tr>
          <th>商品コード</th>
          <td>{{ goodsstyle.code }}</td>
        </tr>
        <tr>
          <th>カラー</th>
          <td>{{ goodsstyle.color }}</td>
        </tr>
        <tr>
          <th>サイズ</th>
          <td>{{ goodsstyle.size }}</td>
        </tr>
        <tr>
          <th>素材</th>
          <td>{{ goodsstyle.material }}</td>
        </tr>
        <tr>
          <th>重量</th>
          <td>{{ goodsstyle.weight }}</td>
        </tr>
        <tr>
          <th>保証年数</th>
          <td>{{ goodsstyle.warranty }}</td>
        </tr>
        <tr>
          <th>梱包サイズ</th>
          <td>{{ goodsstyle.packagesize }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();

onMounted(() => {
  store.dispatch("setGoodstable", goodsId);
});
const goodsstyle = computed(() => {
  return store.getters.getGoodstable;
});
</script>

<style scoped>
.p-hd {
  font-size: 2rem;
  margin-bottom: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
i {
  font-style: italic;
}
.g-h-i > span,
.g-lg-h-i > span {
  flex: 1 1;
}
.p-featureIcons {
  padding-bottom: 15px;
}
.g-flow-xs,
.g-lg-flow-xs {
  margin-bottom: -5px;
  margin-left: -5px;
  display: flex;
  flex-wrap: wrap;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
#p-specMore .p-sku-manuals {
  margin-top: 0 !important;
  display: block;
  text-align: right;
  margin-bottom: 0;
}
.g-flow-lg,
.g-lg-flow-lg {
  margin-left: -20px;
  flex-wrap: wrap;
}
.g-table-a,
.g-lg-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}
table {
  display: table;
  border-collapse: separate;

  text-indent: initial;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.g-table-a th,
.g-lg-table-a th {
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  background-color: #f7f7f7;
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}

.g-table-a td,
.g-lg-table-a td {
  width: 100%;
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
.g-foot-sm,
.g-lg-foot-sm {
  margin-top: 20px;
}
.g-foot-v,
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.displaymorespec,
.displaymoredesc {
  padding: 0px 15px;
  display: inline-flex;
  min-width: 60px;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: normal;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
}
a {
  text-decoration: none;
  color: #333;
}
.displaymorespec span,
.displaymoredesc span {
  min-height: 28px;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 7px;
  display: inline-block;
  text-align: center;
  transform: none;
  width: 100%;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;

  height: 100%;
}
.g-btn > .g-i:last-child,
.g-btn > .g-s:last-child,
.g-lg-btn > .g-i:last-child,
.g-lg-btn > .g-s:last-child {
  margin-right: 8px;
}
.g-btn > .g-i,
.g-btn > .g-s,
.g-lg-btn > .g-i,
.g-lg-btn > .g-s {
  font-size: 1.4rem;
  -ms-grid-row-align: center;
  align-self: center;
}
.g-i-arrow-d {
  transform: rotate(180deg);
}
.displaymorespec > i,
.displaymoredesc > i {
  color: rgb(0, 158, 150);
}
.g-i-arrow-r,
.g-i-arrow-l,
.g-i-arrow-u,
.g-i-arrow-d,
.g-i-arrow-d2 {
  transition: transform 0.3s;
  color: #009e96;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
