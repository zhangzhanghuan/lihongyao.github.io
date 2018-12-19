<template>
  <div id="app">
   <!-- 头部 -->

    <div class="navigationBar">
      <h1 class="title">{{this.$store.state.title}}</h1> 
    </div>

  <!-- 内容 -->

    <router-view/> <!-- 标签栏 -->
    <ul class="tabBar"  v-show="$route.meta.showFooter">
        <!-- <li class="tabBarItem" v-for="(item, index) in links" :key="index" :class="'links'+index">
            <router-link :to="item.path" exact >
                <div class="footer"><i class="iconfont" v-html="item.icon"></i> 
                <p >{{item.title}}</p>
               </div>
            </router-link>
        </li>     -->
        <li class="tabBarItem">
            <router-link to="/" exact >
                <div class="footer"><i class="iconfont">&#xe606;</i> 
                <p >主页</p>
               </div>
            </router-link>
        </li> 
        <li class="tabBarItem">
            <router-link to="/type" exact >
                <div class="footer"><i class="iconfont">&#xe651;</i> 
                <p>分类</p>
               </div>
            </router-link>
        </li> 
        <li class="tabBarItem">
            <router-link to="/buy" exact >
                <div class="footer"><i class="iconfont">&#xe656;</i> 
                <p >购物车</p>
               </div>
            </router-link>
        </li> 
        <li class="tabBarItem">
            <router-link :to="this.$store.state.loginState ? '/mine' : '/login'" exact >
                <div class="footer"><i class="iconfont">&#xe66a;</i> 
                <p >我的</p>
               </div>
            </router-link>
        </li> 
    </ul>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      
     
       links: [
        { title: "主页", path: "/" ,icon:"&#xe606;"},
        { title: "分类", path: "/type" ,icon:"&#xe651;"},
        { title: "购物车", path: "/buy" ,icon:"&#xe656;"},
        { title: "我的", path: "/mine",icon:"&#xe66a;"},            
      ],     
    }
  },
        //过滤器
    filters: {
        addSymbols(val) {
            return `￥ ${val}`
        }
    },
   mounted:function(){
      
    }
}
</script>

<style>
ul li{
  list-style-type: none;
}
* {
  margin: 0; padding: 0;
}
.iconfont{
  font-size:20px;
   color:#f0f0f0;
}
html, body { height: 100%; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
  width: 100%;
  height: auto;
}
.navigationBar {
  width: 100%;
  height: 45px;
  background: rgb(104, 101, 104);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000;
}
.navigationBar > .title {
  line-height: 64px;
  text-align: center;
  font-size: 16px;
}
.page {
    width: 100%;
    height:calc(100%-40px-50px);
    left: 0;
    overflow: hidden;
}
.tabBar {
  list-style: none;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.tabBarItem {
  width: 25%;
  height: 100%;
}
.tabBarItem  a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 100%;
  height: 100%;
  background: rgb(104, 101, 104);
  color: #fff;
  text-decoration: none;
}

.tabBarItem  a.selected {
  background: purple;
}
.tabBarItem .active {
  background: rgb(42, 43, 42);
}
/* 阿里图标 */
.footer{
  width: 35px;
  height: 35px;
}
li:nth-child(3) a .footer{
  width: 58px;
  text-align: center;
}
.router-link-active {
    color: red;
}
</style>
