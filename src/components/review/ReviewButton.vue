<template>
  <div id="n-review-btn" class="n-review-btn">
    <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
      <span>商品レビューを書く</span
      ><i class="g-i g-i-arrow-r" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.n-review-btn {
  text-align: center;
  padding-bottom: 20px;
}
.g-btn-w-sm,
.g-lg-btn-w-sm {
  width: auto;
  min-width: 106px;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
}
.g-btn-w-sm,
.g-lg-btn-w-sm {
  width: auto;
  min-width: 60px;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}

button {
  margin: 0;
}
button {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  align-items: flex-start;

  align-items: flex-start;
}
.n-review-btn button span {
  padding: 5px px 30px !important;
  color: #009e96;
}
.g-btn > span,
.g-lg-btn > span {
  min-height: 48px;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
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
}
</style>
