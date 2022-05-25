<template>
  <div class="hot-image">
    <hot-image-link v-bind="banner"></hot-image-link>
  </div>
</template>

<script>
import HotImageLink from "./HotImageLink.vue";
export default {
  props: {
    banner: Object,
  },
  components: {
    HotImageLink,
  },
};
</script>

<style></style>
