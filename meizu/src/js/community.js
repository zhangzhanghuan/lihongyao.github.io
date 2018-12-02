
require("../less/common.less");
import './common';
require('../less/community.less');

import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';
$(function(){
     
    console.log(sessionStorage.isLogin);
    if(sessionStorage.isLogin){
        $('.user-login').text('个人中心');
        $('.register-btn').text('注销');
    }else{
        $('.user-login').text('立即登陆');
        $('.register-btn').text('立即注册');
    }

    // 点击注销
$(".register-btn").on("click",function(){
    sessionStorage.isLogin=false;
    sessionStorage.clear();
    $(".user-login").text("立即登陆");
    $(".register-btn").text("立即注册");
    $(".user-login").css({
        "color":"#515151"
    })
    $(".register-btn").css({
        "color":"#515151"
    })
})
$(".user-login").click(function(){
    location.href="./login.html"
})
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', 
        autoplay:true,
        loop: true, // 循环模式选项
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        a11y : {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            notificationClass: 'swiper-notification',
          },
          slidesPerView : 1,
          lazy: {
            loadPrevNext: true,
          },
          effect : 'coverflow',
        //   slidesPerView: 3,
          centeredSlides: true,


      });
     

      
    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    mySwiper.params.pagination.clickable = true ;
    //此外还需要重新初始化pagination
    mySwiper.pagination.destroy()
    mySwiper.pagination.init()
    mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');


    $('.show-box').mouseenter(function(){
        $('.box').slideDown();
        $('.san').show(0.1);
    });
    $('.last').mouseleave(function(){
        $('.box').hide();
    });
    $('.ban-main').mouseenter(function(){
        $('.ban').css('display',"block");
    });
    $('.ban-li').mouseleave(function(){
        $('.ban').hide();
    });
    $('.img').mouseenter(function(){
        $('.hide-img').css('display',"block");
    });
    $('.hide-img').mouseleave(function(){
        $(this).hide();
    });

    // 选项卡
    $('.last-p1').mouseenter(function(){
        $('.last-content-1').hide();
        $('.last-content').show();
     
    });
    $('.last-p2').mouseenter(function(){
        $('.last-content').hide()
        $('.last-content-1').show();
       
    })

    // 加载发帖数据
    $.ajax({
        url:"../json/community.json",
        type:"GET",
        success:function(data1){
            console.log(data1);
            var lis="";
            lis +=`<li class="person-li  ">
            <a>${data1.title}</a>
            <span class="person-li-li">
            <a class="odd">${data1.today}</a>
            <a>${data1.num1}</a>
            <a class="odd">${data1.history}</a>
            <a>${data1.num2}</a>
            <a class="odd">${data1.VIP}</a>
            <a>${data1.num3}</a>
            </span>
            
            </li>`
            data1.list2.forEach(data2 => {
                lis+=`<ul class="animation-ul">
                <li class="person-li-1 animation-item">
                <span class="person-li-1-img"><img class="animation-item" src="${data2.img}"></span>
                <span class="span-two">
                
               <p class="span-p"><a>${data2.say}<a></p>
                
               <span class="span-p1">
                    <p class="username">${data2.name}</p>
                

                    <span class="info-left">
                    <i class="iconfont">&#xe629;</i>
                    <p class="p1">${data2.num1}</p>
                    </span>

                    <span class="info-left">
                    <i class="iconfont">&#xe601;</i>
                    <p  class="p1">${data2.news}</p>
                    </span>
                </span>
                </span>
                </li>
                </ul>
                `
            });
            $('.person').html(lis);
        }
    });

    $.ajax({
        url:"../json/community.json",
        type:"GET",
        success:function(data){
            var lis="";
            data.list3.forEach((res)=>{
                lis+=`<li class="animation-item ">
                <img class=" animation-item" src="${res.img}">
                <span class="huodong-span">
                <p class="title">${res.title}</p>
                <p class="rth"><a>${res.description}</a></p>
                   <div class="huodong-div">
                   <div class="div">
                   <i class="iconfont">&#xe6e0;</i>
                   <p class="num">${res.num1}</p>
                   </div>
                   <div class="div div2">
                   <i class="iconfont">&#xe61e;</i>
                   <p class="num">${res.num2}</p>
                   </div>
                   <p class="num space">${res.name}</p>
                   <p class="num space">${res.day}</p>
                   <p class="num do">${res.do}</p>
                   </div>
                <p class="huodong-p">${res.say}</p>
                <i class="iconfont weibo">&#xe63e;</i>
                
                </span>
                </li>`
            });
            $('.huodong').html(lis);
            
        }
    });
    $('.huodong li').each(function(res){
        console.log(res);
        
    })

    $()
    $.ajax({
        url:"../json/community.json",
        type:"GET",
        success:function(goods){
            var lis="";
            lis+=`<div class="new-title">${goods.list4.title}</div>`
            goods.list4.list5.forEach(function(good){
                lis+=`<div class="list">
                <img src="${good.img}" title="${good.say}">
                <div class="new-div">
                <p class="p-title">${good.name}</p>
                <p class="summary">${good.description}</p>
                <p class="but">${good.now}</p>
                </div>
                </div>`
            });
            $('.new').html(lis);
        }
    });

   
   
    
});


$(function () {
    // 1. 获取动画元素
    var aniWrappers = Array.from(document.querySelectorAll('.animation-wrapper'));
    console.log(aniWrappers);
    // 2. 获取窗口高度
    var _height = window.innerHeight;
    // 3. 记录当前滚动的距离
    var _offset = 0;
    // 4. 记录动画元素在页面中的位置的集合
    var _locations = [];
    // 5. 将整个动画元素在页面中的位置存放到_locations集合中
    aniWrappers.forEach(function (aniWrapper, index) {
        _locations[index] = aniWrapper.offsetTop;
    });
    // 6. 监听页面滚动
    window.onscroll = function () {
        // 更新页面滚动的距离
        _offset = document.body.scrollTop || document.documentElement.scrollTop;
        // 遍历元素判断是否已经达到动画元素所在的位置
        // 如果达到动画元素所在的位置，那么就让其执行动画效果
        // 也就是说我们可直接添加.running，因为在.running中
        // 我们将动画的状态设置成了 running 即播放。
        setTimeout(function(){
             _locations.forEach(function (location, index) {
            if (_height + _offset > location) {
                aniWrappers[index].classList.add('running');
            }
        });
        },1000)
       
    };
});