<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <input id='email_input' placeholder="email">
      <input id='password_input' placeholder="password" type="password">
      <input id='password_confirm' placeholder="password confirm" type="password">
      <input id='nickname' placeholder="nickname">
      <button id="login_button" @click="sign_up">회원가입</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SignUpForm",
      methods: {
        sign_up: function () {
          const email = document.getElementById('email_input').value;
          const password = document.getElementById('password_input').value;
          const nickname = document.getElementById('nickname').value;
          this.$router.push('/sign_up_suc');
          apiClient.signup(email, password, nickname, function(result, data) {
              if(result) {
                  this.$router.push('/sign_up_suc');
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

</style>
