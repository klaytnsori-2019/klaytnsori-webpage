<template>
    <div id="login_form">
        <div class="form_wrapper">
            <img id='main_logo' src='./../../assets/main_logo.svg'>
            <input id='email_input' placeholder="email">
            <input id='password_input' placeholder="password" type="password">
            <button id="login_button" @click="login">로그인</button>
            <br>
            <a id="find_password">비밀번호 찾기</a>
            <br>
            <router-link to="sign_up"><span>회원가입</span></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login_form",
        methods: {
            login: function () {
                const email = document.getElementById('email_input').value;
                const password = document.getElementById('password_input').value;
                this.$router.push('/main');
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

</style>
