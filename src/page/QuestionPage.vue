<template>
    <div id="main_page" class="page">
        <Header></Header>
        <div class="contents_area">
          <div id="title_name">
            새 질문 등록
          </div>
          <form id="search_form">
            <div>
              <input id="question_title" v-model="message" placeholder="제목">
            </div>
              <div>
                <select v-model="selected" class="category">
                  <option disabled value="대분류">분류를 선택하세요</option>
                  <option v-for="item in cat" v-bind:value="item.category_num">
                    {{item.category}}
                  </option>
                </select>
                <span id="cate" style="display:none"> {{ selected }} </span>
              </div>
              <div id="klay_input">
                <ul>
                  <li>
                    <a><input id="question_klay" placeholder="보상"></a>
                    <a>klay</a>
                    <a><div @click="register"><router-link to="" tag="button" id="reg" class="btn">등록</router-link></div></a>
                    <a><router-link to="/main" tag="button" id="cancel" class="btn">취소</router-link></a>
                  </li>
                </ul>
              </div>
              <div>
                <textarea id="contents" v-model="message" placeholder="내용을 입력해 주세요"></textarea>
              </div>
          </form>
        </div>
    </div>
</template>

<script>

    import Header from './../component/common/Header'
    import ListTile from './../component/main/MainListTile'
    import apiClient from './../js/ApiClient.js';

    export default {
        name: "MainPage",
        components: {
            Header,
            ListTile
        },

      data () {
          return {
            selected: 0,
            cat : []
        }
    },
    beforeRouteEnter (to, from, next) {
        next( vm => vm.fetchData() )
    },
    methods:{
        fetchData: function () {
            let vuecomp = this;
            apiClient.category(function (result, data) {
                if (result) {
                    console.log(data);
                    vuecomp.cat = data;
                } else {
                    // console.log(result)
                    alert(data);
                }
            });
        },
        register: function () {
            const session_id = this.$store.state.storeInput;
            const question_title = document.getElementById('question_title').value;
            const question_klay = document.getElementById('question_klay').value;
            const question_content = document.getElementById('contents').value;
            const category = document.getElementById('cate').innerText;
            let vueObj = this;
            apiClient.insert_question(session_id, question_title, question_klay, question_content, category,function(result, data) {
              if(result) {
                vueObj.$store.state.index = data.question_id;
                vueObj.$router.push('/detail_q');
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
        /*position: relative;*/
        text-align: center;
        width:1000px;

    }

    /* 새질문 등록 */
    #title_name {
      /*width: 105px;*/
      /*height: 23px;*/
      font-family: NanumGothic;
      font-size: 20px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.15;
      letter-spacing: normal;
      /*text-align: left;*/
      color: #656565;
      margin-right: 385px;
      padding-top: 50px;
    }

    /* 제목 입력 칸*/
    #question_title {
      /*position: absolute;*/
      margin-top: 20px;
      /*margin-left: 600px;*/
      width: 470px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 10px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 카테고리 선택 칸*/
    .category {
      /*position: absolute;*/
      margin-top: 20px;
      /*margin-left: 600px;*/
      width: 490px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 59px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 클레이 입력 칸*/
    a input {
      /*position: absolute;*/
      display: inline-block;
      margin-right: 380px;
      width: 30px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 0px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 질문 내용 입력 칸 */
    #contents {
      /*position: absolute;*/
      margin-top: 10px;
      /*margin-left: 600px;*/
      width: 480px;
      height: 300px;
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

    /* 등록 버튼 */
    #reg {
      /*position: absolute;*/
      /*margin-top: 20px;*/
      margin-left: 620px;
      margin-right: 10px;
      width: 60px;
      height: 30px;
      float: left;
      color: white;
      background-color: #4695d9;
    }

    /* 취소 버튼 */
    #cancel {
      /*position: absolute;*/
      /*margin-left: 930px;*/
      width: 60px;
      height: 30px;
      float: left;
      float: left;
      color: white;
      background-color: #4695d9;
      text-align: center;
    }

    #question_klay {
      /*position: static;*/
      text-align: left;
      left: 200px;
      margin-right: 10px;
      width: 200px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 10px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    #klay_input{
      margin-right: 230px;
    }

</style>
