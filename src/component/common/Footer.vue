<template>
    <footer>
        <div class="content">
            <span>© copyright Klaytnsori. All Rights Reserved.</span>
            <router-link to="introduce"><span>서비스 소개</span></router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>
    footer {
        overflow: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 82px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
    }

    footer .content {
        padding: 32px 50px;
        display: flex;
        justify-content: space-between;
    }

    footer span {
        font-family: NanumGothic;
        font-size: 15px;
        text-align: left;
        color: #696969;
    }

    footer a {
        font-weight: bold;
        text-decoration: underline;
    }
</style>
