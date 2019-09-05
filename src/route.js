import Vue from 'vue'
import VueRouter from 'vue-router'

import QuestionList from './page/QuestionList.vue'
import LoginPage from './page/LoginPage.vue'
import MainPage from './page/MainPage.vue'
import QuestionDetail from './page/QuestionDetail.vue'
import QuestionPage from "./page/QuestionPage";
import MyKlay from "./page/MyKlay";
import MyAnswer from "./page/MyAnswer";
import MyQuestion from "./page/MyQuestion";
// 컴포넌트를 import하고, router에 경로를 등록합니다.
// SamplePage는 localhost:3000/sample 등으로 접속 가능합니다.
import SamplePage from './page/SamplePage.vue'
import MyPage from "./page/MyPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/main', component: MainPage },
        { path: '/sample', component: SamplePage},
        { path: '/question_list', component: QuestionList},
        { path: '/detail', component:QuestionDetail},
      {path: '/mypage', component:MyPage},
      {path: '/question', component:QuestionPage},
      {path:'/myklay', component:MyKlay},
      {path:'/myquestion', component:MyQuestion},
      {path:'/myanswer', component:MyAnswer}
        ]
});

export default router
