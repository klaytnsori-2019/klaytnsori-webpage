<template>
    
</template>

<script>
    export default {
      name: "empty2",
      watch: {

        addr: {
          immediate: true,
          handler() {
            this.$router.push('/detail_like');
          }
        }
      }
    }
</script>

<style scoped>

</style>
