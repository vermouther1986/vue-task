<template>
  <div class="content-container">
    <banner-container></banner-container>
    <sub-banner></sub-banner>
    <ul-container></ul-container>
  </div>
</template>

<script>
import UlContainer from "../components/goodsList/UlContainer.vue";
import SubBanner from "../components/goodsList/SubBanner.vue";
import BannerContainer from "../components/category/BannerContainer.vue";

export default {
  components: { UlContainer, SubBanner, BannerContainer },
};
</script>

<style>
.content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
