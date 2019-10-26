<template>
  <div id="login_page">
    <div class="content_area">
      <ChangeForm/>
    </div>
  </div>
</template>

<script>
  import ChangeForm from './../component/password/ChangeForm.vue'

  export default {
    name: "ChangePassword",
    components: { ChangeForm }

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

