<template>

</template>

<script>
    export default {
      name: "empty",
      watch: {

        addr: {
          immediate: true,
          handler() {
            this.$router.push('/detail');
          }
        }
      }
    }
</script>

<style scoped>

</style>
