<template>
  <div class="xfn-login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="80px">
          <el-form-item label="管理员名:">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:">
            <el-input v-model="formData.apwd" type="password" placeholder="请输入管理员密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formData:{   //表单中用户输入的两个数据
        aname:"admin",
        apwd:"123456"
      }
    }
  },
  methods:{
    doLogin(){
      var url=this.$store.state.globalSettings.apiUrl+'/admin/login';
      this.$axios.get(url,{params:this.formData}).then((res)=>{
        if(res.data.code==200){
          this.$store.commit('setIsLogin',true);
          this.$router.push('/main');
        }else{
          this.$alert('用户名或密码错误！','登录失败',{type:'error'}).then(()=>{}).catch(()=>{});
        }
        
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){
      this.formData.aname="";
      this.formData.apwd="";
    }
  }
  
}
</script>

<style lang="scss">
  .xfn-login-card{
    width:600px;
    margin:100px auto;

    .el-card__header{
      text-align: center;
      font-size:1.2rem;
    }
  }

</style>
