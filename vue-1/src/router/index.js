import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

//导入组件
import Home from '../pages/home.vue'
import Type from '../pages/type.vue'
import Buy from '../pages/buy.vue'
import Mine from '../pages/mine.vue'
import Details from '../pages/details.vue'
import Modification from '../components/modification.vue'
import Address from '../components/address.vue'
import Login from '../components/login.vue'

import LoginB from '../components/loginB.vue';
import Register from '../components/register.vue';
import Pay from '../components/pay.vue';


new Vue({
  el: '#app',
  store,

})

export default new Router({
  // mode:'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        index: 0,
        showFooter: true
    }
    },
    {
      path: '/type',
      name: 'type',
      component: Type,
      meta: {
        index: 0,
        showFooter: true
    }
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy,
      meta: {
        index: 0,
        showFooter: true
    }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        index: 0,
        showFooter: true
      },
      // redirect: to => {
      //   if(!store.state.loginState) {
      //     return "/login"
      //   }
      // }
    },
    {
      path:'/details/:id',
      name:'details',
      component:Details,
      meta: {
        index: 1,
        showFooter: false
    }
    },
    {
      path:'/modification',
      name:'modification',
      component:Modification,
      meta: {
        index: 1,
        showFooter: false
    }
    },
    {
      path:'/address',
      name:'address',
      component:Address,
      meta: {
        index: 1,
        showFooter: false
    }
    },
    {
      path:'/login',
      name:'login',
      component:Login, 
      meta: {
        index: 1,
        showFooter: true
    },
   
    redirect: '/login/loginB',
     //配置子路由
     children:[
      {
          path:'loginB',
          component:LoginB,
          name:'loginB',
          meta: {
  
            index: 1,
            showFooter: true
        },
      },
      {
          path:'register',
          component:Register,
          name:'register',
      }
      
  ]
    },
    {
        path:'/pay',
        name:'pay',
        component:Pay,
        meta: {

          index: 1,
          showFooter: false
      }
      },
  ]
})
