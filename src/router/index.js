import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Hello from '@/vue/Hello'
import About from '@/vue/About'
import Index from '@/vue/Index'

Vue.use(Router)
Vue.use(Vuex)


//这里用于高速router  页面的位置 等路由处理
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index,
       children:[
       		//  当前页 /
          // 默认嵌套路由 加载c2 组件
          {path: '#/', component: Hello},
        ]
    },
    {
    	path: '/About',
      name: 'about',
      component: About
    }
  ]
})
