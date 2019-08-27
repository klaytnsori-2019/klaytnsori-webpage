<template>
  <div id="login_page">
    <div class="content_area">
      <sign-Up-form/>
    </div>
  </div>
</template>

<script>
  import signUpForm from './../component/sign/SignUpForm.vue'

  export default {
    name: "SignUp",
    components: { signUpForm }
  }
</script>

<style scoped>
  .content_area {
    background: white;
    display: table;
    width: 100%;
    text-align: center;
  }
</style>
