import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFount from './views/NotFount.vue'
import GlobalSettings from './views/GlobalSettings'
import TableList from './views/TableList'
import TableAdd from './views/TableAdd'
import TableDelete from './views/TableDelete'
import CategoryList from './views/CategoryList'
import CategoryAdd from './views/CategoryAdd'
import CategoryDelete from './views/CategoryDelete'
import DishList from './views/DishList'
import DishAdd from './views/DishAdd'
import DishDelete from './views/DishDelete'
import OrderList from './views/OrderList'
import Security from './views/Security'
Vue.use(Router)
//整个下项目的路由词典
export default new Router({
  routes: [
    {path:"/",redirect:'/login'},
    {path:'/login',component:Login},
    {
      path:'/main',
      component:Main,
      children:[
        {path:'',redirect:'/table/list'},
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:CategoryList},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/delete',component:CategoryDelete},
        {path:'/dish/list',component:DishList},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/delete',component:DishDelete},
        {path:'/orderlist',component:OrderList},
        {path:'/security',component:Security}
      ]
    },
    {path:'*',component:NotFount}
  ]
})
