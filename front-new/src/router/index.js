import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    },
    name: 'home',
    path: '/home'
  },
  {
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    },
    name: 'login',
    path: '/login'
  },
  {
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册'
    },
    name: 'register',
    path: '/register'
  }
];

const router = new VueRouter({ mode: 'hash', routes });
export default router;
