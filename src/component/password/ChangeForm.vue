<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <div class="message">

        <span>{{this.$store.state.email}}님</span>
        <br>
        코드와 새로운 비밀번호를 입력하세요
        <br>
        <br>
      </div>
      <input id='code' placeholder="code">
      <input id='password_input' placeholder="password" type="password">
      <input id='password_confirm' placeholder="password confirm" type="password">
      <button id="login_button" @click="next">다음</button>
    </div>
  </div>
</template>

<script>
  import apiClient from './../../js/ApiClient.js';
  export default {
    name: "ChangeForm",
    methods: {
      next: function () {
        const authorize_text = document.getElementById('code').value;
        const password = document.getElementById('password_input').value;
        const password_check= document.getElementById('password_confirm').value;
        const email = this.$store.state.email;
        if (password !==  password_check || !password) {
          alert('비밀번호를 다시 확인해주세요');
        }
        var vueObj = this;
        apiClient.find_pw_auth_identity(authorize_text, password, email, function (result, data) {
          if (result) {
            vueObj.$store.state.storeInput = null;
            vueObj.$router.push('/login');
          } else {
            alert(data);
          }
        })
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
    margin-bottom: 20px;
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
