
(function(){
   //改变首页登录的内容
   console.log(document.cookie)

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
 
})();


// 懒加载
(function() {
    // 1. 获取动画元素
    var aniWrappers = Array.from(document.querySelectorAll('.animation-wrapper'));
    console.log(aniWrappers)
    // 2. 获取窗口高度
    var _height    = window.innerHeight;
    // 3. 记录当前滚动的距离
    var _offset    = 0;
    // 4. 记录动画元素在页面中的位置的集合
    var _locations = [];
    // 5. 将整个动画元素在页面中的位置存放到_locations集合中
    aniWrappers.forEach(function(aniWrapper, index) {
        _locations[index] = aniWrapper.offsetTop;
    });
    // 6. 监听页面滚动
    window.onscroll = function(){
        // 更新页面滚动的距离
        _offset = document.body.scrollTop || document.documentElement.scrollTop;
        // 遍历元素判断是否已经达到动画元素所在的位置
        // 如果达到动画元素所在的位置，那么就让其执行动画效果
        // 也就是说我们可直接添加.running，因为在.running中
        // 我们将动画的状态设置成了 running 即播放。
        _locations.forEach(function(location, index) {
            if(_height + _offset > location + 300) {
                aniWrappers[index].classList.add('running');
            }
        });
    };
    var P=document.querySelector('.txtw1 .word');
    var Strong=document.querySelector('.down_des .fadeInbottom');
    var Strong1=document.querySelector('.down_des .fadeIntop');    
    var i=0;
    var j=0;
    var str="美食杰系列APP";
    var str1="您的美食定制管家";
    Strong.innerHTML="";
    var cols=["red","green","blue","pink","black"];
    var sizes=["small","normal","big"];
    var s=setInterval(function(){
        // var RandColr=Math.round(Math.random()*4);
        // var RandSiz=Math.round(Math.random()*2);
        Strong.innerHTML+=`<span ">${str[i++]}</span>`
        Strong1.innerHTML+=`<span ">${str1[j++]}</span>`
        if(i==str.length && j==str1.length) clearInterval(s);
    },500)

})();


//  // 回到顶部按钮
//  window.onload = function(){
//     var btn = document.getElementById('btn');
//     var timer = null;
//     var isTop = true;
//     //获取页面可视区高度
//     var clientHeight = document.documentElement.clientHeight;
     
//     //滚动条滚动时触发
//     window.onscroll = function() {
//     //显示回到顶部按钮
//       var osTop = document.documentElement.scrollTop || document.body.scrollTop;
//       if (osTop >= clientHeight) {
//         btn.style.opacity = 1;
//       } else {
//         btn.style.opacity = 0;
//       };
//     //回到顶部过程中用户滚动滚动条，停止定时器
//       if (!isTop) {
//         clearInterval(timer);
//       };
//       isTop = false;
   
//     };
   
//     btn.onclick = function() {
//       //设置定时器
//       timer = setInterval(function(){
//         //获取滚动条距离顶部高度
//         var osTop = document.documentElement.scrollTop || document.body.scrollTop;
//         var ispeed = Math.floor(-osTop / 7);
//         document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
//         //到达顶部，清除定时器
//         if (osTop == 0) {
//           clearInterval(timer);
//         };
//         isTop = true;
         
//       },30);
//     };
//   };
 