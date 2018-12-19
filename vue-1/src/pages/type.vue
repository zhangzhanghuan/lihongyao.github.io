<template>
    <div class="page type">
      <div class="search"> 
          <i class="iconfont">&#xe62f;</i>
   <input type="search" class="search-box" key="" v-model="keyword" placeholder="请输入你要查找的关键字">
   </div>
   <ul v-for="(item ,index) in res" :key="index" class="content">
       <router-link  :to="{name:'details',params:{id:item.id}}" tag="li">
           <img :src="item.cover" :title="item.name">
            <div class="type-right">
                <p class="type-name">{{item.name}}</p>
                <p class="type-author">类型:{{item.type}}</p>
                <p class="type-price">{{item.price | addSymbols}}</p>
            </div>
            <i class="iconfont right-btn">&#xe61d;</i>
       </router-link>
      
   </ul>

   
  <keep-alive><router-view/></keep-alive>
    </div>
</template>

<script>
export default {
 

    name: 'type',
    components:{
    },
    data() {
        return {  res:"",
        keyword: '',
        }
      
    },
    
        created() {
          this.$axios.get('../static/book-info.json').then((res) => {
                //用axios的方法引入地址
                // this.res=res
                //赋值
            this.res = res.data;
           
            }).catch(function (error) {
             console.log(error);
  });
        

  },
       watch: {
  //watch title change
   keyword(){
            console.log(this.res)
            console.log('this.keyword',this.keyword)
            this.res =this.keyword ? 
            this.res.filter(item=>item.type.includes(this.keyword)):this.res
            console.log(this.res);
 
   },
   
  },

              //过滤器
    filters: {
        addSymbols(val) {
            return `￥ ${val}`
        }
    },
    computed:{
       
    }
}
</script>

<style scoped>
.type{
    width: 100%;
    height: auto;
}
.page{
    z-index: 10 !important;
}
.iconfont{
    color: gray;
}
.search{
    width: 100%;
    height: 50px;
    border: 1px solid gray;
    border-radius: 30px;
    margin-top:10px;
}
.search-box{
    width: 85%;
    height: 50px;
    border:none;
    
}
.search-box:focus{
    border: none;
}
.content{
    z-index: -1;
}
.content li{
    width: 100%;
    height: 250px;
    margin-top:20px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    position: relative;
}
.content li img{
    float: left;
    width: 47%;
    height: 250px;
}
.type-right{
    width: 50%;
    text-align: left;
    margin-left:10px;
    display: inline-block;
    line-height:30px;
}
.type-name{
    font-size: 20px;
    color: cornflowerblue;
    margin-top:60px;
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;

}
.type-author{
    font-size: 18px;
    color: grey;
}
.type-price{
    font-size: 19px;
    color: orange;
}
.right-btn{
    float: right;
    right: 0;
    position: relative;
     margin-top:-10%;
}
</style>


