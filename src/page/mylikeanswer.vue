<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My Question</span>
        <div id="contents">
          <ul>
            <li v-for="item in my_questions">
              <question-list-tile :title="item.question_title" :answer_content="item.answer_content" :like_count="item.like_num"></question-list-tile>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../component/common/Header";
  import wallet_info from "../component/wallet/wallet_info";
  import QuestionListTile from "../component/question_list/mylikeanswer";
  import apiClient from './../js/ApiClient.js';

  export default {
    name: "mylikeanswer",
    components:{Header,wallet_info,QuestionListTile},

    data () {
      return {
        my_questions : null
      }
    },
    beforeRouteEnter (to, from, next) {
      next( vm => vm.fetchData() )
    },
    methods:{
      fetchData: function () {
        const session_id = this.$store.state.storeInput;
        let vuecomp = this;

        apiClient.my_like_list(session_id, function (result, data) {
          if (result) {
            vuecomp.my_questions = data;
            console.log(data);
          } else {
            alert("내가 등록한 답변이 없습니다.");
          }
        });
      }
    }
  }
</script>

<style scoped>

  .contents_area {
    margin: auto;
    /*position: relative;*/
    text-align: center;
    width:1000px;
  }

  #menu {
    font-family: "Nanum Gothic";
    font-size: 20px;
    color: #5d5d5d;
    margin-right: 742px;
    margin-top: 20px;
  }


  #contents {
    margin : 20px auto;
  }
</style>
