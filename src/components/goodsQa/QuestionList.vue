<template>
  <div class="zv-cqa">
    <div class="zv-cqa-question">
      <span class="zv-space">Q. </span>
      <span class="zv-cqa-q-text">{{ qeContents }}</span>
    </div>
    <div class="zv-cqa-q-info">
      <span class="zv-cqa-q-reviewer">投稿者&nbsp; </span>
      <span class="zv-cqa-q-created-at">投稿日&nbsp;{{ qeDate }}</span>
    </div>
    <div class="zv-cqa-answers">
      <div class="zv-cqa-answer zv-cqa-answer-first">
        <span class="zv-space">A. </span>
        <div class="zv-cqa-a-content">
          <div class="zv-cqa-a-text">
            <p class="zv-p">
              {{ Contents }}
            </p>
          </div>

          <div class="zv-cqa-a-info">
            <span class="zv-space"></span>
            <span class="zv-cqa-a-reviewer">回答者&nbsp; {{ answerName }}</span>
            <span class="zv-cqa-a-created-at"
              >回答日&nbsp;{{ answerDate }}</span
            >
          </div>
          <div class="zv-helpful-form" data-answer-id="215713">
            <span class="zv-space"></span>
            <span class="zv-error-message" id="ZVLoginErrorHelpful-215713"
              >「参考になった/参考にならなかった」を投稿するにはログインが必要です。</span
            >
            <span class="zv-helpful-col">
              <span
                class="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-215713 zv-link-disabled"
                data-count="215713"
                data-clickable=""
                data-answer-id="215713"
                ><p>フィードバックありがとうございます</p></span
              >
            </span>
            <span class="zv-helpful-col">
              <span
                class="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-no-215713"
                data-count="215713"
                data-clickable=""
                data-answer-id="215713"
              >
                <i class="zv-helpful zv-helpful-no-i"></i>
                <span
                  class="zv-helpful zv-helpful-no zv-helpful-no-215713"
                  data-count="215713"
                  id="ZVHelpfulNo-215713"
                  >参考にならなかった</span
                >
                <span
                  class="zv-helpful zv-helpful-num zv-helpful-no-num zv-helpful-no-num-215713"
                  data-count="215713"
                  id="ZVHelpfulNoNum-215713"
                  >({{ count }})</span
                >
              </span>
            </span>
            <span class="zv-separator">|</span>
            <div class="zv-popupModal1">
              <input type="radio" name="modalPop" id="pop11215713" />
              <label for="pop11215713">違反を報告</label>
              <input type="radio" name="modalPop" id="pop12215713" />
              <label for="pop12215713">CLOSE</label>
              <input type="radio" name="modalPop" id="pop13215713" />
              <label for="pop13215713">×</label>
              <div class="zv-modalPopup2">
                <div class="zv-modalPopup3">
                  <h2 class="zv-modalTitle">違反を報告</h2>
                  <div class="zv-modalMain">
                    <p>
                      このコンテンツは不適切であり、削除する必要があると思われる場合は、下のボタンをクリックしてお知らせください。
                    </p>
                    <div
                      class="zv-report zv-btn"
                      data-post-type="answer"
                      data-target-id="215713"
                    >
                      違反を報告する
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="zv-cqa-comment">
            <div class="zv-cqa-comment-actions">
              <p class="zv-error-message" id="ZVLoginErrorComment-215713">
                コメントを記入するにはログインが必要です。
              </p>
            </div>
            <div class="zv-cqa-comment-list-body zv-hide"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    qeContents: String,
    qeDate: String,
    Contents: String,
    answerName: String,
    answerDate: String,
    count: Number,
  },
};
</script>

<style>
.zv-cqa-question {
  padding: 15px 0 0;
}
.zv-space {
  width: 20px;
  display: block;
  float: left;
  font-weight: bold;
}
.zv-cqa-q-text {
  font-weight: bold;
  margin: 10px 0;
  line-height: 1.5;
}
#ZVCQA span.zv-cqa-q-reviewer {
  display: none;
  margin-left: 20px;
  font-size: 13px;
  margin-left: 10px;
  color: #555;
}
#ZVCQA span.zv-cqa-q-created-at,
#ZVCQA span.zv-cqa-a-created-at {
  margin-left: 0;
}
.zv-cqa-answer {
  margin: 10px 0 0 10px;
}
.zv-space {
  width: 20px;
  display: block;
  float: left;
  font-weight: bold;
}
.zv-cqa-a-content {
  display: block;
  width: calc(100% - 20px);
  float: none;
}
.zv-p {
  margin: 0;
  overflow-wrap: break-word;
}
.zv-cqa-a-reviewer,
.zv-cqa-a-created-at {
  font-size: 13px;
  color: #555;
}
#ZVCQA div.zv-helpful-form {
  line-height: 1;
  margin-top: 15px;
}
#ZVCQA .zv-helpful-form {
  display: inline-block;
  color: #555;
}
.zv-error-message {
  color: red;
  display: none;
  margin-top: 0px;
  margin-bottom: 10px;
}
#ZVCQA div.zv-helpful-form {
  line-height: 1;
  margin-top: 15px px;
}
</style>
