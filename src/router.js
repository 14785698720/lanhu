import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Examine from './views/Examine.vue'
import User from './views/people/User.vue'
import RushMoney from './views/people/RushMoney.vue'
import WithdrawMoney from './views/people/WithdrawMoney.vue'
import HotWallet from './views/people//HotWallet.vue'
import  Wallet from './views/people/Wallet.vue'
import TotalAmount from './views/people/TotalAmount.vue'
import SurplusAmount from './views/people/SurplusAmount.vue'
import Robot from './views/people/Robot.vue'
import Dis from './views/people/Dis.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/Examine',
    //   name: 'examine',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Examine.vue')
    // },
    {path: '/Examine', name: 'examine', component: Examine },
    {path: '/Home/User', name: 'person', component: User },
    {path: '/Home/RushMoney', name: 'rushmoney', component: RushMoney },
    {path: '/Home/WithdrawMoney', name: 'withdrawmoney', component:WithdrawMoney },
    {path: '/Home/HotWallet', name: 'HotWallet', component: HotWallet },
    {path: '/Home/Wallet', name: 'Wallet', component: Wallet },
    {path: '/Home/TotalAmount', name: 'totalamount', component: TotalAmount },
    {path: '/Home/SurplusAmount', name: 'surplusamount', component: SurplusAmount },
    {path: '/Home/Robot', name: 'robot', component: Robot },
    {path: '/Home/Dis', name: 'dis', component: Dis } 

  ]
})
