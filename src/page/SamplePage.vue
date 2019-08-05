<template>
    <!-- route.js에 해당 컴포넌트를 등록해야 컴포넌트를 띄울 수 있습니다. -->
    <!-- route에 관한 내용은 route.js를 참고하세요. -->

    <div id="sample_page">
        <!-- components에 등록한 컴포넌트를 화면에 그립니다. -->
        <header/>
        <div class="content_area" v-on:id="divId">
            여기에 컨텐츠 내용이 들어갑니다.
            {{ variable }}
        </div>
    </div>
</template>

<script>
    import Header from './../component/common/Header'

    export default {
        name: "login_page",
        components: { Header },
        data:() => {
            return {
                //이곳에 필요한 변수들을 넣습니다.
                variable: "변수에 들어간 내용입니다.",
                divId: "content_div_id"
            }
        },
        methods: {
            //이곳에 템플릿에서 참조할 함수를 작성합니다.
        }
    }

    // 이곳에 일반 함수들을 작성합니다.
</script>

<style scoped>
    /* 여기에 css요소를 등록합니다.
     * style 뒤에 scoped를 붙이면 컴포넌트 내부에만 적용됩니다.
     * 공통으로 적용할 style이 있다면 scoped를 빼던지, App.vue에 작성합니다.  */
    .content_area {
        background: white;
        width: 1000px;
        height: -webkit-fill-available;
    }
</style>
