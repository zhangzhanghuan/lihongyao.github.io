(function() {
    // 1. 随机验证码
    var sureBtn = document.querySelector('.btn');
    var name= document.getElementById('username');
    var password = document.getElementById('firPassword');
    var allinput = document.querySelectorAll('.input');
    var _error = false;
    // var oSpan = $('.verification-code-box > span')
    // oSpan.textContent = getVerificationCode(7);
    // oSpan.onclick = function() {
    //     oSpan.textContent = getVerificationCode(7);
    // }
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
                    if(/^(152|199)\d{8}$/.test(val)) {
                        flag = true;
                    }
                } break;
                
            }
            // 判断是否显示异常提示
            if(flag) {
                this.parentElement.classList.remove("error");
                _error =false;
            }else{
                this.parentElement.classList.add("error");
                _error =true;
            }
          
          
// if(user.length== 0){
//                 new LHYAlertView({
//                     type:"alert",
//                     message:"该账号未注册，请注册！！！",
//                 });
//               }
            //获取对象
            // debugger;
          var user =  [];
          if(localStorage.User){
              user = JSON.parse(localStorage.User);
          }else{
              user=[];
          }
          sureBtn.onclick =function(){
              for(i=0; i<user.length;i++){
                 if(user[i].username=name.value) {
                     new LHYAlertView({
                         type:"alert",
                         message:"登录成功！！！",
                     })
                 }
              }
          }
            
             var Name= name.value;
             var   Password =password.value;
            // var isEmpty = false;
            // var signhidden=$(".sign-lo")
            // var signbtn=$(".sign-btn");
            // var signcancle=$(".sign-cancle");
                
                   // 监听输入框的变化
            sureBtn.onclick = function(){
                
                for(var i=0,len =allinput.length;i <len;i++){
                    if(allinput[i].value.length == 0){
                        isEmpty = true;
                        break;
                    }
                    
                }
                if(_error){
                    new LHYAlertView({
                        type:"alert",
                        message:"格式错误，请检查！！！",
                    });
                    _error = false;
                   
                }else if(!valObj || !Name || !Password ){
                    new LHYAlertView({
                        type:"alert",
                        message:"请完善信息！！！",
                    });
                    return;
                }else{
                    new LHYAlertView({
                        type:"alert",
                        message:"登录成功！！！",
                        aotoClose:3000
                    })

                    // signbtn.textContent="已登录";
                    // signhidden.textContent="ID:"+valObj;
                    // // mask.style.display="none";
                    // signcancle.style.display="block";
                }
                //    localStorage.User = JSON.stringify(valObj);
                   User=window.localStorage.getItem('User');
                   console.log(User);

                   
               
                
              
                location.href="index.html";
                
               
            }
            
        }

      
       
       
       
    });

    
    
})()