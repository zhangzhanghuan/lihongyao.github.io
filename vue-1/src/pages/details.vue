<template>
    <div class="details">

        <div class="navigationBar">
            <i class="iconfont" @click="back">&#xe666;</i>
      <h1 class="title">{{this.$store.state.title}}</h1> 
     
    </div> 
    <div class="details-box">
        <div class="details-box-header">
        <img class="img" :src=' datas.cover'/>
        <!--右边介绍 -->
        <div class="details-box-right">
            <p><font>类型</font>{{ datas.type}}</p>
            <p class="details-price"><font>售价</font>{{datas.price | addSymbols}}</p>

        </div>
        </div>
        <!-- 书名 -->
        <h3 class="h3">{{datas.name}}</h3>
        <div class="click-btn">
            <el-button  type="button" @click="changeBuy">加入购物车</el-button>
            <button type="button" class="buy-btn">立即购买</button>

        </div>
        <!-- 主要内容 -->
        <div class="details-describe">
            <!-- 描述 -->
                <div class="details-common describe" v-if="datas.describe">
               
                    <img :src=' datas.describe'/>
                </div>
            <!-- 历史 -->
                <div class="details-common info1" v-if=" datas.info1">
                    <img :src=' datas.info1'/>
                </div>
            <!-- 作者简介 -->
                <div class="details-common  authorInfo" v-if="datas.authorInfo">
                   <img :src="datas.authorInfo">
                </div>
        </div>
    </div>

    </div>
</template>

<script>
import Router from 'vue-router'

// Vue.use(Router)
export default {
    name:"details",
    data(){
        return{
       rootArr:{},
       
        response:[],
        
   datas:{}
        }
      
    },
    methods:{
        
         back:function(){
             history.back();
                        },
        changeBuy(){ 
             if(sessionStorage.isLogin==null || sessionStorage.isLogin==false){
             this.$alert( '请先登录', {
          confirmButtonText: '确定',
            center: true,
          callback: action => {
            
          }
        });
            return;
            
        }else{ 
            
            this.$alert( '添加购物车成功', {
          confirmButtonText: '确定',
            center: true,
          callback: action => {
          }
        });}
           
            this.$router.push({name: 'buy'});
        // 创建订单
        let orders = {
            "name": this.datas.name,
            "price": this.datas.price,
            "total": this.datas.price.toFixed(2),
            "id":this.datas.id,
            "num": 1,
            "authorname":this.datas.author,
            "img": this.datas.cover,
        };
       
        // 随时更新购物车数量
        $(function(){
            let rootArr = JSON.parse(localStorage.orders);
            $('.shop .icon-iconfontcart em').text(rootArr ? rootArr.length : 0);
            $('.store-num').text(rootArr ? rootArr.length : 0);
        })
         let rootArr = [];
        // 如果本地存在订单数据，则根据本地数据更新rootArr
        if (localStorage.orders) {
            rootArr = JSON.parse(localStorage.orders);
        }
        // 更新本地数据
        // 处理重复商品
        let flag = false;
        for (let i = 0, len = rootArr.length; i < len; i++) {
            if (rootArr[i].name === orders.name) {
                rootArr[i].id = rootArr[i].id + 1;
                rootArr[i].total = (rootArr[i].id * rootArr[i].price).toFixed(2);
                flag = true;
                break;
            }
        }
        if (!flag) {
            rootArr.push(orders);
        }
        localStorage.orders = JSON.stringify(rootArr);
       

        }
           },
   
        //过滤器
    filters: {
        addSymbols(val) {
            return `￥ ${val}`
        }
    },
    mounted () {
        let that = this;
        this.$axios.get('../../static/book-info.json').then(response=>{
            let datas = response.data
            response.data.forEach(element => {
                if(element.id==this.$route.params.id ){
                    this.$data.datas = element
                }
            });                
        })
    },
   
    
 

}
</script>

<style scoped>
.details-common img{
    width: 100%;
    height: 500px;
}
.iconfont{
    left: 0;
    position: absolute;
    font-size: 23px;
}
/* 内容 */

.details-box{
    width: 100%;
    height: auto;
    margin-top:60px;
}
/* 头部 */
.details-box-header{
    height: 260px;
}
/* 图片 */
.details-box .img{
    width: 60%;
    height:250px;
    float: left;
    
}
/* 右边 */
.details-box-right{
    padding-top:10px;
    float: left;
    height: 250px;
    line-height: 42px;
    margin-left:10px;
    text-align: left;
    font-size: 17px;
    width: 35%;
    float: right;

}
.author-name{
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    
}
.details-box-right font{
    color: gray;
    width: 75px;
    display: inline-block;
}
.details-price{
    color: orangered;
}
.h3{
    text-align: left;
    color: black;
    display: inline-block;
    width: 100%;
    height: 30px;
    font-size: 20px;
}
/* 两个按钮 */
.click-btn{
    width: 100%;
    height: 50px;
    margin-top:10px;
}
.click-btn button{
    padding: 10px 20px;
    width: 45%;
    border-radius: 10px;
    background: white;
    border:1px solid grey;
}
.click-btn .buy-btn{
    background: rgb(20, 151, 20);
    color:white;
}

/* 内容 */
/* .details-describe{
    width: 100%;
    height: auto;
    margin:0 auto;
} */
/* .details-common{
    text-align: left;
    width: 90%;
    height: auto;
    padding: 5px;
    border: 1px solid grey;
    padding-left: 10px;
    margin-top:20px;
    margin-left:15px;

} */
.details-title{
    margin-top:-18px;
    margin-bottom: 10px;
    background: white;
    width: 65px;
}
</style>
