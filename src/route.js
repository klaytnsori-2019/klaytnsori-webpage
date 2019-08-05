import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './page/LoginPage.vue'
import MainPage from './page/MainPage.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/main', component: MainPage }
    ]
});

export default router