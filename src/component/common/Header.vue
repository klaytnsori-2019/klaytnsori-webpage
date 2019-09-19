<template>
    <header>
        <div class="content_area">
            <router-link to="main"><img id='logo' src="./../../assets/logo.svg"></router-link>
            <div class="menu_area">
                <div class="menu">
                    <router-link to="register_question"><span>질문하기</span></router-link>
                    <span>/</span>
                  <span>질문보기
                  <ul>
                    <router-link to="question_list"><li>답변 진행중</li></router-link>
                    <router-link to="question_list"><li>Like 진행중</li></router-link>
                      <router-link to="question_list"><li>답변 완료</li></router-link>
                  </ul>
                  </span>

                  </div>
                <div class="klay_area">
                    <span class="description">나의 Klay</span>
                    <span class="value">{{ klay }}</span>
                </div>
                <div class="sub_menu">
                    <router-link to="mypage"><div class="sub_btn">마이페이지</div></router-link>
                    <div class="line"></div>
<<<<<<< HEAD
                    <router-link to=""><div class="sub_btn" @click="logout">로그아웃</div></router-link>
=======
                  <router-link to="" ><div class="sub_btn" @click="logout">로그아웃</div></router-link>
>>>>>>> master
                </div>
            </div>
        </div>
    </header>
</template>
<script>
<<<<<<< HEAD
    import apiClient from './../../js/ApiClient.js';

    export default {
        name: "Header",
        data () {
            return {
                klay : null
            }
        },
        beforeRouteEnter (to, from, next) {
            next( vm => vm.fetch() )
        },
        methods: {
            logout: function () {
                const session_id = this.$store.state.storeInput;
                console.log(session_id);
                let vueObj = this;
                apiClient.logout(session_id, function (result, data) {
                    if (result) {
                        vueObj.$router.push('/login');
                    }
                    else {
                        alert(data);
                    }
                });
                this.$store.state.storeInput = null;
            },

            fetch: function () {
                const session_id = this.$store.state.storeInput;
                console.log("1123")
                console.log(session_id);
                let vueObj = this;
                apiClient.remainklay(session_id, function (result, data) {
                    if (result) {
                        // vueObj.$router.push('/login');
                        vueObj.klay = data;
                        console.log(data.klay)
                    }
                    else {
                        alert(data);
                    }
                });
            }
        }
=======
  import apiClient from './../../js/ApiClient.js';

  export default {
    name: "Header",
    methods: {
      logout: function () {
        const session_id = this.$store.state.storeInput;
        console.log(session_id);
        var vueObj = this;
        apiClient.logout(session_id, function (result, data) {
          if (result) {
            vueObj.$store.state.storeInput = null;
            vueObj.$router.push('/login');
          }
          else {
            alert(data);
          }
        });
      }
>>>>>>> master
    }
  }
</script>

<style scoped>
    header {
        height: 115px;
        width: 100%;
        background: white;
    }

    .content_area {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 1000px;
    }

    #logo {
        margin-top:27px;
        margin-left: 33px;
    }

    a {
        text-decoration: none;
    }

    .menu {
        display: inline-block;
        margin-top: 66px;
    }

    .menu span {
        font-family: NanumGothic;
        font-size: 15px;
        font-weight: bold;
        line-height: 1.13;
        text-align: left;
        color: #5d5d5d;
        vertical-align: top;
        margin-left: 17px;
        position: relative;
    }

    .klay_area {
        display: inline-block;
        margin-left: 48px;
        margin-top: 33px;
        height: 82px;
        width: 160px;
        background: #fdd800;
        vertical-align: top;
        text-align: center;
    }

    .klay_area .description {
        display: block;
        font-family: NanumGothic;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.17;
        color: #5d5d5d;
        margin-top: 18px;
    }

    .klay_area .value {
        display: block;
        font-family: NanumGothic;
        font-size: 17px;
        font-weight: 800;
        line-height: 1.18;
        color: #383838;
        margin-top: 10px;
    }

    .sub_menu {
        width: 114px;
        display: inline-block;
        vertical-align: bottom;
    }

    .sub_menu div.sub_btn {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-family: NanumGothic;
        font-size: 12px;
        font-weight: bold;
        color: #5d5d5d;
    }

    .sub_menu .line {
        width: 114px;
        height: 0px;
        border: solid 1px #707070;
    }

    ul {
      margin-top: -2px;
      margin-left: 90px;
      display:none;
      position: absolute;
      width: 160px;
      height: 165px;
      background: #969696;
      border: solid 1px #a5a5a5;
      color: white;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      z-index: 1;
      line-height: 30px;
    }
    li{
      margin-top: 18px;
      font-size: 18px;
      font-family: NanumGothic;
      text-align: center;

    }
    .menu :hover ul {
      display:block;
    }
    :visited {
      color: white;
      background-color: transparent;
      text-decoration: none;
    }
</style>
