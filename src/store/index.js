import Vue from 'vue'
import Vuex from 'vuex'
import auth from './model/auth';
import menu from './model/menu'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    auth,
    menu
  }
});

export default store;
