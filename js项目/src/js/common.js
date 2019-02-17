
    function fn(e){
        var v=e.target.innerText;
        if(v=="首页"){
            location.href="/index.html"
        }
    }
    
    // var totalStr=decodeURIComponent(location.search)
    // var state=totalStr.substring(totalStr.indexOf("=")+1,totalStr.indexOf(","));
    console.log(document.cookie)
    
    //改变首页登录的内容
    var qqLogin=document.querySelector('.qq_login');
    var weiboLogin=document.querySelector('.weibo_login')
    var login=document.querySelector('.login_index');
    var register=document.querySelector('.register_index');
    var Savee=document.querySelector('.a_save');
    console.log(login.innerText)
    if(localStorage.isLogin=='true'){
        qqLogin.style.display="none";
        weiboLogin.style.display="none";
        login.innerText="用户名:"+document.cookie.slice(9);
        Savee.style.display='block';
        register.innerText="注销"; 
        register.className="black";
        function addImg(){
            var img=document.createElement('img');
            var Class=document.createAttribute('class');
            Class.value="touxiang";
            img.setAttributeNode(Class)
            img.src="https://s1.c.meishij.net/images/default/tx2_2.png"
            login.appendChild(img);
        }
       addImg()
        register.onclick=function(){
            localStorage.isLogin=false;
            this.innerText="注册";
            register.className="normal";
            register.onclick=function(){
                location.href='/page/register.html'
            }
            login.innerText="登录";
            qqLogin.style.display="block";
            weiboLogin.style.display="block";
            Savee.style.display='none';
        }
    }
    if(login.innerText=='登录' || register.innerText=="注册"){
        register.removeClass="black";
        register.onclick=function(){
            location.href='/page/register.html'
        }
    }
    login.onclick=function(){
        console.log(document.cookie.slice(9))
        if(login.innerText=="用户名:"+document.cookie.slice(9)){
            new LHYAlertView({
                type:"alert",
                message:'你已经登录过，不需要再登录,点击注销，重新登录'
            })
         }else{
        location.href='/page/loginRegister.html'
         }
    }
   

 // 回到顶部按钮
 window.onload = function(){
    var btn = document.getElementById('btn');
    var timer = null;
    var isTop = true;
    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight;
     
    //滚动条滚动时触发
    window.onscroll = function() {
    //显示回到顶部按钮
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= clientHeight) {
        btn.style.opacity = 1;
      } else {
        btn.style.opacity = 0;
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
        var ispeed = Math.floor(-osTop / 7);
        document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
        //到达顶部，清除定时器
        if (osTop == 0) {
          clearInterval(timer);
        };
        isTop = true;
         
      },30);
    };
  };
// 获取DOM
function ee(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

/**
 * 获取非行内样式
 * @param el     目标元素节点
 * @param attr   对应属性键（key）
 * @returns {*}  对应属性值（value）
 */
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}

// 轮播图
function scroll() {
    // 1. 获取DOM元素 
    var _prevBtn     = ee('.scroll .prev');
    var _nextBtn     = ee('.scroll .next');
    var _idots       = ee('.scroll .idot', true);
    var _wrapper     = ee('.scroll-flash-wrapper');
    var _imgBox      = ee('.scroll .img-box');
    var _curIndex    = 1; 
    var _timer       = null;  // 存储定时器/自动播放使用
    var _isAnimating = false; // 记录动画状态
    var _kWidth      = parseInt(getStyle(_wrapper, "width"));
    // 2. 自适应处理
    // 由于元素绝对定位脱离文档流，故父级元素无法获取子元素高度
    // 但我们可以通过脚本获取子元素高度之后赋值给容器即可
    _wrapper.style.height  = getStyle(_imgBox, "height");
    _imgBox.style.left     = "-" + _curIndex * _kWidth + "px";

    // 监听窗口变化/重新计算容器尺寸
    window.onresize = function() {
        _kWidth   = parseInt(getStyle(_wrapper, "width"));
        _wrapper.style.height  = getStyle(_imgBox, "height");
    }
    // 3. 左右切换
    _prevBtn.onclick = function() {
        // 异常处理
        // 当上一次切换动画还为结束时，禁止切换
        if(_isAnimating) { return; }
        // left 在当前位置的基础上(+|-)kWidth
        if(_curIndex === 1) {
            _curIndex = 6;
        }else {
            _curIndex--;
        }
        tab(+_kWidth);
        updateIdot();
    }
    _nextBtn.onclick = function() {
        if(_isAnimating) { return; }
        if(_curIndex === 6) {
            _curIndex = 1;
        }else {
            _curIndex++;
        }

        tab(-_kWidth);
        updateIdot();
    }
    // 4. 小圆点切换
    _idots.forEach(function(idot, index) {
        idot.dataset.index = index + 1;
        idot.onclick = function() {
            var index = parseInt(this.dataset.index);
            if(index === _curIndex || _isAnimating) {
                return;
            }
            // 计算偏移
            // -(desIndex - curIndex) * _kWidth
            var offset = -(index - _curIndex) *  _kWidth;
            // 切换
            tab(offset);
            // 更新下标显示
            _curIndex = index ;
            // 更新小圆点显示
            updateIdot();
        }
    });
    // 5. 自动播放
    play();
    // 6. 异常处理 
    // 鼠标移入 停止定时器
    // 鼠标移出 启动定时器
    _wrapper.onmouseenter = stop;
    _wrapper.onmouseleave = play;

    // 7. 函数封装
    function play() {
        _timer = setInterval(function() {
            _nextBtn.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(_timer);
    }
    function updateIdot() {
        for(var i = 0, len = _idots.length; i < len; i++) {
            if(_idots[i].classList.contains('selected')) {
                _idots[i].classList.remove('selected');
                break;
            }
        }
        _idots[_curIndex - 1].classList.add('selected');
    }
    function tab(offset) {
        // 更新动画状态
        _isAnimating = true;
        // 滚动效果
        var duration = 600,
            interval = 10,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);
        var curLeft  = parseInt(_imgBox.style.left);
        var desLeft  = curLeft + offset;
        var isScroll = false;
        var t = setInterval(function() {
            // 更新当前偏移
            // offset < 0  左 curLeft > desLeft 
            // offset > 0  右 curLeft < desLeft
            curLeft  = parseInt(_imgBox.style.left);
            isScroll = (offset < 0 && curLeft > desLeft) || (offset > 0 && curLeft < desLeft);
            if(isScroll) {
                _imgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                // 更新动画状态
                _isAnimating = false;
                // 更新偏移
                _imgBox.style.left = desLeft + 'px';
                // 无限滚动
                if(desLeft < -6 * _kWidth) {
                    _imgBox.style.left = -_kWidth + 'px';
                }else if(desLeft > -_kWidth) {
                    _imgBox.style.left = -6 * _kWidth + 'px';
                }
            }
        }, interval);
    }
}

function showDes(){
    var MoreP=document.querySelector('.login_p1');
    var HideMo=document.querySelector('.hide_more_login');
    if(HideMo.style.display=="none" && MoreP.innerText=="更多登录方式√")
    MoreP.innerText="收起^" ,   
    console.log("nihao"),
    HideMo.style.display="block";
    else{
    HideMo.style.display="none",
    MoreP.innerText="更多登录方式√"

    }
}