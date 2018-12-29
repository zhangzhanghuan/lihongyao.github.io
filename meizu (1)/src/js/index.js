require('index-less');
require("../less/common.less");
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';
if(module.hot){
    module.hot.accept();
}


 $(function(){
     //获取焦点
     $('.search-btn').bind('search', function () {
            //coding
           var value=$(".search-btn").val();
           console.log(value);
         
       })
    })
// 头部
$.ajax({
    url:"./static/json/common.json",
    success:function(response){
        console.log("数据加载成功！");
        let htmlArr = [];
        let str=["goods","media","smart","life","login","server","shop","community","down"];
    response.header.forEach(function(menuItem,index) {
        let arr="";
        arr=`<li class="menu-item">
        <a class="menu-item-title" href="${"./static/pages/"+str[index]+".html"}">${menuItem.title}</a>
        ${(function(){
            if(menuItem.contentList) {
                var menuItemContentStr = `<div class="hid"><ul class="menu-item-content item${index}">`;
                menuItem.contentList.forEach(function(obj) {
                    menuItemContentStr += `
                        <li>
                            <img src="${obj.colorImg[0]}">
                            <p class="name">${obj.name?obj.name:""}</p>
                            <p class="price">${obj.price?"￥"+obj.price:""}</p>
                        </li>
                    `;
                });
                menuItemContentStr += `</ul></div>`;
                return menuItemContentStr;
            }else {
                return "";
            }
        })()}
    </li>`
        htmlArr.push(arr);
    });
    $(".ul-list").html(htmlArr.join(""));
    // 点击进入详情页的处理
$(".item0 li").click(function(){
        sessionStorage.book=JSON.stringify(response.phone[$(this).index()]);
        location.href="./static/pages/details.html"  
});
$(".item1 li").click(function(){
    sessionStorage.book=JSON.stringify(response.mediat[$(this).index()]);
    location.href="./static/pages/details.html"  
});
$(".item2 li").click(function(){
    sessionStorage.book=JSON.stringify(response.smart[$(this).index()]);
    location.href="./static/pages/details.html"  
});
$(".item3 li").click(function(){
    sessionStorage.book=JSON.stringify(response.lifes[$(this).index()]);
    location.href="./static/pages/details.html"  
});
$(".item8 img").click(function(){
    location.href="./static/pages/down.html"  
})

        }
})
// 尾部
$.ajax({
    url:"./static/json/common.json",
    success:function(response){
       let htmlStr=[];
       response.footer.forEach(function(obj){
           htmlStr+=`
        <li>
        <img src="${obj.img}">
        <p>${obj.p}</p>
        </li>
        `
       })
       $(".meizu-server").html(htmlStr);
}     
})
$.ajax({
    url:"./static/json/common.json",
    success:function(response){
       let htmlStr=[];
       response.text.forEach(function(obj,index){
          if(index==9){
            htmlStr+=`
            <li>
            <a href="javascript:;">
            <i class="icon-lang-logo icon-lang-logo-cn"></i>
            ${obj.test}</a>
            </li>
            `
          }else{
            htmlStr+=`
            <li>
            <a href="javascript:;">${obj.test}</a>
            </li>
            `
          }
       })
       $(".up-left ul").html(htmlStr);
}      
})
// 回到顶部
let offset=0;
$(window).on("scroll",function(){
    offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
    if(offset>500){
        $(".sidebar").show();
       
    }else{
        $(".sidebar").hide();
    }
})
$(".side-three").on("click",function(){
    let speed=300;
    $("html").animate({scrollTop:0},speed)
})
// 轮播
let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    autoplay:true,
    loop: true, // 循环模式选项
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true
    },
    // 前进后退按钮
})  
// 福利站
$.ajax({
    url:"./static/json/index.json",
    success:function(obj){
       let htmlStr="";
       obj.adv.forEach(function(res){
        htmlStr+=`
        <li class="adv">
        <img src="${res.img}">
        <p class="text">${res.p}</p>
        <p class="tes">${res.p2}</p>
        </li>
        `
       })
       $(".box-adv>ul").html(htmlStr);
    
    }
})  
//    魅族手机
$.ajax({
    url:"./static/json/index.json",
    success:function(obj){
       let htmlStr="";
       obj.phone.forEach(function(res,index){
        if(index<2){
            htmlStr+=`
        <li class="book">
        <span class="product">热卖</span>
        <div class="phone-text">
                <p>${res.name}</p>
                <p>${res.des}</p>
                <p>￥${parseInt(res.price)}起</p>
        </div>
        <img src="${res.colorImg[0]}" alt="">
    </li>
        `
        }else{
            htmlStr+=`
        <li class="book">
        <img src="${res.colorImg[0]}" alt="">
        <div class="phone-text">
                <p>${res.name}</p>
                <p>${res.des}</p>
                <p>￥${parseInt(res.price)}起</p>
        </div>
    </li>
        `
        }
       })
       $(".phone").html(htmlStr);
       // 点击进入详情页
       $(".book").click(function(){
           sessionStorage.book=JSON.stringify(obj.phone[$(this).index()]);
           location.href="./static/pages/details.html"  
})
    }
})  
// 声学/配件/周边
$.ajax({
    url:"./static/json/index.json",
    success:function(obj){
       let htmlStr="";
      obj.product.forEach(function(res,index){
        htmlStr+=`
        <div class="sec-box sec${index}">
                    <h3 class="sec-title">
                            ${res.h3}
                    </h3>
                    <div class="sec-img sec-aco">
                            <a href=""></a>
                    </div>
                    ${(function(){
                        let objStr=`<div class="box-phone"><ul class="clearfix">`
                        res.wraper.forEach(function(del,index){
                           if(index==0||index==4){
                            objStr+=`
                            <li>
                            <a href=""></a>
                            </li>`
                           }else{
                            objStr+=`
                            <li>
                                    <img src="${del.img[0]}">
                                    <p class="del-name">${del.name}</p>
                                    <p class="del-des">${del.des}</p>
                                    <span class="del-price">
                                    <i>￥</i>
                                    ${parseInt(del.price)}
                                    </span>
                                    <span class="del-s">￥${del.price2}</span>
                            </li>
                        `
                           }
                        });
                        objStr+=`</ul></div>`
                        return objStr;
                    })()}
                    </div>
        `
      })
      $(".all-product").html(htmlStr);
      // 点击进入详情页
      $(".sec0 li").click(function(){
        sessionStorage.book=JSON.stringify(obj.mediat[$(this).index()]);
        location.href="./static/pages/details.html"  
});
$(".sec1 li").click(function(){
    sessionStorage.book=JSON.stringify(obj.smart[$(this).index()]);
    location.href="./static/pages/details.html"  
});
$(".sec2 li").click(function(){
    sessionStorage.book=JSON.stringify(obj.lifes[$(this).index()]);
    location.href="./static/pages/details.html"  
})
    }
})  
// 社区热帖
$.ajax({
    url:"./static/json/index.json",
    success:function(obj){
       let htmlStr="";
       obj.community.forEach(function(res){
        htmlStr+=`
        <li>
        <div class="comment-img">
        <img src="${res.img}" class="goods-img">
        </div>
        <div class="comment-info">
        <img src="${res.img2}" class="goods-img">
        <span class="commont-user">${res.span}</span>
        </div>
        <p>${res.p}</p>
        <p>${res.p2}<p>
        
        </li>
        `
       })
    $(".row").html(htmlStr);
    }
})  
// 精彩视频
$.ajax({
    url:"./static/json/index.json",
    success:function(obj){
       let htmlStr="";
      obj.video.forEach(function(res){
          htmlStr+=`
          <li>           
          <div class="video-img">
                  <i></i>
                  <img src="${res.img}" alt="">
                  <p>${res.p}</p>
          </div>
      </li>
          `
      })
      $(".box-video").html(htmlStr);
// 视频播放
$(".box-video li").each(function(index,val){
    this.dataset.index=index;
})
    $(".box-video li").on("click",function(){
        $(".video-hid").css({
            "display":"block"
        });
        $(".video-play li video")[0].play();
    })
    $(".cancel").on("click",function(){
        $(".video-hid").css({
            "display":"none"
        });
        $(".video-play li video")[0].pause();
    })

    }
});
// 
 // 处理购物车数量
 let rootArr = JSON.parse(localStorage.orders);
 $('.shop .icon-iconfontcart em').text(rootArr ? rootArr.length : 0);
 $('.store-num').text(rootArr ? rootArr.length : 0);
 $(".side-one").click(function(){
    location.href="./static/pages/shopcarts.html"
});
// 跳转购物车
$(".shop").click(function(){
    location.href="./static/pages/shopcarts.html"
})
// 处理登陆注册
console.log(sessionStorage.isLogin);
if(sessionStorage.isLogin){
    $(".user-login").text("个人中心");
    $(".register-btn").text("立即注销");
}else{
    $(".user-login").text("立即登陆");
    $(".register-btn").text("立即注册");
};
if( $(".user-login").text()==="个人中心"){
    $(".user-login").css({
        "color":"red"
    });
    $(".register-btn").css({
        "color":"red"
    })
}else{
    $(".user-login").css({
        "color":"#515151"
    })
    $(".register-btn").css({
        "color":"#515151"
    })
}
// 点击注销
$(".register-btn").on("click",function(){
    sessionStorage.isLogin=false;
    sessionStorage.clear();
})

