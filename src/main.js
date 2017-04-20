// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import App from './App'
import router from './router'
//var VueResource = require('vue-resource');
require('./assets/css/reset.css');
require('./assets/css/index.css');
require('./assets/css/page.css');
require('./assets/css/animate.css');


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
//vue.extend({})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


var store = new Vuex.Store({
  state: {
    count: '初始化state状态'
  },
  mutations: {
    increment (state) {
      state.count
    }
  }
})

store.commit('increment')

console.log(store.state.count)
