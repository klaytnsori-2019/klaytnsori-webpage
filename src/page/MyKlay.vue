<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My klay</span>
        <div id="contents">
          <ul>
            <li v-for="item in like_item">
              <klay-list-tile :buys="item.buy" :sells="item.sell" :title="item.title" :reward="item.reward"></klay-list-tile>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "../component/common/Header";
    import wallet_info from "../component/wallet/wallet_info";
    import KlayListTile from "../component/klay/KlayListTile";

    export default {
        name: "MyKlay",
        components:{Header,wallet_info,KlayListTile},
        data: () => {
            return {
                like_item: like_item
            }
        }
    }

    let like_item = [
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 10, sell:true},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 20, sell:false},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 30, sell:false},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 40, sell:false},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 50}

    ];

</script>

<style scoped>

  .contents_area {
    margin: auto;
    /*position: relative;*/
    text-align: center;
    width:1000px;
  }


  #menu {
    font-family: "Nanum Gothic";
    font-size: 20px;
    color: #5d5d5d;
    margin-right: 790px;
    margin-top: 20px;
  }

  #contents {
    margin : 20px auto;
  }

  #addd .reward {
    color : blue;
  }

  #subb .reward {
    color : red;
  }


</style>
