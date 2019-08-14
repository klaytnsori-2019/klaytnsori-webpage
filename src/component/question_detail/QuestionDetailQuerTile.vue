<template>
  <div class="answer_list_tile">
    <span class="id">{{id}}</span>
    <div class="detail">{{detail}}</div>
    <div class="like_block">
      <span class="choose">채택</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "QuestionDetailQuerTile",
    props: [
      "detail",
      "index",
      "id",
      "select"
    ]
  }
</script>

<style scoped>
  .answer_list_tile {
    margin: 10px auto;
    width: 861px;
    height: 150px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

  .detail{
    display:block;
    width: 800px;
    height: 48px;
    font-family: NanumGothic;
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    color: #9b9b9b;
    margin-top: 40px;
    margin-left:25px;
    white-space:pre;
  }

  .like_block{
    margin: auto;
    width: 120px;
    height: 150px;
    border-radius: 10px;
    background-color: #4695d9;
    display: inline-block;
  }

  .choose{
    display: inline-block;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    margin-top:65px;
    color: #ffffff;
  }

  .id{
    width: 95px;
    height: 14px;
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: normal;
    text-align: left;
    margin-top: 15px;
    margin-left: 25px;
    position:absolute;
    color: #656565;
    white-space:pre;
  }
</style>

