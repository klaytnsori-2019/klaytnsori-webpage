<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <div id="search_area">
        <form id="search_form">
          <span class="icon"><img src="./../assets/search.svg"></span>
          <input placeholder="검색어를 입력하세요">
        </form>
      </div>
      <div id="question_area">
        <div class="title_area">
          <span>질문 리스트</span>
        </div>
        <div class="cate_latest">
          <span>분류 </span>
          <span>최신순</span>
        </div>
        <ul>
          <li v-for="item in questions">
            <list-tile :title="item.question_title" :brief="item.question_content" :reward="item.klay" :date="item.time" :id="item.email" :index="item.question_num"></list-tile>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './../component/common/Header'
  import ListTile from '../component/main/MainListTile3'
  import apiClient from './../js/ApiClient.js';

  export default {
    name: "QuestionListChose",
    components: {
      Header,
      ListTile
    },
    data () {
      return {
        questions : null
      }
    },
    watch: {

      addr: {

        immediate:true,
        handler() {
          let def = 1;
          const question_state = this.$store.state.question_state;
          let vuecomp = this;
          apiClient.question_list(def = 1, question_state, function (result, data) {
            if (result) {
              vuecomp.questions = data;
              console.log(question_state);
            } else {
              alert(data);
            }
          });
        }
      }
    }
    //
    //   beforeRouteEnter (to, from, next) {
    //       next( vm => vm.fetchData() )
    //   },
    // methods:{
    //     fetchData: function () {
    //         let def = 0;
    //         const question_state = this.$store.state.question_state;
    //         let vuecomp = this;
    //         apiClient.question_list(def = 0, question_state, function (result, data) {
    //             if (result) {
    //                 vuecomp.questions = data;
    //             } else {
    //                 alert(data);
    //             }
    //         });
    //     }
    // }
  }
</script>

<style scoped>

  .contents_area {
    margin: auto;
    width: 1000px;
    text-align: center;
  }

  #search_area {
    position: relative;
    display: inline-block;
    height: 58px;
    margin-top: 58px;
  }

  #search_form {
    position: relative;
  }

  #search_area .icon {
    position: absolute;
    top: 50%;
    left: 0;
    margin-left: 17px;
    margin-top: 17px;
    z-index: 1;
    color: #4f5b66;
  }

  #search_area input {
    width: 436px;
    height: 54px;
    background: #d1d1d1;
    border: solid 1px #a5a5a5;
    font-family: NanumGothic;
    font-size: 15px;
    float: left;
    color: black;
    padding-left: 59px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .title_area {
    text-align: left;
    margin-left: 65px;
    margin-top: 52px;
  }
  .cate_latest{
    width: auto;
    height: auto;
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: right;
    color: #656565;
    margin-right: 50px;

  }
</style>
