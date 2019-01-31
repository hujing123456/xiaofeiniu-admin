import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$axios=axios  //把axios设置为所有Vue组件实例的成员属性
Vue.config.productionTip = false
Vue.filter('date',function(val){
  //把bigint转换为yyyy-mm-dd
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m= m>9 ? m : "0"+m;
  var d=date.getDate();
  d= d>9 ? d : "0"+d;
  return y+'-'+m+'-'+d;
})
Vue.filter('datetime',function(val){
  //把bigint转换为yyyy-mm-dd hh:mm:ss
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
    m = m>9 ? m : "0"+m;
  var d=date.getDate();
  d= d>9 ? d : "0"+d;
  var h=date.getHours();
  h= h>9 ? h : "0"+h;
  var min=date.getMinutes();
  min = min>9 ? min : '0'+min;
  var s=date.getSeconds();
  s= s>9 ? s : "0"+s;
  return y+'-'+ m +'-'+d+' '+h+':'+min+':'+s;
})
Vue.filter('currency',function(val){
  //把int转换为￥ xx.yy
   return  '￥'+val.toFixed(2);
})
Vue.filter('tableStatus',function(val){
  if(val==1) return '空闲';
  else if(val==2) return '预定';
  else if(val==3) return '占用';
  else return '其他';
})

new Vue({
  router,
  store,   //指定当前项目唯一的Vuex存储仓库对象，其中保存着可供所有组件共享的数据，且具备响应式，其底层为sessionStorage
  render: h => h(App)   //根据APP组件创建<App></App>元素，挂载到#app内部
}).$mount('#app')
