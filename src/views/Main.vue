<template>
  <div class="main">
    <el-container>
        <!-- 左侧的菜单栏  -->
        <el-aside width="200px">左侧边栏</el-aside>
        <!-- 右侧容器 -->
        <el-container>
          <!-- 右侧容器头部 -->
          <el-header>顶部</el-header>
          <!-- 右侧容器主题 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
    
  </div>
</template>
<script>
export default {
  beforeCreate(){
    //组件创建之前先要检查是否登录为管理员
    var isLogin=this.$store.state.adminName;
    if(!isLogin){
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="scss">

</style>
