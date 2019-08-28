
<template>
  <div id="login_page">
    <div class="content_area">
      <SignUpForm/>
    </div>
  </div>
</template>

<script>
  import SignUpForm from './../component/sign/SignUpForm_Success.vue'

  export default {
    name: "SignUpForm_Success",
    components: { SignUpForm }
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
