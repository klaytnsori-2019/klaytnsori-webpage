<template>
    <header>
        <div class="content_area">
            <router-link to="main"><img id='logo' src="./../../assets/logo.svg"></router-link>
            <div class="menu_area">
                <div class="menu">
                    <router-link to="register_question"><span>질문하기</span></router-link>
                    <span>/</span>
                    <router-link to="question_list"><span>질문보기</span></router-link>
                </div>
                <div class="klay_area">
                    <span class="description">나의 Klay</span>
                    <span class="value">999999.9999</span>
                </div>
                <div class="sub_menu">
                    <router-link to="my_page"><div class="sub_btn">마이페이지</div></router-link>
                    <div class="line"></div>
                    <div class="sub_btn">로그아웃</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
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
</style>
