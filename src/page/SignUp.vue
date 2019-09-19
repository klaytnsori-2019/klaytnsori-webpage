<template>
  <div id="login_page">
    <div class="content_area">
      <Sign-Up-form/>
    </div>
  </div>
</template>

<script>
  import SignUpForm from './../component/sign/SignUpForm.vue'

  export default {
    name: "SignUp",
    components: { SignUpForm },
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
