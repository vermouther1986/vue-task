<template>
  <div>
    <slot>hi</slot>
    <slot name="jinjin"></slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
div {
  border: 1px solid red;
}
</style>
