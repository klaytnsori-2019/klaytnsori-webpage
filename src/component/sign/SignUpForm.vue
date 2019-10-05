<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <input id='email_input' placeholder="email">

      <router-link to="" ><span id="check" @click="check_email"><br>중복체크</span></router-link>
      <input id='password_input' placeholder="password" type="password">
      <input id='password_confirm' placeholder="password confirm" type="password">
      <input id='nickname' placeholder="nickname">
      <button id="login_button" @click="signup">다음</button>
    </div>
  </div>
</template>

<script>
  import apiClient from './../../js/ApiClient.js';

  export default {
      name: "SignUpForm",
      methods: {
        check_email: function () {
          const email = document.getElementById('email_input').value;
          apiClient.check_email( email, function (result, data) {
              if (result) {
                alert("이 Email은 사용가능합니다!");
              }
              else {
                alert("이 Email은 사용중입니다!");
              }
          })
        },
        signup: function () {
          const email = document.getElementById('email_input').value;
          const nickname = document.getElementById('nickname').value;
          const password = document.getElementById('password_input').value;
          const passwordconf = document.getElementById('password_confirm').value;
          var vueObj = this;
          if (password !== passwordconf || !password) {
            alert('비밀번호를 다시 확인해주세요');
          } else {
            apiClient.signup(email, password, nickname, function (result, data) {
              if (result) {
                vueObj.$store.state.storeInput = email;
                vueObj.$router.push('/sign_up2');
              } else {
                alert(data);
              }
            })
          }
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
    height: 650px;
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

  #check{
    display: inline-block;
    width: 70px;
    height: 53px;
    border-radius: 5px;
    border: solid 1px #afafaf;
    background-color: lightgrey;
    font-size: 13px;
    padding-top: 0px;
    text-align:center;
    z-index: 1;
    position: absolute;
    margin-left: 342px;
    margin-top: -80px;
  }
  :visited{
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  .router-link :visited{
    color: white;
    background-color: transparent;
    text-decoration: none;
  }
</style>
