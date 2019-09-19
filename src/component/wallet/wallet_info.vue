<template>
  <div>
    <div id="title_name">
      <a>My Page</a>
    </div>
    <div id="wallet_id">
      <span class="wallet">Wallet Address</span>
      <span class="wallet_addr">ABCD123456789</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wallet_info"
    }
</script>

<style scoped>
  #title_name {
    margin-top: 30px;
    margin-right: 780px;
    font-family: "Nanum Gothic";
    font-size: 20px;
    color: #5d5d5d;
  }
  /* wallet info */
  #wallet_id {
    margin: 20px auto;
    width: 861px;
    height: 58px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;

  }

  .wallet {
    display: inline-block;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #717171;
    margin-left: 23px;
    line-height: 58px;
  }

  .wallet_addr {
    font-family: NanumGothic;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.17;
    text-align: right;
    color: #5d5d5d;
    margin-top: 18px;
    margin-right: 40px;
  }
</style>
