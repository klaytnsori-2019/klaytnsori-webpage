<template>
    <header>
        <div class="content_area">
            <router-link to="main"><img id='logo' src="./../../assets/logo.svg"></router-link>
            <div class="menu_area">
                <div class="menu">
                    <router-link to="question"><span>질문하기</span></router-link>
                    <span>/</span>
                  <span>질문보기
                  <ul>
                    <router-link to="question_list"><li @click="show_question_0">답변 진행중</li></router-link>
                    <router-link to="question_list_like"><li @click="show_question_1">Like 진행중</li></router-link>
                      <router-link to="question_list_chose"><li @click="show_question_2">답변 완료</li></router-link>
                  </ul>
                  </span>

                  </div>
                <div class="klay_area">
                    <span class="description">나의 Klay</span>
                    <span class="value" id="app">{{ klays.Klay }}</span>
                </div>
                <div class="sub_menu">
                    <router-link to="mypage"><div class="sub_btn">마이페이지</div></router-link>
                    <div class="line"></div>
                  <router-link to="" ><div class="sub_btn" @click="logout">로그아웃</div></router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    import apiClient from './../../js/ApiClient.js';

    export default {
        name: "Header",
        data () {
            return {
                klays : {}
            }
        },
        watch : {

            klay : {

                immediate : true,
                handler() {
                    const session_id = this.$store.state.storeInput;
                    let vuecomp = this;
                    apiClient.my_remain_klay(session_id, function (result, data) {
                        if (result) {
                            // console.log(data);
                            vuecomp.klays = data;
                        }
                        else {
                            alert("klay error");
                        }
                    });
                }
            }

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
                        alert("logout error");
                    }
                });
                this.$store.state.storeInput = null;
            },
            show_question_0: function () {
                const vueObj = this;
                vueObj.$store.state.question_state = 0;
            },
            show_question_1: function () {
                const vueObj = this;
                vueObj.$store.state.question_state = 1;
            },
            show_question_2: function () {
                const vueObj = this;
                vueObj.$store.state.question_state = 2;
            }
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
