<template>
  <router-link to="/detail_like">
    <div  class="main-list-tile" @click="show_question">
      <div class="title">{{title}}</div>
      <div class="reward">보상 : {{reward}} klay</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "MainListTile2",
    props: [
      "title",
      "reward",
      "index"
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
  .main-list-tile {
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



  .reward{
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: #5d5d5d;
    margin-top: 29px;
    margin-right: 31px;
  }
</style>
