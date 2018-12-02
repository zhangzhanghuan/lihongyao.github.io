require("../less/common.less");
import './common';
require('../less/server.less');
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        grabCursor : true,//手掌
        parallax : true,
        zoom:true,
        speed:2000,
        // virtualTranslate : true,
        // autoplay : {
        //     delay:3000
        // },
        initialSlide :2,
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
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
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 1000,
            shadowScale: 0.6
          },
           
      });

      // /如果你在swiper初始化后才决定使用clickable，可以这样设置
      mySwiper.params.pagination.clickable = true ;
      //此外还需要重新初始化pagination
      mySwiper.pagination.destroy()
      mySwiper.pagination.init()
      mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
    $.ajax({
      url:"../json/server.json",
      type:"GET",
      success:function(response){
        var lis='';
        var lis1='';
        response.list1.forEach(function(data,index){
          if(index>5){
            lis1+=`
            <li class="one-div">
           <img src="${data.img}">
           <p class="p1">${data.text}</p>
           <p>${data.text2}</p>

           </li> `
           }else{
            lis+=`
            <li class="one-li">
           <img src="${data.img}">
           <p class="em">${data.test}</p>
           </li> `
           }
          
         
        });
        $('.list-1').html(lis);
        $('.list-2').html(lis1)
        // console.log(lis);
      },

     
    });
      $.ajax({
        url:"../json/server.json",
        type:"GET",
        success:function(res){
          var lis= "";
          var liss="";
          lis +=` <p class="section-title">${res.title}</p>`
          res.list2.forEach(function(data,index){
            if(index>2){
              liss +=`<li class="list-4-list">
            
              <img src="${data.img}">
              <div class="list-4-li">
              <img src="${data.img2}">
              <div class="list-4-div">
              <p class="p1">${data.text}</p>
              <p>${data.text2}</p>
              </div>
              <div>


              </li>`
            }else{
               lis +=`<li class="list-3-li">
           
            <img src="${data.img}">
            <p>${data.text}</p>
            </li>`
            }
           
          });
          $('.list-4').html(liss)
          $('.list-3').html(lis)
        },
      });

      // 三模块
      $.ajax({
        url:"../json/server.json",
        type:"GET",
        success:function(goods){
          var lis="";
          lis +=` <p class="section-title">${goods.title1}</p>`
          goods.list3.forEach(function(data){
            lis +=`<li>
            <img src="${data.img}">
            <span class="span">
            <p class="tit">${data.h5}</p>
            <p class="info">${data.description}</p>
            <p class="tit1">${data.h6}</p>
            </span>
            </li>`
          });
          $('.list-5').html(lis);
        }
      });
      // 四模块
      $.ajax({
        url:"../json/server.json",
        type:"GET",
        success:function(good){
          var list="";
          list +=`<p class="section-title">${good.title2}</p>`;
          good.list4.forEach(function(data,index){
           
            if(!data.p5||!data.p6){
              list+=`<ul>
              <li class="question-list-title">${data.p1}</li>
              <li><a class="fro">${data.p2}</a></li>
              <li><a class="fro">${data.p3}</a></li>
              <li><a class="fro">${data.p4}</a></li>
              <li><a class="fro">${data.p5}</a></li>
           
            
            </ul>`
            }else{
               list+=`<ul>
            <li class="question-list-title">${data.p1}</li>
            <li><a class="fro">${data.p2}</a></li>
            <li><a class="fro">${data.p3}</a></li>
            <li><a class="fro">${data.p4}</a></li>
            <li><a class="fro">${data.p5}</a></li>
            <li><a class="fro">${data.p6}</a></li>
            
            </ul>`
            }
          });
          $('.list-6').html(list);       
        }
      });
      //五模块
      $.ajax({
        url:"../json/server.json",
        type:"GET",
        success:function(Data){
          var lis="";
          lis +=`<p class="section-title">${Data.title3}</p>`;
          Data.list5.forEach(function(res){
            lis +=`<li>
            <img src="${res.img}">
            <p class="contact-title fro">${res.time}</p>
            <p class="contact-tips">${res.description}</p>
            </li>`
          });
          $('.list-7').html(lis);
        }
      });

      // 六模块
      $.ajax({
        url:"../json/server.json",
        type:"GET",
        success:function(li){
          var lis="";
          li.list6.forEach(function(data){
            console.log(data);
            lis +=`<li>
            <span class="list-8-span-1">
            <p class="boutique-tit">${data.title}</p>
            <p class="boutique-desc">${data.description}</p>
            <p><a>${data.h6}</a></p>
            </span>
            <div background-img:"${data.img}"><img src="${data.img}" class="list-8-img"></div>
            <span  class="list-8-span">
            <p>${data.p2}</p>
            <p>${data.p3}</p>
            <p>${data.p4}</p>
            <p>${data.p5}</p>
            <p>${data.p6}</p>
            <p>${data.p7}</p>
            </span>

            </li>`
          });
          var liss="";
          li.list8.forEach(function(data){
            liss +=`
            <span class="list-9-span">
            <img src="${data.img}" class="img1">
            <img src="${data.img2}" class="img2">
            </span>
            `
          });
          var list="";
          li.list7.forEach(function(data){
            console.log(data);
            list +=`<li>
            <span class="list-8-span-1">
            <p class="boutique-tit">${data.title}</p>
            <p class="boutique-desc">${data.description}</p>
            <p class="p"><a>${data.h6}</a></p>
            </span>
            
            <div ><img src="${data.img}" class="list-8-img"></div>
            <span  class="list-10-span">
            <p>${data.p2}</p>
            <p>${data.p3}</p>
            <p>${data.p4}</p>
            <p>${data.p5}</p>
            <p>${data.p6}</p>
            <p>${data.p7}</p>
            </span>
            <div class="div"></div>
            </li>`
          });
          $('.list-8').html(lis);
          $('.list-9').html(liss);
          $('.list-10').html(list);
        }
      });
     
});

