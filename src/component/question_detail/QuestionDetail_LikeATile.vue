<template>
  <div class="answer_list_tile">
    <span class="id">{{id}}<span class="heart"><img src=./../../assets/heart.svg><span class="like">{{like}}</span>
      </span>
        </span>
    <div class="detail">{{detail}}</div>
    <div class="like_block" @click="insert_like">
      <span class="heart_white"><img src=./../../assets/heart_white.svg></span>
    </div>
  </div>
</template>

<script>

  import apiClient from "../../js/ApiClient";

  export default {
    name: "QuestionDetail_LikeATile",
    props: [
      "detail",
      "index",
      "id",
      "like",
      "answer_index"
    ],
    methods: {
      insert_like: function () {
        const session_id = this.$store.state.storeInput;
        const question_id = this.$store.state.index;
        const answer_id = this.answer_index;
        const vueObj = this;
        apiClient.insert_like(session_id, question_id, answer_id, function (result, data) {
          if (result) {
            vueObj.$router.push('/empty2');
          } else {
            alert(data);
          }
        });
      }
    }
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

  .like_block{
    margin: auto;
    width: 120px;
    height: 150px;
    border-radius: 10px;
    background-color: red;
    display: inline-block;
  }

  .heart_white{
    text-align:center;
    margin-top:65px;
    width: 23px;
    height: 21px;
    object-fit: contain;
    display: inline-block;
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
