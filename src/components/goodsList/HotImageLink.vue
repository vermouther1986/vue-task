<template>
  <router-link :to="link">
    <a :href="link"><img :src="imgSrc" :alt="name" /></a>
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false,
};
</script>

<style scoped>
img {
  height: 290px;
}
</style>
