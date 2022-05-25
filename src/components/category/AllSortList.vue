<template>
  <div class="all-sort-list">
    <div
      class="item hover"
      v-for="(LevelOne, index1) in categories"
      v-bind:LevelOne="LevelOne"
      :key="index1"
      @mouseover.self="mouseOverFun($event)"
      @mouseleave.self="mouseLeaveFun($event)"
    >
      <h3>
        <span>·</span>

        <a :href="LevelOne.link">{{ LevelOne.categoryName }}</a>
      </h3>
      <div class="item-list clearfix" style="top: '0px'; display: none">
        <div class="subitem">
          <dl
            class="fore1"
            v-for="(LevelTwo, index2) in LevelOne.categories"
            v-bind:LevelTwo="LevelTwo"
            :key="index2"
          >
            <dt>
              <a :href="LevelTwo.link">{{ LevelTwo.categoryName }}</a>
            </dt>
            <dd>
              <em
                v-for="(LevelThree, index3) in LevelTwo.categories"
                v-bind:LevelTwo="LevelThree"
                :key="index3"
                ><a href="#">{{ LevelThree.categoryName }}</a></em
              >
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.dispatch("setCategor");
});
let categories = computed(() => store.getters.getCategor);

const mouseOverFun = (event) => {
  // return (displayOrNot = "block"); is wrong ,have to .value
  // return (displayOrNot.value = "block");
  let style = "top: " + event.target.offsetTop + "px; display: block;";
  event.target.querySelector(".item-list").style = style;
  //console.log("event", event.target);
  //event.target.querySelector(".item-list").style.display = "block";
};
const mouseLeaveFun = (event) => {
  // return (displayOrNot.value = "none");
  console.log("event", event);
  event.target.querySelector(".item-list").style.display = "none";
};
</script>

<style>
.all-sort-list {
  position: relative;
  float: left;
  width: 228px;
  border-top: none;
  background: #000;
  height: 100%;
}
.all-sort-list .item h3 {
  font-size: 15px;
  font-weight: normal;
  width: 199px;
  overflow: hidden;
  text-align: left;
}
.all-sort-list .item {
  height: 49px;
  border-top: 1px solid #ffffff;
  padding-left: 10px;
}
.all-sort-list .item a {
  color: #fff;
  text-decoration: none;
}
all-sort-list .item span {
  padding: 0px 5px;
  color: #1baeae;
  font-family: "\5B8B\4F53";
}
.item-list .subitem {
  float: left;
  width: 477px;
  padding: 0px 4px 0px 8px;
}
.item-list .subitem dt {
  float: left;
  width: 84px;
  line-height: 20px;
  text-align: left;
  padding: 3px 6px 0px 0px;
  font-weight: 700;
  color: #1baeae;
}
.all-sort-list .item-list {
  display: none;
  position: absolute;
  width: 495px;
  min-height: 200px;

  background: #fff;
  left: 210px;
  box-shadow: 0px 0px 10px #dddddd;
  border: 1px solid #ddd;
  top: 3px;
  z-index: 10;
}
.item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0px;
  overflow: hidden;
  zoom: 1;
}
.item-list .subitem dt {
  float: left;
  width: 84px;
  line-height: 20px;
  text-align: left;
  padding: 3px 6px 0px 0px;
  font-weight: 700;
  color: #1baeae;
}
.item-list .subitem dt a {
  color: #1baeae;
  text-decoration: underline;
}
.item-list .subitem dd {
  float: left;
  width: 415px;
  padding: 3px 0px 0px;
  overflow: hidden;
}
.item-list .subitem dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0px 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.item-list .subitem dd em a,
.item-list .cat-right dd a {
  color: #666;
  text-decoration: none;
}
</style>
