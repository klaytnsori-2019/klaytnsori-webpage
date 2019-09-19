<template>
  <router-link :to="'/question_detail/' + index">
    <div  v-bind:class="[sells ? 'addd' : 'subbb', 'nnn']">
      <div class="title">{{title}}</div>
      <div class="reward">보상 : {{reward}} klay</div>
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
            "buys"
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
    margin-top: 29px;
    margin-right: 31px;
  }

  .addd .reward {
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: blue;
    margin-top: 29px;
    margin-right: 31px;
  }

  .subbb.nnn .reward{
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: red;
    margin-top: 29px;
    margin-right: 31px;
  }
</style>
