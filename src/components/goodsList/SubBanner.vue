<template>

  <div id="sub_banner">
    <hot-image
      v-for="(banner, index) in state.subBannerses"
      :key="index"
      v-bind:banner="banner"
    ></hot-image>
  </div>
</template>

<script setup>
import HotImage from "./HotImage.vue";
import { reactive, onMounted } from "vue";
//import { mapActions, mapGetters } from "vuex";
// export default {
//   components: { HotImage },
//   methods: {
//     ...mapActions({ fetchsubBanner: "setsubBanner" }),
//   },
//   computed: {
//     ...mapGetters({ bannerlist: "getsubBanner" }),
//   },
//   mounted() {
//     this.fetchsubBanner();
//   },
// };
// export default {
//   components: { HotImage },
//   setup(props) {
//     console.log(props.title);

const state = reactive({
  subBannerses: [],
});
onMounted(async () => {
  const url = "http://localhost:3000/subBannerses";

  const headers = { Accept: "application/json" };
  const subbanner = await fetch(url, { headers });
  const j = await subbanner.json();
  //   const newArr = j.map((goods) => {
  //     const { link, imgSrc, name } = goods;
  //     return { link, imgSrc, name };
  //   });
  //   state.subBannerses = [...newArr];
  state.subBannerses = [...j];
  //   //const goods2 = toRef(state, "subBannerses");
});
//     return {
//       ...toRefs(state),
//     };
//   },
// };
</script>

<style>
#sub_banner {
  display: flex;
  width: 1226px;
  flex-shrink: 0;
  justify-content: space-between;
  height: 295px;
  /* margin-top: 15px; */
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  font-family: Microsoft Yahei;
  flex-wrap: wrap;
}
</style>
