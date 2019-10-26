<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">Menu</span>
        <ul>
          <li>
            <a>- klay 거래 내역 보기</a>
            <router-link to="/myklay" class="more1">더보기</router-link>
          </li>
          <li>
            <a>- 내 질문 모아보기</a>
            <router-link to="/myquestion" class="more">더보기</router-link>
          </li>
          <li>
            <a>- 내 답변 모아보기</a>
            <router-link to="/myanswer" class="more">더보기</router-link>
          </li>
          <li>
            <a>- like 누른 글 리스트</a>
            <router-link to ="/like_answer" class="more">더보기</router-link>
          </li>
          <li><router-link to="">
            <a @click="next">- 비밀번호 변경</a>
          </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../component/common/Header";
  import wallet_info from "../component/wallet/wallet_info";
  import apiClient from "../js/ApiClient";

  export default {
        name: "MyPage",
        components:{Header,wallet_info},
        methods:{
          next: function() {
            const vueObj = this;
            const email = this.$store.state.email;
            const session_id = this.$store.state.storeInput;
            apiClient.find_pw_auth_code(email, function (result, data) {
              if (result) {
                vueObj.$router.push('/change_pass');
              } else {
                alert(data);
              }
            });
            apiClient.logout(session_id, function (result, data) {
              if(result) {
                vueObj.$store.state.storeInput = null;
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
    margin-right: 800px;
    margin-top: 20px;
  }

  div ul {
    text-align: left;
    margin-left: 150px;

  }
  div ul li {
    /*width: 135px;*/
    height: 30px;
    font-family: "Nanum Gothic";
    font-size: 20px;
    /*font-weight: 800;*/
    font-style: normal;
    font-stretch: normal;
    /*line-height: 1.;*/
    letter-spacing: normal;
    /*margin-left: 200px;*/
    /*text-align: left;*/
    color: #383838;
  }

  .more
  {
    width: 31px;
    height: 15px;
    font-family: AppleSDGothicNeo;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: right;
    color: #2d44a3;
    margin-left: 30px;
  }

  .more1
  {
    width: 31px;
    height: 15px;
    font-family: AppleSDGothicNeo;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: right;
    color: #2d44a3;
    margin-left: 13px;
  }

  a:link{text-decoration: none; color:#383838;}
  a:visited{text-decoration: none; color:#383838;}
  a:active{text-decoration: none; color:#383838;}
  /*a:hover{text-decoration: none; color:#383838;}*/


</style>
