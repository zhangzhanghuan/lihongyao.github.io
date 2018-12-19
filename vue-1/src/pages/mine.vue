<template>
    <div class="page mine " >
        <!-- 头部 -->
    <div class="mine-background">
   
         <div style="background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=751264745,2069543643&fm=26&gp=0.jpg)no-repeat center center; height:250px; width:100%; opacity:0.5"></div>
        <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=751264745,2069543643&fm=26&gp=0.jpg">
            <p class="mine-name">千纸鹤</p>
        </div>
       
        <!-- 列表 -->
        <ul class="mine-list">
            <router-link to="/modification" tag="li"><i class="iconfont">&#xe609;</i><a href="#">设置个人资料</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            <router-link to="/address" tag="li"><i class="iconfont">&#xe644;</i><a href="#">收货地址管理</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            <div class="mine-list-li-two">
                <router-link to="/modification" tag="li"><i class="iconfont">&#xe64e;</i><a href="#">我的订单</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
                <router-link to="" tag="li"><i class="iconfont">&#xe628;</i><a href="#">我的评价</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            </div>
            <div class="mine-list-li-three">
            <router-link to="" tag="li"><i class="iconfont">&#xe60b;</i><a href="#">商品收藏</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            <router-link to="" tag="li"><i class="iconfont">&#xe704;</i><a href="#">店铺收藏</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            <router-link to="" tag="li"><i class="iconfont">&#xe630;</i><a href="#">浏览记录</a><i class="iconfont mine-icon">&#xe61d;</i></router-link>
            </div>
        </ul>
         <router-view/>
        <router-link to="login"><button type="button" class="Logout" @click="backlogin">退出登录</button>
        </router-link>
        <router-view/>
    </div>
    <router-view/>
    </div>
    
</template>

<script>
export default {
    name: 'mine',
    data() {
        return {
            
 
        }
    },
    mounted:function() {
    
    },
}
</script>

<style scoped>
.mine{
    width: 100%;
    height:900px;
    background: rgb(240, 237, 237);
}
.mine-background{
    width: 100%;
    height: 250px;
    position: relative;
    display: inline-block;
}
.img{
   width: 100%;
   height: 150px;
   position: absolute;
    bottom: 40px;
}
.mine-background img{
    width: 150px;
    height: 150px;
    border-radius: 50%;  
}
.mine-name{
    color: rgb(255, 136, 0);
    font-size: 20px;
}
.mine-list{
    margin-top:20px;
    text-align: left;
    width: 100%;
    height: auto;
}
.mine-list li{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid grey;
    background: white;
    line-height: 50px;
}
.mine-list li:nth-child(1){
    border-top: 1px solid grey;

}           
.mine-list li a{
    text-decoration: none;
    color:rgb(37, 37, 37);
    font-size: 20px;
    margin-left:15px;
}
.mine-list-li-two,.mine-list-li-three{
    margin-top:30px;
}
/* 退出登录 */
.Logout{
    width: 90%;
    height: 55px;
    background: rgb(233, 72, 72);
    margin-top:30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
}
.mine-icon{
    float: right;
    margin-right: 5px;
}
.iconfont{
    font-size: 20px;
    color: rgb(100, 100, 100);
    margin-left:5px;
}
</style>

