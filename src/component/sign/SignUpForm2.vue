<template>
  <div id="login_form">
    <div class="form_wrapper">
      <img id='main_logo' src='./../../assets/main_logo.svg'>
      <input id='code' placeholder="code">
      <button id="login_button" @click="authorize_signup">회원가입</button>
    </div>
  </div>
</template>

<script>
  import apiClient from './../../js/ApiClient.js';

  export default {
    name: "SignUpForm2",
    methods: {
        authorize_signup: function (){
          const email = this.$store.state.storeInput;
          const authorize_text = document.getElementById('code').value;
          var vueObj = this;
          apiClient.authorize_signup(email, authorize_text, function (result, data) {
            if (result) {
              vueObj.$store.state.storeInput = null;
              vueObj.$router.push('/sign_up_suc');
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
    margin-left: 342px;
    margin-bottom: 0px;
    margin-top: -81px;
    z-index: 1;
    position: absolute;
  }
  :visited{
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
</style>
