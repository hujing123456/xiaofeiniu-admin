<template>
  <div class="main">
    <el-container>
        <!-- 左侧的菜单栏  -->
        <el-aside width="200px">
          <el-menu :unique-opened="true" :router="true" :default-openeds="defaultOpeneds" :default-active="defaultActive">
            <el-menu-item index="/settings">
              <i class="el-icon-setting"></i>
              <span slot="title">全局设置</span>
            </el-menu-item>
            <el-submenu index="table">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>桌台管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/table/list">桌台列表</el-menu-item>
                <el-menu-item index="/table/add">添加桌台</el-menu-item>
                <el-menu-item index="/table/delete">删除桌台</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/category/list">
              <i class="el-icon-message"></i>
              <span slot="title">菜品类别</span>
            </el-menu-item>
            <el-submenu index="dish">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>菜品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/dish/list">所有菜品</el-menu-item>
                <el-menu-item index="/dish/add">添加菜品</el-menu-item>
                <el-menu-item index="/dish/delete">删除菜品</el-menu-item>
                <el-menu-item index="/dish/update">修改菜品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/orderlist">
              <i class="el-icon-date"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
             <el-menu-item index="/security">
              <i class="el-icon-bell"></i>
              <span slot="title">安全管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右侧容器 -->
        <el-container>
          <!-- 右侧容器头部 -->
          <el-header height="60px">
            <main-header></main-header>
          </el-header>
          <!-- 右侧容器主题 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'
export default {
  components:{
    MainHeader
  },
  beforeCreate(){
    //组件创建之前先要检查是否登录为管理员
    var isLogin=this.$store.state.isLogin;
    if(!isLogin){
      this.$router.push('/login');
    }
  },
  data(){   //数据属性
    return {}
  },
  computed:{     //计算属性=数据属性+操作方法
     defaultOpeneds(){
       if(this.$route.path.indexOf('/table')==0){
         //用户当前在浏览/table/xxx菜单项
         return ['table'];
       }else if(this.$route.path.indexOf('/dish')==0){
         return ['dish'];
       }else {
         return [];
       }
       
     },
     defaultActive(){
       return this.$route.path;
     }
  }
}
</script>
<style lang="scss">

</style>
