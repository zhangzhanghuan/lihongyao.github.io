(function() {
    // 1. 随机验证码
    // var sureBtn = document.querySelector('.btn');
    var allinput = document.querySelectorAll('.input')
    var oSpan = $('.verification-code-box > span')
    var goods ={};
    var _error = false;
    oSpan.textContent = getVerificationCode(7);
    oSpan.onclick = function() {
        oSpan.textContent = getVerificationCode(7);
    }
    // 2. 表单验证
    var valObj = {};
    var inputs = Array.from($('.myForm input', true));
    inputs.forEach(function(input) {
        // 实时验证
        input.oninput = function() {
            // this -> 
            var val  = this.value;
            var flag = false;
            // 存储表单输入的数据
            valObj[this.id] = val;
            switch(this.id) {
                case "username": {
                    // 只能包含字母、数字、下划线且字符个数不少于5个不多于10个
                    if(/^\w{5,10}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "firPassword": {
                    // 只能包含字母、数字、下划线、*，且不少于6个字符不多于10个字符
                    if(/^[\w*]{6,10}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "secPassword": {
                    if(val === valObj.firPassword) {
                        flag = true;
                    }
                } break;
                case "email": {
                    if(/^\w+@[A-Za-z\d]+\.(com|cn)$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "tel": {
                    // 这里只匹配152/199号码段
                    if(/^(152|199|154|167)\d{8}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "verificationCode": {
                    var reg = new RegExp(oSpan.textContent, "i");
                    if(reg.test(val)) {
                        flag = true;
                    }
                } break;
            }
            
            // 判断是否显示异常提示
            if(flag) {
                //输入正确时，不显示红色的字，不会显示提示框
                this.parentElement.classList.remove("error");
                _error = false;
                  
            }else{
                //输入错误时，显示红色的字，会显示提示框；
                this.parentElement.classList.add("error");
              _error = true;

            }
           
          console.log(_error);

            
            var name= document.getElementById('username');
            var password = document.getElementById('firPassword');
            var code =document.getElementById('verificationCode');
            var Email =document.getElementById('secPassword');
            var Tel=document.getElementById('tel');
            var Selpassword =document.getElementById('secPassword');

            
           

                var register = document.querySelector('.register-btn')
                
                // 监听输入框的变化
                //异常处理
                var   Name= name.value,
                      Password =password.value,
                      Code=code.value,
                      Selpassword =secPassword,
                      Tel =tel.value,
                      Email =email.value;
                var user = {
                    name,
                    password
                };


            register.onclick = function(){
             
                if(_error){
                    new LHYAlertView({
                        type:"alert",
                        message:"格式错误，请检查！！！",
                    });
                    _error = false;
                   
                }else if(!Name|| !Password || !Code ||!Selpassword ||!Tel ||!Email ){
                    new LHYAlertView({
                        type:"alert",
                        message:"请完善信息！！！",
                    });
                  
                }else{
                    new LHYAlertView({
                        type:"alert",
                        message:"注册成功，请到登录页面登录！！！",
                        autoClose:3000
                    })
                //    return;
                }
            console.log(valObj);
            localStorage.User = JSON.stringify(valObj);

               
               
           

                // // 判断本地是否已经存在该用户
                // register.onclick = function(){

                //     for(var i = 0, len = valObj.length; i < len; i++) {
                //         if(User[i].username === valobj.username) {
                //             alert("该用户已经被注册！");
                //             return;
                //         }
                //     }
                // }
 
                //  var stu={
                //      name,password,
                //  }
               
                //  location.href="index.html";
                
           
               
            }
            
        }

       

        
    });


    
    
})();