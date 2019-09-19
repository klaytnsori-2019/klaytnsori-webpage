<template>
  <div id="login_page">
    <div class="content_area">
      <Sign-Up-form2/>
    </div>
  </div>
</template>

<script>
  import SignUpForm2 from './../component/sign/SignUpForm2.vue'

  export default {
    name: "SignUp2",
    components: { SignUpForm2 },
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
