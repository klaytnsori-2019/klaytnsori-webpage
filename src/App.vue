<template>
  <div id="app">
    <div id="page_area">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./component/common/Footer";

export default {
  name: 'app',
  components: {Footer},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
  #app {
    position: relative;
  }

  #page_area {
    padding-bottom:82px;
  }

  body {
    margin: 0;
    background: #efefef;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style: none;
  }
</style>
