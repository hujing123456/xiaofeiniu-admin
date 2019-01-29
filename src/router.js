import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFount from './views/NotFount.vue'

Vue.use(Router)
//整个下项目的路由词典
export default new Router({
  routes: [
    {path:"/",redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/main',component:Main},
    {path:'*',component:NotFount}
  ]
})
