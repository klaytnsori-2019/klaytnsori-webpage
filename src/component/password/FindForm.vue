<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <div class="message">
        가입하신 이메일을 입력하세요
      </div>
      <input id="email_input" type="text" v-model="txtInput" placeholder="email">
      <button id="login_button" @click="next">다음</button>
    </div>
  </div>
</template>

<script>
  import apiClient from './../../js/ApiClient.js';
  export default {
    name: "FindForm",

    data() {
      return {
        txtInput: null
      }
    },
    methods: {
      next: function () {
        this.$store.commit('transferString', this.txtInput);
        const email = document.getElementById("email_input").value;
        if (!email) {
          alert('이메일을 다시 확인해주세요');
        }
        var vueObj = this;
        apiClient.find_pw_auth_code(email, function (result, data) {
          if (result) {
            vueObj.$router.push('/change_pass');
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
    margin-bottom: 25px;
    margin-top: 100px;
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


