(function(){


    
    
    var menus     = Array.from(document.querySelectorAll('.nav-2 li'));
    var contents  =Array.from(document.querySelectorAll('.tab-content section'));

    $.ajax({
        url: './json/goods.json',
        success: function(res) {
            console.log(res);
        }
    })
   
    //为菜单项添加点击事件切换内容
    menus.forEach(function(menu,index){
        //添加自定义下标属性
        menu.dataset.index = index;
        menu.onmouseenter =function(){
            //获取点击菜单项的下标
            var index =this.dataset.index;
            //清除上一次的样式
            for(var i=0,len =menus.length;i<len;i++){
                if(menus[i].classList.contains('selected')){
                    menus[i].classList.remove('selected');
                    contents[i].classList.remove('show');
                }
                
            }
            //切换选中菜单
            menus[index].classList.add('selected');
            //切换内容
            contents[index].classList.add('show');
            
           
        }

    })
    


    // 轮播图
     // 淡入淡出效果
     fade();

      // 加载团队内容
    loadingTeam();
   


  

   


    // list-1-right

     // 1. 获取元素
    //  var main  = document.querySelector('.tab-wrapper-1');
     var menuss    = Array.from(document.querySelectorAll('.tab-menu-1 li'));
     var contentss = Array.from(document.querySelectorAll('.tab-content-1 span'));
     
     // 2. 为菜单项添加点击事件切换内容
     menuss.forEach(function(menu, index) {
         // 添加自定义下标属性
         menu.dataset.index = index;
         menu.onmouseenter = function() {
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
 



      // 1. 获取元素

    var menus1    = Array.from(document.querySelectorAll('.tab-menu-dog li'));
    var contents1 = Array.from(document.querySelectorAll('.tab-content-dog span'));
  
    // 2. 为菜单项添加点击事件切换内容
    menus1.forEach(function(menu, index) {
        // 添加自定义下标属性
        menu.dataset.index = index;
        menu.onmouseenter = function() {
            // 获取点击菜单项的下标
            var index = this.dataset.index;
            // 清除上一次的样式
            for(var i = 0, len = menus1.length; i < len; i++) {
                if(menus1[i].classList.contains('selected-dog')) {
                    menus1[i].classList.remove('selected-dog');
                    contents1[i].classList.remove('show');
                }
            }
            // 切换选中菜单
            menus1[index].classList.add('selected-dog');
            // 切换内容
            contents1[index].classList.add('show');
        }
    });
   
    // 狗狗
    var dogdog =document.querySelector('.dog-dog');
    $.ajax({
        url:"./json/dog.json",
        success:function(good){
            var htmlStr = "";
            good.forEach(function(obj,index){
                htmlStr +=`
                <li>
                <img src="${obj.img}">
                <p>${obj.des}</p>
                <span>${obj.address}</span>
            </li>
          
            
                `
            });
            dogdog.innerHTML = htmlStr;
        }
    })



      // 3. 异步加载数据
    // 3.1 获取数据
    var ctList = document.querySelector('.ct-list');
    $.ajax({
        url:"./json/goods.json",
        
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li >
                        <a href="项目一/details.html">
    
    <img src="${obj.img}" onmouseenter="myfunction()" >
                        </a>
                            <p class="title">${obj.title}</p>
                            <p class="des">${obj.des}</p>
                        </li>`
                       
                
                
            });
            ctList.innerHTML = htmlStr;
            

        }
    })


    //进口狗粮
    var ctListt1 = document.querySelector('.ct-list-1');
    $.ajax({
        url:"./json/jingkou.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                            <img src="${obj.img}" alt="">
                            <p class="des">${obj.des}</p>
                            <p class="price">${obj.price}</p>
                        </li>`
                
                
            });
            ctListt1.innerHTML = htmlStr;

        }
    })
   //国产狗粮
   var ctList2 = document.querySelector('.ct-list-2');
   $.ajax({
       url:"./json/guochan.json",
       // dataType:"jsonp",
       success: function(goods) {
           var htmlStr = "";
           goods.forEach(function(obj, index){
            
                   htmlStr += `
                       <li>
                           <img src="${obj.img}" alt="">
                           <p class="des">${obj.des}</p>
                           <p class="price">${obj.price}</p>
                       </li>`
               
               
           });
           ctList2.innerHTML = htmlStr;

       }
   })

    //处方狗粮
    var ctList3 = document.querySelector('.ct-list-3');
    $.ajax({
        url:"./json/chufang.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                        <a href="../details.html"><img src="${obj.img}" alt=""></a>
                            <p class="des">${obj.des}</p>
                            <p class="price">${obj.price}</p>
                        </li>`
                
                
            });
            ctList3.innerHTML = htmlStr;
 
        }
    })

    //品牌
    var ctList4 = document.querySelector('.pingpai');
    $.ajax({
        url:"./json/pingpai.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                            <img src="${obj.img}" alt="">
                        </li>`
                
                
            });
            ctList4.innerHTML = htmlStr;
 
        }
    })












     // 1. 获取元素

     var menus2   = Array.from(document.querySelectorAll('.tab-menu-dog-1 li'));
     var contents2 = Array.from(document.querySelectorAll('.tab-content-dog-1 span'));
   
     // 2. 为菜单项添加点击事件切换内容
     menus2.forEach(function(menu, index) {
         // 添加自定义下标属性
         menu.dataset.index = index;
         menu.onmouseenter = function() {
             // 获取点击菜单项的下标
             var index = this.dataset.index;
             // 清除上一次的样式
             for(var i = 0, len = menus2.length; i < len; i++) {
                 if(menus2[i].classList.contains('selected-dog-1')) {
                     menus2[i].classList.remove('selected-dog-1');
                     contents2[i].classList.remove('show');
                 }
             }
             // 切换选中菜单
             menus2[index].classList.add('selected-dog-1');
             // 切换内容
             contents2[index].classList.add('show');
         }
     });
    
     
 
       // 3. 异步加载数据
     // 3.1 获取数据
     var ctList1 = document.querySelector('.ct1-list');
     $.ajax({
         url:"./json/json1/goods1.json",
         
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="title">${obj.title}</p>
                             <p class="des">${obj.des}</p>
                         </li>`
                 
                 
             });
             ctList1.innerHTML = htmlStr;
 
         }
     })
 
 
     //进口狗粮
     var ctList5 = document.querySelector('.ct1-list-1');
     $.ajax({
         url:"./json/json1/jingkou1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList5.innerHTML = htmlStr;
 
         }
     })
    //国产狗粮
    var ctList6 = document.querySelector('.ct1-list-2');
    $.ajax({
        url:"./json/json1/guochan1.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                            <img src="${obj.img}" alt="">
                            <p class="des">${obj.des}</p>
                            <p class="price">${obj.price}</p>
                        </li>`
                
                
            });
            ctList6.innerHTML = htmlStr;
 
        }
    })
 
     //处方狗粮
     var ctList7 = document.querySelector('.ct1-list-3');
     $.ajax({
         url:"./json/json1/chufang1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList7.innerHTML = htmlStr;
  
         }
     })
 
     //品牌
     var ctList8 = document.querySelector('.pingpai1');
     $.ajax({
         url:"./json/json1/pingpai1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                         </li>`
                 
                 
             });
             ctList8.innerHTML = htmlStr;
  
         }
     })


// 狗狗医疗与保健
      // 1. 获取元素

      var menus3   = Array.from(document.querySelectorAll('.tab-menu-dog-2 li'));
      var contents3 = Array.from(document.querySelectorAll('.tab-content-dog-2 span'));
    
      // 2. 为菜单项添加点击事件切换内容
      menus3.forEach(function(menu, index) {
          // 添加自定义下标属性
          menu.dataset.index = index;
          menu.onmouseenter = function() {
              // 获取点击菜单项的下标
              var index = this.dataset.index;
              // 清除上一次的样式
              for(var i = 0, len = menus3.length; i < len; i++) {
                  if(menus3[i].classList.contains('selected-dog-2')) {
                      menus3[i].classList.remove('selected-dog-2');
                      contents3[i].classList.remove('show');
                  }
              }
              // 切换选中菜单
              menus3[index].classList.add('selected-dog-2');
              // 切换内容
              contents3[index].classList.add('show');
          }
      });
     
      
  
        // 3. 异步加载数据
      // 3.1 获取数据
      var ctListt2 = document.querySelector('.ct2-list');
      $.ajax({
          url:"./json/json2/goods2.json",
          
          success: function(goods) {
              var htmlStr = "";
              goods.forEach(function(obj, index){
               
                      htmlStr += `
                          <li>
                              <img src="${obj.img}" alt="">
                              <p class="title">${obj.title}</p>
                              <p class="des">${obj.des}</p>
                          </li>`
                  
                  
              });
              ctListt2.innerHTML = htmlStr;
  
          }
      })
  
  
      //进口狗粮
      var ctList9 = document.querySelector('.ct2-list-1');
      $.ajax({
          url:"./json/json1/jingkou1.json",
          // dataType:"jsonp",
          success: function(goods) {
              var htmlStr = "";
              goods.forEach(function(obj, index){
               
                      htmlStr += `
                          <li>
                              <img src="${obj.img}" alt="">
                              <p class="des">${obj.des}</p>
                              <p class="price">${obj.price}</p>
                          </li>`
                  
                  
              });
              ctList9.innerHTML = htmlStr;
  
          }
      })
     //国产狗粮
     var ctList10 = document.querySelector('.ct2-list-2');
     $.ajax({
         url:"./json/json1/guochan1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList10.innerHTML = htmlStr;
  
         }
     })
  
      //处方狗粮
      var ctList11 = document.querySelector('.ct2-list-3');
      $.ajax({
          url:"./json/json1/chufang1.json",
          // dataType:"jsonp",
          success: function(goods) {
              var htmlStr = "";
              goods.forEach(function(obj, index){
               
                      htmlStr += `
                          <li>
                              <img src="${obj.img}" alt="">
                              <p class="des">${obj.des}</p>
                              <p class="price">${obj.price}</p>
                          </li>`
                  
                  
              });
              ctList11.innerHTML = htmlStr;
   
          }
      })
  
      //品牌
      var ctList12 = document.querySelector('.pingpai2');
      $.ajax({
          url:"./json/json2/pingpai2.json",
          // dataType:"jsonp",
          success: function(goods) {
              var htmlStr = "";
              goods.forEach(function(obj, index){
               
                      htmlStr += `
                          <li>
                              <img src="${obj.img}" alt="">
                          </li>`
                  
                  
              });
              ctList12.innerHTML = htmlStr;
   
          }
      })
 

    //   狗狗日用

     // 1. 获取元素

     var menus4   = Array.from(document.querySelectorAll('.tab-menu-dog-3 li'));
     var contents4 = Array.from(document.querySelectorAll('.tab-content-dog-3 span'));
   
     // 2. 为菜单项添加点击事件切换内容
     menus4.forEach(function(menu, index) {
         // 添加自定义下标属性
         menu.dataset.index = index;
         menu.onmouseenter = function() {
             // 获取点击菜单项的下标
             var index = this.dataset.index;
             // 清除上一次的样式
             for(var i = 0, len = menus4.length; i < len; i++) {
                 if(menus4[i].classList.contains('selected-dog-3')) {
                     menus4[i].classList.remove('selected-dog-3');
                     contents4[i].classList.remove('show');
                 }
             }
             // 切换选中菜单
             menus4[index].classList.add('selected-dog-3');
             // 切换内容
             contents4[index].classList.add('show');
         }
     });
    
     
 
       // 3. 异步加载数据
     // 3.1 获取数据
     var ctListt3 = document.querySelector('.ct3-list');
     $.ajax({
         url:"./json/json3/goods3.json",
         
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="title">${obj.title}</p>
                             <p class="des">${obj.des}</p>
                         </li>`
                 
                 
             });
             ctListt3.innerHTML = htmlStr;
 
         }
     })
 
 
     //进口狗粮
     var ctList13 = document.querySelector('.ct3-list-1');
     $.ajax({
         url:"./json/json1/jingkou1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList13.innerHTML = htmlStr;
 
         }
     })
    //国产狗粮
    var ctList14 = document.querySelector('.ct3-list-2');
    $.ajax({
        url:"./json/json1/guochan1.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                            <img src="${obj.img}" alt="">
                            <p class="des">${obj.des}</p>
                            <p class="price">${obj.price}</p>
                        </li>`
                
                
            });
            ctList14.innerHTML = htmlStr;
 
        }
    })
 
     //处方狗粮
     var ctList15 = document.querySelector('.ct3-list-3');
     $.ajax({
         url:"./json/json1/chufang1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList15.innerHTML = htmlStr;
  
         }
     })
 
     //品牌
     var ctList16 = document.querySelector('.pingpai3');
     $.ajax({
         url:"./json/json3/pingpai3.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                         </li>`
                 
                 
             });
             ctList16.innerHTML = htmlStr;
  
         }
     })



      //   狗狗日用

     // 1. 获取元素

     var menus5   = Array.from(document.querySelectorAll('.tab-menu-dog-4 li'));
     var contents5 = Array.from(document.querySelectorAll('.tab-content-dog-4 span'));
   
     // 2. 为菜单项添加点击事件切换内容
     menus5.forEach(function(menu, index) {
         // 添加自定义下标属性
         menu.dataset.index = index;
         menu.onmouseenter = function() {
             // 获取点击菜单项的下标
             var index = this.dataset.index;
             // 清除上一次的样式
             for(var i = 0, len = menus5.length; i < len; i++) {
                 if(menus5[i].classList.contains('selected-dog-4')) {
                     menus5[i].classList.remove('selected-dog-4');
                     contents5[i].classList.remove('show');
                 }
             }
             // 切换选中菜单
             menus5[index].classList.add('selected-dog-4');
             // 切换内容
             contents5[index].classList.add('show');
         }
     });
    
     
 
       // 3. 异步加载数据
     // 3.1 获取数据
     var ctListt4 = document.querySelector('.ct4-list');
     $.ajax({
         url:"./json/json4/goods4.json",
         
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="title">${obj.title}</p>
                             <p class="des">${obj.des}</p>
                         </li>`
                 
                 
             });
             ctListt4.innerHTML = htmlStr;
 
         }
     })
 
 
     //进口狗粮
     var ctList17 = document.querySelector('.ct4-list-1');
     $.ajax({
         url:"./json/json1/jingkou1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                             <img src="${obj.img}" alt="">
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList17.innerHTML = htmlStr;
 
         }
     })
    //国产狗粮
    var ctList18 = document.querySelector('.ct4-list-2');
    $.ajax({
        url:"./json/json1/guochan1.json",
        // dataType:"jsonp",
        success: function(goods) {
            var htmlStr = "";
            goods.forEach(function(obj, index){
             
                    htmlStr += `
                        <li>
                            <img src="${obj.img}" alt="">
                            <p class="des">${obj.des}</p>
                            <p class="price">${obj.price}</p>
                        </li>`
                
                
            });
            ctList18.innerHTML = htmlStr;
 
        }
    })
 
     //处方狗粮
     var ctList19 = document.querySelector('.ct4-list-3');
     $.ajax({
         url:"../json/json1/chufang1.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                         <a href="../details.html"><img src="${obj.img}" alt=""></a>
                             <p class="des">${obj.des}</p>
                             <p class="price">${obj.price}</p>
                         </li>`
                 
                 
             });
             ctList19.innerHTML = htmlStr;
  
         }
     })
 
     //品牌
     var ctList20= document.querySelector('.pingpai4');
     $.ajax({
         url:"./json/json4/pingpai4.json",
         // dataType:"jsonp",
         success: function(goods) {
             var htmlStr = "";
             goods.forEach(function(obj, index){
              
                     htmlStr += `
                         <li>
                         <a href="https://baidu.com"><img src="${obj.img}" alt=""></a>
                         </li>`
                 
                 
             });
             ctList20.innerHTML = htmlStr;
  
         }
     })


    //  底部
      // 3. 异步加载数据
    // 3.1 获取数据
    var footer = document.querySelector('.footer-image-list');
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
           footer.innerHTML = htmlStr;

        }
    })

    // 回到顶部按钮
    window.onload = function(){
        var btn = document.getElementById('btn');
        var timer = null;
        var isTop = true;
        //获取页面可视区高度
        var clientHeight = document.documentElement.clientHeight;
       console.log(clientHeight)
         
        //滚动条滚动时触发
        window.onscroll = function() {
        //显示回到顶部按钮
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (osTop >= clientHeight) {
            btn.style.display = "block";
          } else {
            btn.style.display = "none";
          };
        //回到顶部过程中用户滚动滚动条，停止定时器
          if (!isTop) {
            clearInterval(timer);
          };
          isTop = false;
       
        };
       
        btn.onclick = function() {
          //设置定时器
          timer = setInterval(function(){
            //获取滚动条距离顶部高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log('osTop '+osTop);
            var ispeed = Math.floor(-osTop / 7);
             console.log('ispeed '+ispeed);
            document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
            //到达顶部，清除定时器
            if (osTop == 0) {
              clearInterval(timer);
            };
            isTop = true;
             
          },30);
        };
      };


    // 底部logo
    var log = document.querySelector('.log-list');
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
           log.innerHTML = htmlStr;

        }
    })

    
// var isNot = document.querySelector('.isNot');
// var hidden = document.querySelector('.hideen');
// var a = location.hash.split('=')[1];
// if(a){
//     isNot.style.display = "none";
//     hidden.classList.add('block');
//     hidden.textContent = `还有用户：${a}`;
// }else{
//     isNot.style.display ='block';
//     hidden.classList.add('none');
// }






    // 从下往上的轮播图
    var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;    
    var rollCon = document.getElementById('rollCon');    
    var rollSubject = document.getElementById('rollSubject');    
    var rollCopy = document.getElementById('rollCopy');    
    rollCopy.innerHTML = rollSubject.innerHTML;   
    if(($('#rollSubject').height()>0)&&($('#rollSubject').height()<$('#rollCon').height())){       
        $('#rollCon').css('height',$('#rollSubject').height());       
        setInterval(Marquee, 50);    
        }else if(($('#rollSubject').height()>0)&&($('#rollSubject').height()>=$('#rollCon').height())){        
            setInterval(Marquee, 50);    }    
            function Marquee() {        
                                if ((rollCopy.offsetTop-rollSubject.offsetTop)<rollCon.scrollTop)            
                                rollCon.scrollTop =0;        
                                else {            
                                    rollCon.scrollTop++;       
                                }    
                        }   


            
        

  
})();
