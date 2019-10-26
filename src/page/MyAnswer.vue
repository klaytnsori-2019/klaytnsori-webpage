<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My answer</span>
        <div id="contents">
          <ul>
            <li v-for="item in myanswer">
              <myquestion :title="item.question_title" :contents="item.answer_content" :is_selected="item.is_selected" :index="item.question_num" ></myquestion>
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
    import myquestion from "../component/question_list/MyQuestionListTile";
    import apiClient from './../js/ApiClient.js';


    export default {
        name: "MyAnswer",
        components:{Header,wallet_info,myquestion},
        data() {
            return {
                myanswer: {}
            }
        },
        watch: {

            addr: {

                immediate:true,
                handler() {
                    const session_id = this.$store.state.storeInput;
                    let vuecomp = this;
                    apiClient.my_answer_list(session_id, function (result, data) {
                        if (result) {
                            vuecomp.myanswer = data;
                            console.log(data);
                        } else {
                            alert("내가 등록한 답변이 없습니다.");
                        }
                    });
                }
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
    margin-right: 760px;
    margin-top: 20px;
  }

  #contents {
    margin : 20px auto;
  }
</style>
