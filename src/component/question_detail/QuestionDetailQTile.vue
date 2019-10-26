<template>
  <div class="main_list_tile">
    <div class="id">{{id}}</div>
    <div class="title">{{title}}</div>
    <span class="date">{{date}}</span>
    <span class="reward">보상 : {{reward}} klay</span>
    <div class="detail">{{detail}}</div>
    </div>
</template>

<script>
  export default {
    name: "QuestionDetailQTile",
    props: [
      "title",
      "detail",
      "reward",
      "index",
      "date",
      "id",
      "question_email"
    ]
  }
</script>

<style scoped>
  .main_list_tile {
    margin: 10px auto;
    width: 861px;
    height: 350px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
  }
  .title {
    width: 296px;
    height: 17px;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #717171;
    white-space:pre;
    margin-top:45px;
    margin-left:25px;
  }

  .detail{
    width: 800px;
    height: 48px;
    font-family: NanumGothic;
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    color: #9b9b9b;
    margin-top: 150px;
    margin-left:25px;
    white-space:pre;
    position:absolute;
  }

  .reward {
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: #5d5d5d;
    width: 110px;
    white-space:pre;
    margin-top: 60px;
    margin-right:20px;
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
  .date{
    font-family: NanumGothic;
    font-size: 10px;
    font-weight: normal;
    text-align: left;
    margin-top: 70px;
    margin-left:25px;
    color: #656565;
    position:absolute;
  }
</style>
