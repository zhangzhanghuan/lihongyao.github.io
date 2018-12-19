<template>
    <div class="register">
        <form >
        <ul class="register-list">
            <li  class="input-box">
                <i class="iconfont">&#xe686;</i>
                <input @change="checkphone" type="tel"  v-model="phone" id="phone" placeholder="请输入您的手机号">
                <span>{{msgphone}}</span>
            </li>
             <li class="input-box">
                <i class="iconfont">&#xe66a;</i>
                <input @change="checkname" type="text" id="username" placeholder="请输入您的昵称">
                <span>{{msgname}}</span>
            </li>
             <li class="input-box">
                <i class="iconfont">&#xe614;</i>
                <input @change="checkpassword" id="password" type="password" v-model="password"  placeholder="请输入您的密码">
                <span>{{msgpassword}}</span>
            </li>
             <!-- <li class="input-box">
                <i class="iconfont">&#xe62b;</i>
                <input @change="checkpwd" type="password" v-model="pwd" id="test1" placeholder="请确认您的密码">
                <span>{{msgpwd}}</span>
            </li> -->
        </ul>
        </form>
        <button  type="button" @click="goRegister" class="login-register-btn registerIn">确认注册</button>
        
    </div>
</template>

<script>
var BC = require('bmob');
let _isLogin=true;
import LoginB from './loginB'



// Bmob



// 初始化

// 挂载到全局使用
export default {
      name:"register",
      components:{
          LoginB,
        
      },
    data(){
        return{
            msgphone:"",
            msgname:"",
            msgpassword:"",
            msgpwd:"",
            phone:"",
            name:"",
            password:"",
            pwd:"",
            
            
        }
    },
    methods:{
        goRegister:function(){
            //  alert('注册成功')
            //    location.href = "./home.vue";
            //   // 注册
            Bmob.User.login($('#username').val(),$('#password').val(),$('#phone').val()).then(res => {
                console.log(res);
                 this.$alert('注册成功', {
                    confirmButtonText: '确定',
                     center: true,
                    callback: action => {
                        // this.$message({
                        // type: 'info',
                        // // message: `action: ${ action }`
                        // });
                        location.href = "/";
                    }
                })
                    
                
            }).catch(err => {
                     this.$alert(err.error, {
                    confirmButtonText: '确定',
                     center: true,
                    callback: action => {
                        // this.$message({
                        // type: 'info',
                        // // message: `action: ${ action }`
                        // });
                    }
                })
                });

          
         }, 

 

  

       
        // 验证电话号码
        checkphone:function(){
            var myreg =/^(((13[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(this.phone==""){
                this.msgphone="手机号不能为空"
            }else if(!myreg.test($("#phone").val())){
                this.msgphone="请输入有效的手机号码";
            }else{
                this.msgphone="输入正确"
            }
        },
        // 验证用户名
        checkname:function(){
            if(this.name=""){
                this.msgname="用户名不能为空";
            }else{
                this.msgname="";
            }
        },
        // 验证第一次密码
        checkpassword:function() {
            var pwdReg =/^(?![0-4]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,4}$/;
            var value = $('#password').val();
            if(this.password==""){
                this.msgpassword="密码不能为空";
            }else if(pwdReg.test(value)){
                this.msgpassword="请输入合法的密码"
            }else{
                this.msgpassword="密码输入正确"
            }
        },
        // 验证第二次密码
        checkpwd:function(){
             var value = $('#password').val();
            if(this.pwd=""){
                this.msgpwd="密码不能为空"
            }else if(this.pwd !=value){
                this.msgpwd="输入密码需保持一致"
            }else{
                this.msgpwd="输入密码正确"
            }
        }
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
.registerIn{
    width: 90%;
    height: 55px;
    background: rgb(42, 175, 42);
    margin-top:30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
}
.register-list{
    margin-top:20px;
}
.register-list li{
    width: 100%;
    height:60px;
    border-bottom: 1px solid grey;
    line-height: 60px;
    margin-top:20px;
}
.register-list li span{
    color: red;
}
.register-list li input{
    border: none;
    font-size: 20px;
    width: 45%;
    height: 55px;
    color: rgb(180, 178, 178);
    float: left;
    margin-left:20px;
}
.register-list li span{
    width: 40%;
    display: inline-block;
    float: right;
}
</style>
