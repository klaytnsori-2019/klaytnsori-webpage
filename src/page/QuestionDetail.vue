<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <div id="question_area">
        <div class="title_area">
          <span>질문</span>
        </div>
        <ul>
          <list-tile :title="question[0].question_title" :detail="question[0].question_content" :reward="question[0].klay" :date="question[0].time" :id="question[0].question_email"></list-tile>
        </ul>
      </div>

      <div id="answer_area">
        <div class="title_area">
          <span>답변</span>
        </div>
        <ul>
          <li v-for="item in question">
            <answer-tile :detail="item.answer_content" :id="item.answer_email"></answer-tile>
          </li>
        </ul>
      </div>
      <textarea id="contents" v-model="message" placeholder="답변을 입력해 주세요"></textarea>
    </div>
    <button @click = "insert" tag="button" id="reg" class="btn"><span>등록</span></button>
  </div>
</template>

<script>

  import Header from './../component/common/Header'
  import ListTile from '../component/question_detail/QuestionDetailQTile'
  import AnswerTile from '../component/question_detail/QuestionDetailATile'
  import apiClient from './../js/ApiClient.js';

  export default {
    name: "QuestionDetail",
    components: {
      Header,
      ListTile,
      AnswerTile
    },
    data() {
      return {
        question: {},

      }
    },
    watch: {

      addr: {
        immediate:true,
        handler() {
          const index = this.$store.state.index;
          let vuecomp = this;
          apiClient.show_question(index, function (result, data) {
            if (result) {
              vuecomp.question = data;
              console.log(data);
            } else {
              alert("질문이 없습니다.");
            }
          });
        }
      }
    },
    methods: {
        insert: function () {
        const session_id = this.$store.state.storeInput;
        const question_id = this.$store.state.index;
        const answer_content = document.getElementById('contents').value;
        var vueObj = this;
        apiClient.insert_answer(question_id, session_id, answer_content, function(result, data) {
          if(result) {
            vueObj.$router.push('/empty');
          } else {
            alert(data);
          }
        });
      }
    }

  }

</script>

<style scoped>

  .contents_area {
    margin: auto;
    width: 1000px;
    text-align: center;
  }

  .title_area {
    text-align: left;
    margin-left: 65px;
    margin-top: 52px;
  }

  #contents {
    /*position: absolute;*/
    /*margin-top: 10px;*/
    /*margin-left: 600px;*/
    width: 850px;
    height: 170px;
    background: white;
    border: solid 1px #a5a5a5;
    font-family: NanumGothic;
    font-size: 10px;
    /*float: left;*/
    color: black;
    padding-top: 10px;
    padding-left: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  #reg {
    position: absolute;
    /*margin-left: 930px;*/
    width: 60px;
    height: 30px;
    float: right;
    color: white;
    background-color: #4695d9;
    text-align: center;
    margin-top: -35px;
    margin-left: 1200px;

  }

</style>
