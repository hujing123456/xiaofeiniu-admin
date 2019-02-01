import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//多组件所公用的公共存储仓库
export default new Vuex.Store({
  //公共数据读取方法：this.$store.state.adminName
  state: {  //当前数据状态，类似于组件对象的data属性
    isLogin:false,   //当前登录的管理员名
    globalSettings:{    //项目全局设置信息
      apiUrl:'http://127.0.0.1:8090'    //初始默认值
    }
  },
  //公共数据的修改方法：this.$store.commit('setAdminName',value);
  mutations: {  //变换转换，控制数据变化，即修改state，类似于组件对象中的methods,用mutations修改数据可以保证数据的响应式
    setIsLogin(state,value){
      state.isLogin=value;
    },
    setGlobalSettings(state,value){
      state.globalSettings=value;
    }
  }
})
