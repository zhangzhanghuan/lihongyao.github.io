<template>
    <div class="Pay">
        <!-- 头部 -->
         <div class="navigationBar">
            <i class="iconfont" @click="back">&#xe666;</i>
            <h1 class="title">{{this.$store.state.title}}</h1> 
        </div> 
       <!-- 内容 -->
       <div class="pay-content-title">商品信息确认</div>
       <div class="pay-content">
             <div v-for="(item, index) in this.rootArr" :key="index" class="pay-list">
                    <img v-bind:src="item.img" alt="">
                    <div class="pay-list-right">
                        
                        
                        <p class="price or-total">单价：￥{{item.price}}
                             
                        </p>
                    </div>
                </div>
               <div class="footer">
                      <!-- 合计 -->
                    <!-- <section class="total-price-box">
                        <span>合计：</span>
                        <span class="total-price">¥ 0</span>
                    </section> -->
               </div>

           </div> 
           <!-- <ul>
                <li>价格信息</li>
           <li><font>商品总价:</font>￥128.60</li>
           <li>运送费:￥10</li>
            <li>订单总价:￥138.60</li>
           </ul>

           <ul>
               <li>收货地址</li>
           </ul> -->
           
       
    </div>
</template>

<script>
export default {
    name:'pay',
    data(){
        return{}
    },
     methods:{ back:function(){
             history.back();

       },
      
    },
    created(){
         this.rootArr = JSON.parse(localStorage.orders);
    // console.log( this.rootArr);
    if(this.rootArr){
        let Arr =this.rootArr;
        // console.log(Arr);
        this.rootArr.forEach(element => {
            this.element=element
            // console.log(element);
            
        });
    this.datass=this.rootArr;
    console.log(this.datass);
    }
    }
    
}
</script>

<style scoped>
.Pay{
    width: 100%;
    height: auto;
    margin:0 auto;
    background: rgb(212, 211, 211);
}
.iconfont{
    left: 0;
    position: absolute;
    font-size: 23px;
}
.pay-content-title{
    float: left;
    font-size: 26px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    text-align: left;
    margin-left:20px;
}
.pay-content{
    width: 90%;
    height: 1000px;
    background: white;
    margin:0 auto;
    border:1px solid gray;
    overflow: hidden;
}
.pay-list{
    height:220px;
    width: 100%;
    margin-top: 10px;
}
.pay-list img{
    width: 55%;
    float: left;
}
.pay-list-right{
    width: 45%;
    float: left;
}
.footer section{
    width: 100%;
    display: inline-block;
    height: 30px;
}
.total-price-box{
    width: 100%;
    display: inline-block;
}
.total-price-box span{
    width: 100%;
    display: inline-block;
}
</style>
