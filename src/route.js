import Vue from 'vue'
import VueRouter from 'vue-router'

import QuestionList from './page/QuestionList.vue'
import LoginPage from './page/LoginPage.vue'
import MainPage from './page/MainPage.vue'
import QuestionDetail from './page/QuestionDetail.vue'
import QuestionDetail_like from './page/QuestionDetail_like.vue'
// 컴포넌트를 import하고, router에 경로를 등록합니다.
// SamplePage는 localhost:3000/sample 등으로 접속 가능합니다.
import SamplePage from './page/SamplePage.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/main', component: MainPage },
        { path: '/sample', component: SamplePage},
        { path: '/question_list', component: QuestionList},
        { path: '/detail', component:QuestionDetail},
        { path: '/detail_like', component:QuestionDetail_like}
        ]
});

export default router
