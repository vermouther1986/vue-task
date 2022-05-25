<template>
  <li class="g-reviewList_item">
    <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p>
    <div class="g-lg-flow-sm">
      <star-rating
        class="star"
        :star-size="20"
        :rating="review.rating"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
      ></star-rating>
      <!-- <p class="g-score">
        <span :data-score="review.rating">
          <span class="g-clip">text.product.review.Rating</span>
        </span>
      </p> -->
      <p class="g-reviewList_user">
        <b>{{ review.nickName }}</b
        >さん &emsp; {{ review.reviewDate }}
      </p>
    </div>
    <p class="g-reviewList_info">
      <!-- 購入商品:のびてピタッとフィットする枕カバー(Nフィットニット ソッコウ
      標準～大判サイズ DBR) -->
      {{ review.goodsName }}
    </p>
    <p class="g-reviewList_h">{{ review.title }}</p>
    <p>
      <!-- 横向き寝が楽な枕とセットで買いました。 伸びる素材で被せるだけなので
        楽に着脱できたり 素材はわたし的には気持ちよくて
        商品自体には満足してますが 唯一、もう少し女性が好きそうな
        カラーバリエーションがあるといいなと思ったので☆−１ -->
      {{ review.content }}
    </p>
    <ul class="g-sm-flow-sm g-lg-flow g-reviewList_pics">
      <li>
        <img
          class="g-fw p-review-gallery_photo"
          :src="photo1"
          alt="0"
          aria-expanded="false"
          aria-controls="p-reviewGallerySwipModal"
        />
      </li>
    </ul>
    <p class="g-reviewList_like">
      <a
        class="g-link reviewLike0"
        id="js-hitLike"
        data-count="0"
        data="626f252eb5f952006200018b"
        data-clickable=""
        ><i class="g-s g-s-like-g" aria-hidden="true"></i
        ><span>参考になった（{{ review.count }}）</span></a
      >
    </p>
  </li>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    review: {
      rating: Number,
      nickName: Number,
      goodsName: String,
      count: Number,
      title: String,
      content: String,
      reviewDate: String,
      goodsId: Number,
      photo1: String,
      photo2: String,
    },
  },
};
</script>

<style scoped>
g-reviewList_item {
  padding: 20px 0;
}
.g-reviewList_item {
  padding: 15px 0;
  border-bottom: 1px dashed #dbdbdb;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_label {
  margin-bottom: 15px;
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 1.2rem;
}
.g-label-brand {
  color: #009e96;
  border: 1px px solid #009e96;
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 3px 5px;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #fff;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.g-reviewList_info {
  margin-top: 10px;
}
.g-reviewList_like {
  line-height: 1;
  margin-top: 15px;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
[data-clickable] {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #333;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_like {
  line-height: 1;
  margin-top: 15px;
}
.g-link .g-i:first-child,
.g-link .g-s:first-child,
.g-lg-link .g-i:first-child,
.g-lg-link .g-s:first-child,
.g-link-u-kiyaku .g-i:first-child {
  margin-right: 0.35em;
}
.g-s-like-g {
  background-position: -32em -32em;
}
.g-reviewList_like .g-s {
  font-size: 2.4rem;
}
.g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  background: url(https://www.nitori-net.jp/ec/_ui/responsive/common/images/icon.svg?ts=20200115)
    no-repeat;
  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
