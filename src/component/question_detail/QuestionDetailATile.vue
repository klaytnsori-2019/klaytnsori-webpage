<template>
    <div class="answer_list_tile">
      <div class="id">{{id}}</div>
      <div class="detail">{{detail}}</div>
    </div>
</template>

<script>
  export default {
    name: "QuestionDetailATile",
    props: [
      "detail",
      "index",
      "id"
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
