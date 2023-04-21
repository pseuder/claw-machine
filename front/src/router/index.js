import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Signup from '@/components/signup'
import ResetPassword from '@/components/resetPassword'
import ShowAll from '@/components/Show_All'
import Play from '@/components/play'
import Manage from '@/components/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 防止有人亂try結構
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/show',
      name: 'show',
      component: ShowAll
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    }
  ]
})
