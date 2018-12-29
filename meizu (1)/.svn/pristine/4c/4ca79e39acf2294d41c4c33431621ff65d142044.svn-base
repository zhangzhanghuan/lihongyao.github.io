require("../less/common.less");
import './common';
require('../less/photo.less');

import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';

$(function(){

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

      // /如果你在swiper初始化后才决定使用clickable，可以这样设置
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


    $('.photo-list li').on("mouseenter",function(){
        $('.hover-info').slideDown();

    })
    $('.photo-list li').on("mouseleave",function(){
        $('.hover-info').slideUp();
    })
    $.ajax({
        url:"../json/photo.json",
        type:"GET",
        success:function(data){
            var lis ="";
            lis+=`<p class="title-photo">${data.title}</p>`;
            data.list1.forEach(res => {
                lis+=`<li>
                <img src="${res.img}">
                <p class="author-name">${res.name}</p>
                <p class="sign text-overflow">${res.name1}</p>
                <p class="do">${res.do}</p>
                </li>`
            });
            $('.ul-list-photo').html(lis);
        }
    })

    // 图片
    $.ajax({
        url:"../json/photo.json",
        type:"GET",
        success:function(data){
            var lis="";
            lis+=`<p class="photo-title">${data.title1}</p>`;
            data.list2.forEach(res=>{
                lis+=`<li>
                <div class="hover-info">
                    <div class="hover-top"><a>${res.do}</a></div>
                    <div class="hover-bottom">
                    <div class="title"><a>${res.title}</a></div>
                    <div class="desc"><a>${res.desc}</a></div>
                    </div>

                </div>
                
                <img src="${res.img}">
                </li>`
            });
            $('.photo-list').html(lis);
        }
    })
})