<template>

    <div class="login" v-show="hiddenmine">
 <!-- 头部 -->
         <div class="navigationBar">
            <h1 class="title">{{this.$store.state.title}}</h1> 
        </div> 
       
          <ul class="ul-list" > 
                <li ><router-link exact  to="/login/loginB" @click="greenborder" tag="a">登录</router-link></li>
                <li><router-link to="/login/register" tag="a">注册</router-link></li>
            </ul>
             <transition>
                    <router-view />
                </transition>
    </div>
    
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            hiddenmine:true
        }
    },
      methods:{ back:function(){
             history.back();

       },
      
    }
}
</script>

<style  scoped>
.iconfont{
    left: 0;
    position: absolute;
    font-size: 23px;
}
.ul-list{
    width: 100%;
    height:50px;
    margin-top:10px;
}
.ul-list li{
    width: 50%;
    height: 50px;
    float: left;
    line-height: 50px;
    border-bottom: 1px solid rgb(172, 168, 168);
}
.ul-list li a{
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-decoration: none;
    /* padding-bottom: 12px; */
    width: 90%;
    display: inline-block;
}
.active {
    color: rgb(22, 190, 22);
    border-bottom:2px solid green;
}
.active a{
    color: green;
}
</style>
