<template>
  <div class="answer_list_tile">
    <span class="heart"><img src=./../../assets/heart.svg><span class="like">{{like_count}}</span></span>
    <div class="detail">{{detail}}</div>
  </div>
</template>

<script>
  import apiClient from './../../js/ApiClient.js';

  export default {
    name: "mylikeanswer",
    props: [
      "title",
      "answer_content",
      "like_count"
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

  .like {
    width: 10px;
    height: 9px;
    font-family: NanumGothic;
    font-size: 11px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ff0000;
    margin-left: 5px;
  }

  .heart{
    text-align:left;
    margin-right: 0px;
    margin-left:40px;
    object-fit: contain;

  }

</style>
