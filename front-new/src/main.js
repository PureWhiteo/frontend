import Vue from 'vue'
import App from '@/App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import store from '@/store';
import router from '@/router';

import '@/assets/css/app.scss'

import echarts from 'echarts'
// import  '@/assets/js/echarts-theme-macarons.js'
import 'echarts/theme/macarons.js'

// 基础配置
import base from '@/utils/base'
// ajax
import http from '@/utils/http'
// api 接口
import api from '@/utils/api'
// 工具类
import * as utils from '@/utils/utils'
// 数据校验工具类
import * as validate from '@/utils/validate'

Vue.prototype.$base = base
Vue.prototype.$http = http
Vue.prototype.$api = api

Vue.prototype.$echarts = echarts

Vue.prototype.$utils = utils
Vue.prototype.$validate = validate

Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
