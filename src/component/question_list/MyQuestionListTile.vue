<template>

    <div class="main_list_tile">
      <div class="title">{{title}}</div>
      <div class="contents">{{contents}}</div>
      <div v-show="is_selected" class="like_block">
        <span class="choose">채택완료</span>
      </div>
    </div>

</template>

<script>
    export default {
        name: "QuestionListTile",
        props: [
            "title",
            "contents",
            "is_selected",
            "index",

        ],
      data() {
        return {
          is_selected
        }
      },
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
    display: block;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #717171;
    margin-left: 23px;
    line-height: 58px;
    white-space:pre;
    position:absolute;
  }

/*  .heart {*/
/*    margin-right: 55px;*/
/*    margin-top: 32px;*/

/*}*/

  .contents{
    display: block;
    /*width: 157px;*/
    /*height: 34px;*/
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #9b9b9b;
    margin-top: 49px;
    margin-left: 23px;
    white-space: pre-line;

  }

  #hearts {
    width : 40px;
    height: 40px;
    margin-right: 40px;
    margin-top: 30px;
  }

  #non-heart {
    width : 40px;
    height: 40px;
    margin-right: 40px;
    margin-top: 30px;
  }
  .like_block{

    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #4695d9;
    display: inline-block;
    margin-left: 100px;
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
    margin-top:45px;
    color: #ffffff;
  }

</style>
