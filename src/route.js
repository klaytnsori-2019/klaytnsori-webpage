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
import QuestionDetail_like from './page/QuestionDetail_like.vue'
import QuestionDetail_questioner from './page/QuestionDetail_questioner.vue'
import FindPassword from './page/FindPassword.vue'
import ChangePassword from './page/ChangePassword.vue'
import MyPage from "./page/MyPage";
import SignUp from "./page/SignUp";
import SignUp_Success from "./page/SignUp_Success";

// 컴포넌트를 import하고, router에 경로를 등록합니다.
// SamplePage는 localhost:3000/sample 등으로 접속 가능합니다.
import SamplePage from './page/SamplePage.vue'

Vue.use(VueRouter);
export const changeRoute = new Vue();

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
      {path:'/myanswer', component:MyAnswer},
        { path: '/detail_like', component:QuestionDetail_like},
        { path: '/detail_q', component:QuestionDetail_questioner},
        { path: '/sign_up', component:SignUp},
        { path: '/sign_up_suc', component:SignUp_Success},
        { path: '/find_pass', component:FindPassword},
        { path: '/change_pass', component:ChangePassword}
        ]
});

export default router
