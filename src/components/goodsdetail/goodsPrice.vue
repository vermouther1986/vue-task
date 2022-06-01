<template>
  <dl class="p-customize js-sku-variations" data-index="0">
    <dt>サイズ：<b id="p-customize0サイズ">ワイドダブル-クイーン</b></dt>

    <dd>
      <div class="g-select g-select-sm js-sku-variations-dropdown">
        <i class="g-i g-i-dropdown" aria-hidden="true"></i>
        <select
          name=""
          required=""
          aria-required="true"
          aria-label="サイズの選択"
          data-control="#p-eo-label-"
        >
          <option
            value="7518021"
            data-code="05700010035"
            data-label="スモールシングル-シングル"
            data-parent=""
          >
            スモールシングル-シングル
          </option>
          <option
            value="7518022"
            data-code="05700010036"
            data-label="セミダブル-ダブル"
            data-parent=""
          >
            セミダブル-ダブル
          </option>
          <option
            value="7518023"
            data-code="05700010037"
            data-label="ワイドダブル-クイーン"
            selected=""
            data-parent=""
          >
            ワイドダブル-クイーン
          </option>
        </select>
        <input
          type="hidden"
          class="サイズ js-Sku-Var"
          name=""
          value="05700010035"
          aria-required="true"
          data-parent=""
          data-index="0"
          data-label="スモールシングル-シングル"
          data-control="#p-eo-label-"
          data-eo-code=""
        />
        <input
          type="hidden"
          class="サイズ js-Sku-Var"
          name=""
          value="05700010036"
          aria-required="true"
          data-parent=""
          data-index="0"
          data-label="セミダブル-ダブル"
          data-control="#p-eo-label-"
          data-eo-code=""
        />
        <input
          type="hidden"
          class="サイズ js-Sku-Var"
          name=""
          value="05700010037"
          checked=""
          aria-required="true"
          data-parent=""
          data-index="0"
          data-label="ワイドダブル-クイーン"
          data-control="#p-eo-label-"
          data-eo-code=""
        />
      </div>
    </dd>
    <dt>カラー：<b id="p-customize1カラー">ローズ</b></dt>
    <dd>
      <ul class="g-flow-sm">
        <color-list></color-list>
      </ul>
    </dd>
  </dl>
  <div class="js-catch-copy">
    伸びる素材でぴったりフィット厚さ38cmまで対応。敷ふとんにも、マットレスにも使えるワイドダブル-クイーン用。2020/11/6～2022/5/15までの当社販売価格3990円（税込）期間限定値下げ5/16~6/20まで
  </div>
  <div class="g-units-xs js-sku-price">
    <div>
      <div class="g-flow-0 g-align-fbl">
        <dl class="p-price">
          <dd class="g-price g-price-lg price-size-up g-price-down">
            3,790<span>円</span>
          </dd>
        </dl>
      </div>

      <p class="g-font-sm">値下実施日：2022/05/16</p>
      <p class="g-font-sm">旧価格：3,990円</p>
    </div>
    <div class="g-butterfly">
      <p class="p-point">
        獲得ポイント<span class="g-digit">34 pt </span> 付与
      </p>
      <p class="g-font-sm p-point-link">
        <a class="g-link" href="/ec/userguide/memberscardpoint/">
          <span>ポイントについて</span>
          <i class="g-i g-i-info" aria-hidden="true"></i>
        </a>
      </p>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>

<script setup>
import colorList from "./colorList.vue";
</script>

<style></style>
