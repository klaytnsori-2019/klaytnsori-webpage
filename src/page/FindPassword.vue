<template>
  <div id="login_page">
    <div class="content_area">
      <FindForm/>
    </div>
  </div>
</template>

<script>
  import FindForm from './../component/password/FindForm.vue'

  export default {
    name: "FindPassword",
    components: { FindForm },

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

