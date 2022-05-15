import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    show: true,
    title: '',
    appAuth: {
      error_no: '', // 错误code
      ctoken: '', // 对应的ctoken
      activity_uuid: '' // 赛事uuid
    },
    loading: false
  },

  getters: {},

  mutations: {
    // 设置页面显示
    SET_SHOW: (state, data) => {
      state.show = data;
    },
    // 设置页面标题
    SET_TITLE: (state, data) => {
      state.title = data;
      window.document.title = data;
    },
    /* 设置loading */
    SET_LOADING: (state, data) => {
      state.loading = data;
    }
  },

  actions: {
    getAppAuth({ commit, state, dispatch }, []) {
      return new Promise((resolve, reject) => {

      });
    }
  }
});

export default store;
