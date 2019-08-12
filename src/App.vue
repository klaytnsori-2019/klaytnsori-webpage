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
import SamplePage from "./page/SamplePage";
import MainPage from "./page/MainPage";


export default {
  name: 'app',
  components: {MainPage, Footer,SamplePage},
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
    min-height: 100%;
  }

  #page_area {
    min-height: 100%;
    padding-bottom:82px;
  }

  html, body {
    height: 100%;
    width: 100%;
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
