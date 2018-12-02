// 狗狗



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
        
        menu.onmouseleave =function(){
            //获取点击菜单项的下标
        var index =this.dataset.index;
            for(var i=0,len =menus.length;i<len;i++){
                if(menus[i].classList.contains('selected')){
                    menus[i].classList.remove('selected');
                    contents[i].classList.remove('show');
                }
                
            }
            
        }
    }

})

var dogdog1 =document.querySelector('.dog-dog');
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
        dogdog1.innerHTML = htmlStr;
    }
})



 // 1. 获取DOM元素
 var container = getEl('.container');
 var smallBox  = getEl('.small-box');
 var mirror    = getEl('.mirror');
 var smallImg  = getEl('.small-img');
 var bigBox    = getEl('.big-box');
 var bigImg    = getEl('.big-img');
 // 2. 更新大图尺寸
 var _width  = parseInt(getStyle(smallImg, "width"))   * parseInt(getStyle(bigBox, "width"))   / parseInt(getStyle(mirror, "width"));
 var _height = parseInt(getStyle(smallImg, "height"))  * parseInt(getStyle(bigBox, "height"))  / parseInt(getStyle(mirror, "height"));
 bigImg.style.width  = _width + "px";
 bigImg.style.height = _height + "px";
 console.log(window);
 // 3. 鼠标移

 smallBox.onmousemove = function(event) {
     debugger
     // 3.1. 计算放大镜的位置
     var _left = event.clientX - container.offsetLeft - smallBox.offsetLeft - parseInt(getStyle(mirror, "width")) / 2 ;
     var _top  = event.clientY - container.offsetTop - smallBox.offsetTop - parseInt(getStyle(mirror, "height")) / 2;
     // 3.2. 计算放大镜/大图可移动的最大距离
     var _mirrorMaxH = parseInt(getStyle(smallImg, "width"))  - parseInt(getStyle(mirror, "width"));
     var _mirrorMaxV = parseInt(getStyle(smallImg, "height")) - parseInt(getStyle(mirror, "height"));
     var _bigImgMaxH = parseInt(getStyle(bigImg, "width"))    - parseInt(getStyle(bigBox, "width"));
     var _bigImgMaxV = parseInt(getStyle(bigImg, "height"))   - parseInt(getStyle(bigBox, "height"));

     // 3.3. 异常处理
     // 水平
     if(_left < 0) {
         _left = 0;
     }else if(_left > _mirrorMaxH) {
         _left = _mirrorMaxH;
     }
     // 垂直
     if(_top < 0) {
         _top = 0;
     }else if(_top > _mirrorMaxV) {
         _top = _mirrorMaxV;
     }
     // 3.4. 更新放大镜的位置
     mirror.style.top  = _top  + "px";
     mirror.style.left = _left + "px";
     // 3.5. 计算大图移动的距离
     // 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
     bigImg.style.top  = -_top  * _bigImgMaxH / _mirrorMaxH + "px";
     bigImg.style.left = -_left * _bigImgMaxV / _mirrorMaxV + "px";
 }
