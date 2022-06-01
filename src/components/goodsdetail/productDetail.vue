<template>
  <div class="p-grid g-lg-grid-2 g-grid-lg">
    <div class="p-grid_gallery g-grid_item g-sm-full">
      <goods-photo></goods-photo>
    </div>
    <div class="g-grid_item js-sku-details" id="p-specGridItem">
      <div class="g-units-lg">
        <goods-price></goods-price>
      </div>
      <section class="g-block-sm p-spec" id="js-product-spec">
        <goods-style></goods-style>
      </section>
    </div>
  </div>
</template>

<script setup>
import goodsPrice from "./goodsPrice.vue";
import goodsStyle from "./goodsStyle";
import goodsPhoto from "./goodsPhoto";
</script>

<style scoped>
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
</style>
