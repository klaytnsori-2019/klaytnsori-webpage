<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My klay</span>
        <div id="contents">
          <ul>
            <li v-for="item in transaction">
              <klay-list-tile :times="item.timestamp" :sells="item.isReceived" :reward="item.value"></klay-list-tile>
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
    import apiClient from './../js/ApiClient.js';


    export default {
        name: "MyKlay",
        components:{Header,wallet_info,KlayListTile},
        data() {
            return {
                transaction: {}
            }
        },
        watch: {

            addr: {

                immediate:true,
                handler() {
                    const session_id = this.$store.state.storeInput;
                    let vuecomp = this;
                    apiClient.transaction(session_id, function (result, data) {
                        if (result) {
                            vuecomp.transaction = data;
                            console.log(data);
                        } else {
                            alert("내가 수행한 트랜젝션이 없습니다.");
                        }
                    });
                }
            }
        }
    }

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
