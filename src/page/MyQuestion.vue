<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My Question</span>
        <div id="contents">
          <ul>
            <li v-for="item in like_item">
              <main-list-tile :title="item.title" :reward="item.reward"></main-list-tile>
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
    import MainListTile from "../component/main/MainListTile";

    export default {
        name: "MyQuestion",
        components:{Header,wallet_info,MainListTile},
        data: () => {
            return {
                like_item: like_item
            }
        }
    }

    let like_item = [
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 10},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 20},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 30},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", reward: 40},
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
    margin-right: 742px;
    margin-top: 20px;
  }


  #contents {
    margin : 20px auto;
  }
</style>
