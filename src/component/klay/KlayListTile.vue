<template>
  <router-link :to="'/question_detail/' + index">
<!--    <div  v-bind:class="[sells ? 'addd' : 'subbb']">-->
<!--      <div class="title">{{times}}</div>-->
<!--      <div class="reward">{{reward}} klay</div>-->
<!--    </div>-->
    <div v-if="sells === true" class="addd">
      <div class="title">{{times}}</div>
      <div class="contents">질문 채택으로 클레이튼 받음</div>
      <div class="reward">{{reward}} klay</div>
    </div>
    <div v-else class="subbb">
      <div class="title">{{times}}</div>
      <div class="contents">질문 등록으로 클레이튼 보냄</div>
      <div class="reward">{{reward}} klay</div>
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "KlayListTile",
        props: [
            "title",
            "reward",
            "index",
            "sells",
            "buys",
            "times"
        ]
    }
</script>

<style scoped>
  .subbb {
    margin: 10px auto;
    width: 861px;
    height: 58px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

  .addd {
    margin: 10px auto;
    width: 861px;
    height: 58px;
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
  }

  .subbb .reward {
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: red;
    margin-top: 20px;
    margin-right: 31px;
  }

  .addd .reward {
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: blue;
    margin-top: 20px;
    margin-right: 31px;
  }

  .subbb.nnn .reward{
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: red;
    margin-top: 20px;
    margin-right: 31px;
  }

  .contents {
    display: inline-block;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #717171;
    line-height: 58px;
  }
</style>
