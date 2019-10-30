<template>
    <div id="main_page" class="page">
        <Header></Header>
        <div class="contents_area">
            <div id="search_area">
                <form id="search_form">
                    <span class="icon"><img src="./../assets/search.svg"></span>
                    <input placeholder="검색어를 입력하세요">
                </form>
            </div>
            <div id="like_area">
                <div class="title_area">
                    <img src="./../assets/heart.svg">
                    <span>당신의 Like를 기다리고 있습니다!</span><br>
                    <span class="subtitle">질문자 대신 답변을 선택하고 보상을 받아가세요</span>
                </div>
                <ul>
                    <li v-for="item in like_question">
                        <list-tile-like :title="item.question_title" :reward="item.klay" :index="item.question_num"></list-tile-like>
                    </li>
                </ul>
            </div>
            <div id="question_area">
                <div class="title_area">
                    <span>질문 리스트</span>
                </div>
                <ul>
                    <li v-for="item in ing_question">
                        <list-tile :title="item.question_title" :reward="item.klay" :index="item.question_num"></list-tile>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './../component/common/Header'
    import ListTile from './../component/main/MainListTile'
    import ListTileLike from './../component/main/MainListTile2'
    import apiClient from './../js/ApiClient.js';

    export default {
        name: "MainPage",
        components: {
            Header,
            ListTile,
            ListTileLike
        },

        data () {
            return {
                like_question : null,
                ing_question : null
            }
        },
        watch: {

            addr: {

                immediate:true,
                handler() {
                    let def = 1;
                    let state0 = 0;
                    let state1 = 1;
                    let vuecomp = this;
                    apiClient.question_list(def = 1 , state0 , function (result, data) {
                        if (result) {
                            vuecomp.ing_question = data;
                            vuecomp.ing_question.length=6;
                        } else {
                            alert(data);
                        }
                    });
                    apiClient.question_list(def = 1, state1 , function (result, data) {
                        if (result) {
                            vuecomp.like_question = data;
                            vuecomp.like_question.length=2;
                        } else {
                            alert(data);
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
    #main_page {
        position: relative;
    }

    .contents_area {
        margin: auto;
        width: 1000px;
        text-align: center;
    }

    #search_area {
        position: relative;
        display: inline-block;
        height: 58px;
        margin-top: 58px;
    }

    #search_form {
        position: relative;
    }

    #search_area .icon {
        position: absolute;
        top: 50%;
        left: 0;
        margin-left: 17px;
        margin-top: 17px;
        z-index: 1;
        color: #4f5b66;
    }

    #search_area input {
        width: 436px;
        height: 54px;
        background: #d1d1d1;
        border: solid 1px #a5a5a5;
        font-family: NanumGothic;
        font-size: 15px;
        float: left;
        color: black;
        padding-left: 59px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    #like_area .title_area {
        color: red;
    }

    #like_area .title_area img {
        width: 16px;
        height: 14px;
    }

    #like_area .title_area .subtitle {
        font-family: NanumGothic;
        font-size: 10px;
        font-weight: bold;
        color: #656565;
    }

    .title_area {
        text-align: left;
        margin-left: 65px;
        margin-top: 52px;
    }
</style>
