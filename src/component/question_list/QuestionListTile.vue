<template>
    <router-link to="/detail_q">
      <div class="main_list_tile" @click="show_question">
        <span class="title">{{title}}</span>
        <span class="id">{{id}}</span>
        <div class="brief">{{brief}}</div>
        <span class="date">{{date}}</span>
        <span class="reward">보상 : {{reward}} klay</span>
      </div>
    </router-link>

</template>

<script>
    import apiClient from './../../js/ApiClient.js';

    export default {
    name: "QuestionListTile",
    props: [
      "title",
      "brief",
      "reward",
      "index",
      "date",
      "id"
    ],
      methods: {
          show_question: function () {
              const vueObj = this;
              vueObj.$store.state.index = this.index;
              console.log(this.index);
          }
      }
  }
</script>

<style scoped>
  .main_list_tile {
    margin: 10px auto;
    width: 861px;
    height: 100px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

  .title {
    display: inline-block;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #717171;
    margin-left: 23px;
    line-height: 58px;
    white-space:pre;
  }

  .brief{
    width: auto;
    height: 48px;
    font-family: NanumGothic;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.42;
    letter-spacing: normal;
    color: #9b9b9b;
    margin-top: 70px;
    margin-left: 25px;
    white-space:pre;
    text-align: left;
    /*position:absolute;*/
  }

  .reward {
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    /*text-align: left;*/
    color: #5d5d5d;
    width: 110px;
    margin-top: 60px;
    margin-left:50px;
    margin-right: 20px;

  }
  .date{
    width: 110px;
    height: 14px;
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: right;
    color: #656565;
    margin-top: 60px;
    margin-left:-300px;
    margin-right: -30px;
  }

  .id{
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: right;
    color: #656565;
    margin-top: 20px;
    margin-left: 660px;
  }

</style>
