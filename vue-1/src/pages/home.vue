<template>
    <div class="page home">
         <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=159603558,1427609210&fm=200&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=747259859,2102027878&fm=200&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=655658d249a98226b8c12c21b2b9de3c/9a504fc2d56285356b4f08869aef76c6a6ef63ee.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1647687242,3641210511&fm=200&gp=0.jpg" alt=""></swiper-slide>


        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
     
    </swiper>
    <!-- 提示 -->
    <div class="ding">
        <i class="iconfont">&#xe8c0;</i>
        <font>双十二全场八折，更有神秘惊喜</font>
    </div>
    <p class="home-title">新宠上市</p>
 <ul v-for="(item, index) in res" :key="index" class="menu-list">
     
     <router-link :to="{name:'details',params:{id:item.id}}"  @click="toDetails(item.id)" tag="li">
      <img  :src="item.cover" :title="item.name">
      <p class="book-name">{{item.name}}</p>
      <p class="price">{{item.price  | addSymbols }}</p>
      </router-link>
    
 </ul>
    
 <keep-alive><router-view/></keep-alive>
    </div>
    
</template>

<script>
export default {
    name: 'home',
    components:{
    },
    data() { 
       
        return {
            res:"",
            item:"",
      
         
        swiperOption: {
            autoplay :true,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            pagination: ".swiper-pagination",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        }
        }
    },
    
    computed:{
         swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
          this.$axios.get('../static/book-info.json').then((res) => {
                //用axios的方法引入地址
                // this.res=res
                //赋值
            this.res = res.data;
            // console.log(this.res);
 localStorage.book = JSON.stringify(this.res[$(this).index()]);

            });
    

   

            
            

        },

        //过滤器
    filters: {
        addSymbols(val) {
            return `￥ ${val}`
        }
    },

  
   
    
}
</script>

<style scoped>
.home{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
}
/* 轮播图 */

.swiper{
    display: inline-block;
    width: 100%;
    height:300px;
}
.swiper-slide img{
    width: 100%;
    height: 300px;
}
.swiper-button-prev{
    width: 25px;
    height: 25px;
    margin-left:10px;
}
.swiper-button-next{
    width: 25px;
    height: 25px;
    margin-right:10px;
    color: orange;
}
/* 双十二活动 */
.ding{
    padding: 10px 0 10px 0;
     border-bottom: 1px solid rgb(180, 177, 177);
     width: 90%;
     text-align: center;
     margin-left:20px;
}
.ding .iconfont{
    font-size: 23px;
    color: orange;
}
.ding font{
    font-size: 20px;
    color: black;
}
/* 内容部分 */
.home-title{
    font: normal 545 25px/24px "microsoft yahei";
    width: 100%;
    padding: 20px 0 10px 0;
    text-align: left;
    padding-left: 10px;
}

.menu-list {
    float: left;
    width: 190px;
    height: 320px;
    margin-left:10px;
    margin-top:15px;
    list-style-type: none;
    
}
.menu-list img{
    width: 190px;
    height: 230px;
}

.book-name{
    height: 50px;
    margin-top:5px;
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.price{
    font-size: 20px;
    color: orange;
}
</style>

