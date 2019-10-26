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
import MyPage from "./page/MyPage";

import QuestionDetail_like from './page/QuestionDetail_like.vue'
import QuestionDetail_questioner from './page/QuestionDetail_questioner.vue'
import SignUp from './page/SignUp.vue'
import SignUp2 from './page/SignUp2.vue'
import SignUp_Success from './page/SignUp_Success.vue'
import FindPassword from './page/FindPassword.vue'
import ChangePassword from './page/ChangePassword.vue'
import like_answer from './page/mylikeanswer'
// 컴포넌트를 import하고, router에 경로를 등록합니다.
// SamplePage는 localhost:3000/sample 등으로 접속 가능합니다.
import empty from './page/empty.vue'
import empty2 from './page/empty2'
import SamplePage from './page/SamplePage.vue'
import QuestionListLike from "./page/QuestionListLike";
import QuestionListChose from "./page/QuestionListChose";
import QuestionDetail_chose from "./page/QuestionDetail_chose";

Vue.use(VueRouter);
export const changeRoute = new Vue();

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/like_answer', component: like_answer},
      { path: '/empty', component: empty},
      { path:'/empty2', component: empty2},
      { path: '/login', component: LoginPage },
        { path: '/main', component: MainPage },
        { path: '/sample', component: SamplePage},
        { path: '/question_list', component: QuestionList},
      {path: '/question_list_like', component: QuestionListLike},
      {path: '/question_list_chose', component: QuestionListChose},
        { path: '/detail', name:'detail', component:QuestionDetail},
      {path: '/mypage', component:MyPage},
      {path: '/question', component:QuestionPage},
      {path:'/myklay', component:MyKlay},
      {path:'/myquestion', component:MyQuestion},
      {path:'/myanswer', component:MyAnswer},
        { path: '/detail_like', name:'like', component:QuestionDetail_like},
      { path: '/detail_chose', component:QuestionDetail_chose},
        { path: '/detail_q', component:QuestionDetail_questioner},
        { path: '/sign_up', component:SignUp},
        { path: '/sign_up_suc', component:SignUp_Success},
        { path: '/find_pass', component:FindPassword},
        { path: '/change_pass', component:ChangePassword},
        { path: '/sign_up2', component:SignUp2}
        ]
});

export default router
