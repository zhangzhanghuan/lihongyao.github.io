<template>
    <div class="loginB">
        <form>
        <ul class="loginB-list">
             <li class="input-box">
                <i class="iconfont">&#xe66a;</i>
                <input @change="checkname" type="text" id="username" v-model="username" placeholder="请输入您的昵称">
                <span>{{msgname}}</span>
            </li>
             <li class="input-box">
                <i class="iconfont">&#xe62b;</i>
                <input type="input" id="password" placeholder="请输入您的密码">
            </li>
        </ul>
        </form>
      <el-button  type="button" @click="goLogin" class="loginBtn">登录</el-button>
    </div>
</template>

<script>
import router from '../router'
// import Page from './'
export default {
    name:"loginB",
    data(){
        return{
            username:""
        }

    },
    methods:{
        
        goLogin:function(){
            this.$store.commit('login',this.username)
            let _isLogin=true;
            // 登陆
            Bmob.User.login($('#username').val(),$('#password').val()).then(res => {
                console.log(res);
                this.$alert( '登录成功', {
                confirmButtonText: '确定',
                callback: action => {
                    sessionStorage.isLogin = true;
                    this.$store.state.loginState = true;
                    router.push('/mine');
                }
                });
                
               
            }).catch(err => {
                    // alert();
                    this.$alert(err.error, {
                    confirmButtonText: '确定',
                     center: true,
                    callback: action => {
                    }
                })
                });
            
      },
    }
}


</script>

<style scoped>
.iconfont{
    font-size: 30px;
    color: rgb(100, 100, 100);
    margin-left:5px;
    float: left;
}
.loginBtn{
    width: 90%;
    height: 55px;
    background: rgb(42, 175, 42);
    margin-top:30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
}
.loginB-list{
    margin-top:20px;
}
.loginB-list li{
    width: 100%;
    height:60px;
    border-bottom: 1px solid grey;
    line-height: 60px;
    margin-top:20px;
}
.loginB-list li input{
    border: none;
    font-size: 20px;
    width: 80%;
    height: 55px;
    color: rgb(180, 178, 178);
}
</style>
