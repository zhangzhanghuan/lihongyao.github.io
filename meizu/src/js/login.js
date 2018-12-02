require("../less/login.less");
require("../less/common.less");
// import "../plugin/LHYAlertView"
var Bmob = require('./Bmob-1.6.5.min.js');

import{
    LHYAlertView 
}from "../plugin/LHYAlertView"
// import './bmob-min.js'
import  {
    Validate,test
}  from "./validate"

$(function(){

    
        let _isLogin = true;
        // 1. 点击前往注册
        $('.go-register').on('click', function () {
            $('.register').removeClass('hidden');
            $('.login').addClass('hidden');
            $('.login-register-btn').text("注册");
            _isLogin = false;
        });
        // 2. 点击返回登陆
        $('.go-login').on('click', function () {
            $('.register').addClass('hidden');
            $('.login').removeClass('hidden');
            $('.login-register-btn').text("登陆");
            _isLogin = true;
        });

        //微信二维码
        $('.icon2').mouseenter(function(){
            $('.hide-img').show();
        })
        $('.icon2').mouseleave(function(){
            $('.hide-img').hide();
        })
        // 3. 表单验证
        $('.input-box input').on('input', function () {
            let type = this.className;
            // let a = new Validate();
            if (Validate.test(type, $(this).val())) {
                // 合法
                $(this).parent().removeClass('error');
            } else {
                // 不合法
                $(this).parent().addClass('error');
            }
        });
        // 4. 点击登陆注册按钮
        $('.login-register-btn').on('click', function () {
            let isThrough = true;
            let $inputs =  _isLogin ? $(".input-box:lt(2) input") : $(".input-box input") ;
            // 表单异常处理
            for (let i = 0, len = $inputs.length; i < len; i++) {
                if (!$inputs.eq(i).val() || $inputs.eq(i).parent().hasClass('error')) {
                    isThrough = false;
                    break;
                }
            }
            if (!isThrough) {
                new LHYAlertView({
                    type:"alert",
                    message:"信息为空或信息不合法！"
                })
                
                return;
            }
            // 注册Bmob服务
            Bmob.initialize("271a2fd5585f966b2b9e39e1df8e0dc6", "1a82f88b7dd57b485779af83ffd17573");
            if (_isLogin) {
                // 登陆
                Bmob.User.login($('.username').val(),$('.password').val()).then(res => {
                    console.log(res);
                    new LHYAlertView({
                        type:"alert",
                        message:"登陆成功",
                    });
                    setTimeout(function(){
                        location.href = "../../index.html";
                    },1000)
                   sessionStorage.isLogin = true;
                }).catch(err => {
                   alert(err.error);
                });
            } else {
                // 创建用户对象
                let user = {};
                $inputs.each((index, input) => {
                    let key = $(input).attr('class');
                    let val = $(input).val();
                    user[key] = val;
                });
                // 调用BMOB注册用户
                Bmob.User.register(user).then(res => {
                    new LHYAlertView({
                        type:"alert",
                        message:"注册成功"
                    })
                    location.href = "../../index.html";
                    sessionStorage.isLogin = true;
                }).catch(err => {
                    alert(err.error);
                });
            }
        });
    
    
    
        // BMOB数据操作演示
        Bmob.initialize("271a2fd5585f966b2b9e39e1df8e0dc6", "1a82f88b7dd57b485779af83ffd17573");
        
 
});
