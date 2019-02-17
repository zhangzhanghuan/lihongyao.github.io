(function(){
       // 表单验证
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

    var Btn=document.querySelector('.login-register-btn');
    //  点击注册按钮
    Btn.onclick=function(){
        let isThrough = true;
        let $inputs =  $(".input-box input") ;
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
        }else
            
           // 1.创建AJAX对象
    var myajax = new XMLHttpRequest();
    // 2.打开AJAX请求
    myajax.open("post", "http://127.0.0.1:8081/registry");
    myajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//必须加这行代码
    var username=document.querySelector("input[name=username]").value;
    var psw=document.querySelector("input[name=psw]").value;
    var email=document.querySelector("input[name=email]").value;
    var tel=document.querySelector("input[name=tel]").value;
    // 3.发送AJAX请求
    myajax.send("username="+username+"&psw="+ psw+"&email="+email+"&tel="+tel);
    // var _isLogin = true;
    // 4.监听请求状态
    myajax.onreadystatechange = function () {
        if (myajax.readyState == 4) { //判断请求是否完成
            if (myajax.status == 200) { //判断请求是否成功
                var val = myajax.responseText; //获取请求返回的数据
                console.info(val);
                //把字符串数据转成对象数组
                var ar=JSON.parse(val);
                console.log(ar);
                if(ar.state){
                        new LHYAlertView({
                                type: "alert",
                                message:"注册成功",
                                autoclosest:5000
                            })

                    location.href='../../page/loginRegister.html'
                   
                }else{ 
                    new LHYAlertView({
                    type:"alert",
                    message:"注册失败，原因："+ar.mes,
                    autoclosest:2000
                })
                return;
            }      
            }
        }
    }
    }    
    // 类方法正则表达式
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
                case "email": {
                    // 3. 邮箱
                    res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str.replace(/(^\s*)|(\s*$)/g, ""));
                } break;
                case "tel": {
                    // 4. 手机 
                    res = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str.replace(/(^\s*)|(\s*$)/g, ""));
                } break;
            }
            return res;
        }
    }
    //通过定时器打印一段文字
    var P=document.querySelector('.welcome');
    var i=0;
    var str="欢迎来到美食杰，马上开启你的美食之旅吧！！！"
    P.innerHTML="";
    //颜色数组
    var cols=['red','green','blue'];
    //尺寸分组
    var Size=['small','middle','big'];
    var s=setInterval(function(){
        var randomNum1=Math.round(Math.random()*2);
        var randomNum2=Math.round(Math.random()*2);
        P.innerHTML+=`
        <span class="${cols[randomNum1]} ${Size[randomNum2]}">${str[i++]}</span>
        `;
        if(i==str.length) clearInterval(s);
    },500)
})();


 