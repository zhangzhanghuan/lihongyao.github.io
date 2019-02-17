
(function(){
    var username=document.querySelector("input[name=username]").value;
    var password=document.querySelector("input[name=psw]").value;
    localStorage.isLogin=false;
       // 3. 表单验证
       $('.input-box input').on('input', function () {
        let type = this.className;
        if (Validate.test(type, $(this).val())) {
            // 合法
            $(this).parent().removeClass('error');
        } else {
            // 不合法
            $(this).parent().addClass('error');
        }
    });
    // 获取登录按钮
    var Btn=document.querySelector('.login-register-btn');
    Btn.onclick=function(){
        // setCookie(obj);
        // var cookie=getCookie();
        // var text=cookie.loginstate;
        // console.log(text);
        document.cookie='username='+username+';max-age='+7*24*3600+';path=/';
        let isThrough = true;
        let $inputs = $(".input-box input");
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
        }else{
        // //发起登录ost方式，ajax请求
        // 1.创建AJAX对象
        var myajax = new XMLHttpRequest();
        // 2.打开AJAX请求
        myajax.open("post", "http://127.0.0.1:8081/login");
        myajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//必须加这行代码    
        // 3.发送AJAX请求
        myajax.send("username="+username+"&psw="+password);
        // 4.监听请求状态
        myajax.onreadystatechange = function () {
            if (myajax.readyState == 4) { //判断请求是否完成
                if (myajax.status == 200) { //判断请求是否成功
                    var val = myajax.responseText; //获取请求返回的数据
                    if(val==1){
                        new LHYAlertView({
                            type:"alert",
                            message:'恭喜你登录成功,请选择是否七天免登陆,默认5秒后跳转！！！'
                        })
                        setTimeout(function(){
                            location.href=('/index.html?'+'username='+username +',loginstate=true')
                            localStorage.isLogin=true;
                            },5000)
                    }else{
                        new LHYAlertView({
                            type:"alert",
                            message:'登录失败,用户名或密码错误'
                        })
                        return
                    }
                }
            }
        }
        }
    
    };

    var Check=document.querySelectorAll("[type=checkbox]")[0];
    // // 点击七天免登陆按钮所执行的操作
    if(Check.checked){
        new LHYAlertView({
            type:"alert",
            message:'你已点击七天免登陆,点击确定直接跳转'
        })
        setCookie(text=true,7*24*3600);
        setTimeout(function(){
        localStorage.isLogin=true;
        location.href=('/index.html?'+'username='+username +',loginstate=true')
        },3000)
        }
    function setCookie(obj,time){
        var newTime=new Date();
        var toTime=newTime.getTime()+time;
        newTime.setTime(toTime);
        var ut=newTime.toUTCString();

        for(let key in obj){
            document.cookie=key+"="+obj[key]+";expires="+ut+"path=/";
        }
    }
    // var obj={username:username,loginstate:true}

    function getCookie(){
        var Arr={};
        var cookieTex=document.cookie.split(';');

        for(let i=0;i<cookieTex.length;i++){
            var TotText=cookieTex[i].split('=');
            Arr[TotText[0].trim()]=TotText[1];
        }
        return Arr;
    }
    class Validate {
        constructor() {}
        static test(type, str) {
            let res = null;
            switch (type) {
                case "username": {
                    // 1. 用户名正则，4到16位（字母，数字，下划线，减号）
                    res = /^[A-Za-z0-9_-]{4,16}$/.test(str.replace(/(^\s*)|(\s*$)/g, ""));
                } break;
                case "password": {
                    // 2. 用户名正则，4到16位（字母，数字，下划线，减号）
                    res = /^[A-Za-z0-9_-]{4,16}$/.test(str.replace(/(^\s*)|(\s*$)/g, ""));
                } break;
            }
            return res;
        }
    }
    
    
    
    
})();

