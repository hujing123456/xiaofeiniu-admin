<template>
  <div class="xfn-category-list">
     <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br/>
    <el-button type="primary" size="small" @click="addCategory">添加新的菜品类别</el-button>
    <br/><br/>
    <el-table :data="categoryList" stripe border>
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="success" size="mini" @click="updateCategory(row.cid,$index)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteCategory(row.cid,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    data(){
      return {
        categoryList:[]
      }
    },
    mounted(){
      this.getCategoryList();
    },
    methods:{
      getCategoryList(){
        var url=this.$store.state.globalSettings.apiUrl+'/admin/category';
        this.$axios.get(url).then((res)=>{
        this.categoryList=res.data;
        console.log(this.categoryList);
      }).catch((err)=>{
        console.log(err);
      })
      },
      updateCategory(c,i){
          this.$prompt("请输入新的菜品类别名称：","修改菜品类别").then(({value})=>{
            var url=this.$store.state.globalSettings.apiUrl+"/admin/category";
            this.$axios.put(url,{cname:value,cid:c}).then((res)=>{
              if(res.data.code==200){
                this.$message.success("修改类别成功");
                // this.categoryList.splice(i,1,c,value);
              }else{
                this.$message.info("修改类别出错："+res.data.msg);
              }
            }).catch((err)=>{
              console.log(err);
            })
          }).catch(()=>{
            this.message.info("已取消修改！")
          })
      },
      deleteCategory(c,i){
        this.$confirm("删除操作无法撤销！确认吗？","删除确认",{
          confirmButtonText:"确定",
          cancelButtonText:"取消",
          type:"warning"
        }).then(()=>{
          var url=this.$store.state.globalSettings.apiUrl+"/admin/category/"+c;
          this.$axios.delete(url).then((res)=>{
            if(res.data.code==200){
              this.categoryList.splice(i,1);
              this.$message.success("删除成功");
            }else{
              this.$message.error("类别删除出差错："+res.data.msg);
            }
          }).catch((err)=>{
            console.log(err);
          })
        }).catch(()=>{
          this.$message.info("已取消删除");
        })
        
      },
      addCategory(){
        this.$prompt('请输入新的菜品类别名称:','修改菜品类别',{
          confirmButtonText:"确定",
          cancelButtonText:"取消",
          type:"info"
        }).then(({value})=>{
          var url=this.$store.state.globalSettings.apiUrl+"/admin/category";
          this.$axios.post(url,{cname:value}).then((res)=>{
            if(res.data.code==200){
              this.$message.success("新的类别添加成功");
              this.categoryList.push({cid:res.data.cid,cname:value})
            }else{
              this.$message.error("新的类别添加出错："+res.data.msg);
            }
          }).catch((err)=>{
            console.log(err);
          })
        }).catch(()=>{
          this.$message.info("已取消添加");
        })
      }
    }
}
</script>
<style>

</style>

