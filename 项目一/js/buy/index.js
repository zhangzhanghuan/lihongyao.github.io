
var menuss    = Array.from(document.querySelectorAll('.tab-menu-1 li'));
     var contentss = Array.from(document.querySelectorAll('.tab-content-1 span'));
     
     // 2. 为菜单项添加点击事件切换内容
     menuss.forEach(function(menu, index) {
         // 添加自定义下标属性
         menu.dataset.index = index;
         menu.onclick = function() {
             // 获取点击菜单项的下标
             var index = this.dataset.index;
             // 清除上一次的样式
             for(var i = 0, len = menuss.length; i < len; i++) {
                 if(menuss[i].classList.contains('selectedd')) {
                     menuss[i].classList.remove('selectedd');
                    contentss[i].classList.remove('show');
                 }
             }
             // 切换选中菜单
             menuss[index].classList.add('selectedd');
             // 切换内容
            contentss[index].classList.add('show');
         }
     });

     var banlance = document.querySelector('.go-balance');
     banlance.onclick =function(){
        new LHYAlertView({
            type:"alert",
            message:"您当前未登录[游客状态]",
        });
        location.href="login.html";
    
       
       
     }

// var alertbtn = document.querySelector('alert-sure-btn');


      //  底部
      // 3. 异步加载数据
    // 3.1 获取数据
    var footer1 = document.querySelector('.footer-image-list');
    $.ajax({
        url:"./json/footer-json/footer.json",
        
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                    <li>
                    <a href="https://baidu.com"><img src="${obj.img}"></a>
                    <p class="footer-image-p">${obj.des}</p>
                </li>`
                
                
            });
           footer1.innerHTML = htmlStr;

        }
    })

    // 底部logo
    var log1 = document.querySelector('.log-list');
    $.ajax({
        url:"./json/footer-json/log.json",
        
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                    <li>
                    <img src="${obj.img}" title="${obj.title}">
                   
                </li>`
                
                
            });
           log1.innerHTML = htmlStr;

        }
    })


     