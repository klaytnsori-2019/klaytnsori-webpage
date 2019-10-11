<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <div class="message">
        가입이 완료되었습니다.
        <br>
        다시 로그인하세요
      </div>
      <input id='email_input' placeholder="email">
      <input id='password_input' placeholder="password" type="password">
      <button id="login_button" @click="login">로그인</button>
      <br>
      <div id="find_password"><router-link to="find_pass"><span>비밀번호찾기</span></router-link></div>
      <br>
      <router-link to="sign_up"><span>회원가입</span></router-link>
    </div>
  </div>
</template>

<script>

  import apiClient from './../../js/ApiClient.js';

  export default {
    name: "SignUpForm_Success",
    methods: {
      login: function () {
        const email = document.getElementById('email_input').value;
        const password = document.getElementById('password_input').value;
        var vueObj = this;
        apiClient.login(email, password,function(result, data) {
          if(result) {
            vueObj.$store.state.storeInput = data.session_id;
            vueObj.$router.push('/main');
            console.log(data.session_id);

          } else {
            alert(data);
          }
        });
      }
    }
  }
</script>

<style scoped>
  #login_form {
    display: table-cell;
    vertical-align: middle;
  }

  .form_wrapper {
    width: 582px;
    height: 617px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    text-align: center;
    margin: auto;
  }

  #main_logo {
    margin-top: 84px;
    margin-bottom: 79px;
  }

  input {
    display: inline-block;
    width: 364px;
    height: 53px;
    border-radius: 5px;
    border: solid 1px #afafaf;
    background-color: #e6e6e6;
    font-size: 20px;
    padding: 0 24px;
    margin-bottom: 26px;
  }

  #login_button {
    display: inline-block;
    width: 413px;
    height: 66px;
    margin-top: 9px;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #4695d9;

    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    color: #ffffff;
  }

  #find_password {
    margin-bottom: 45px;
    display: inline-block;
  }

  a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

   .message {
     font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #b1b1b1;
    margin-top: -35px;
   }
</style>

