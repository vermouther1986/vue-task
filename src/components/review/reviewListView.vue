<template>
  <li class="g-reviewList_item">
    <!-- <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p> -->
    <div class="g-lg-flow-sm">
      <star-rating
        class="star"
        :star-size="20"
        :rating="review.rating"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
      ></star-rating>

      <p class="g-reviewList_user">
        <b>{{ review.nickName }}</b
        >さん &emsp; {{ review.reviewDate }}
      </p>
    </div>
    <p class="g-reviewList_info">
      {{ review.goodsName }}
    </p>
    <p class="g-reviewList_h">{{ review.title }}</p>
    <p>
      {{ review.content }}
    </p>
    <ul class="g-sm-flow-sm g-lg-flow g-reviewList_pics">
      <li>
        <!-- <img
          class="g-fw p-review-gallery_photo"
          :src="image"
          :alt="0"
          :aria-expanded="false"
          :aria-controls="p - reviewGallerySwipModal"
        /> -->

        <!-- image -->
        <template>
          <div class="imageinfo" v-if="review.photo1 != null">
            <viewer
              :images="images"
              @inited="inited"
              class="viewer"
              ref="viewer"
            >
              <template #default="scope">
                <img v-for="src in scope.images" :src="src" :key="src" />
                {{ scope.options }}
              </template>
            </viewer>
            <button type="button" @click="show">Show</button>
          </div>
        </template>
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
        ><span class="material-symbols-outlined"> thumb_up </span
        ><span>参考になった（{{ review.count }}）</span>
        >
      </a>
    </p>
  </li>
</template>

<script>
import StarRating from "vue-star-rating";
import "viewerjs/dist/viewer.css";
import { component as Viewer } from "v-viewer";

// import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  data() {
    return {
      images: [
        this.review.photo1,
        this.review.photo2,
        this.review.photo3,
        this.review.photo4,
        this.review.photo5,
      ],

      //     index: null,
      id: 0,
    };
  },
  components: {
    // VueGallerySlideshow,
    Viewer,
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
      photo3: String,
      photo4: String,
      photo5: String,
    },
  },
  methods: {},
  inited(viewer) {
    this.$viewer = viewer;
  },
  show() {
    this.$viewer.show();
  },
};
</script>

<style>
img {
  width: 100%;
}

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

  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  padding: 0;
  list-style: none;
  padding: 0;
  list-style: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.g-lg-flow {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -15px;
  margin-left: -15px;
}
.g-reviewList_pics {
  margin-top: 15px;
  text-align: center;
}
.g-reviewList_pics li {
  width: 84px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.g-flow > *,
.g-lg-flow > * {
  margin-bottom: 15px;
  margin-left: 15px;
}
.g-fw {
  width: 100% !important;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
</style>
