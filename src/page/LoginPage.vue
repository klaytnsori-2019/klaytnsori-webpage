<template>
  <div id="login_page">
        <div class="content_area">
          <login-form/>
        </div>
    </div>
</template>

<script>
    import loginForm from './../component/login/LoginForm.vue'

    export default {
        name: "login_page",
        components: { loginForm }
    }
</script>

<style scoped>
    .content_area {
        background: white;
        display: table;
        width: 100%;
        height: -webkit-fill-available;
        text-align: center;
    }
</style>
