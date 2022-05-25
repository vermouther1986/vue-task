<template>
  <div id="p-reviewMore" aria-hidden="false">
    <ul class="g-reviewList">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <star-rating
              class="star"
              :star-size="20"
              :rating="review1.rating"
              :read-only="true"
              :increment="0.01"
              :show-rating="false"
            ></star-rating>
            <span :data-score="review1.rating">
              <span class="g-clip">text.product.review.Rating</span>
            </span>
          </p>
          <p class="g-reviewList_user">
            <b>{{ review1.nickName }}</b
            >さん &emsp; 2020/04/08
          </p>
        </div>
        <p class="g-reviewList_info">{{ review1.nickName }}</p>
        <p class="g-reviewList_h">{{ review1.title }}</p>
        <p>{{ review1.content }}</p>
        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike3"
            id="js-hitLike"
            data-count="3"
            data="5e8dcef53c32e10040000150"
            data-clickable=""
            ><i class="g-s g-s-like-g" aria-hidden="true"></i
            ><span>参考になった（{{ review.count }}人）</span></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    review1: {
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

<style scoped></style>
