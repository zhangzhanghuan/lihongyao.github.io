require("../less/common.less");

// 头部
$.ajax({
    url:"../json/common.json",
    success:function(response){
        menuList=$(".ul-list");
        let htmlArr = [];
        let str=["goods","media","smart","life","login","server","shop","community","down"];
    response.header.forEach(function(menuItem,index) {
        let mtarr="";
        mtarr=`<li class="menu-item">
        <a class="menu-item-title  shake delay-2s" href="${str[index]+".html"}">${menuItem.title}</a>
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
        htmlArr.push(mtarr);
    });
    menuList.html(htmlArr.join(""));
       // 点击进入详情页的处理
$(".item0 li").click(function(){
    sessionStorage.book=JSON.stringify(response.phone[$(this).index()]);
    location.href="./details.html"
});
$(".item1 li").click(function(){
sessionStorage.book=JSON.stringify(response.mediat[$(this).index()]);
location.href="./details.html"
});
$(".item2 li").click(function(){
sessionStorage.book=JSON.stringify(response.smart[$(this).index()]);
location.href="./details.html"
});
$(".item3 li").click(function(){
sessionStorage.book=JSON.stringify(response.lifes[$(this).index()]);
location.href="./details.html"
});
$(".item8 img").click(function(){
    location.href="./down.html"
});
// // 懒加载
// console.log($(".menu-item"));
// $(".menu-item").mouseenter(function(){
//     $(".menu-item-content li").addClass("running");
// });

}
})
// 尾部
$.ajax({
    url:"../json/common.json",
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
    url:"../json/common.json",
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
if(localStorage.orders){
    // 处理购物车数量
let rootArr = JSON.parse(localStorage.orders);
$('.shop .icon-iconfontcart em').text(rootArr ? rootArr.length : 0);
$('.store-num').text(rootArr ? rootArr.length : 0);
}
// 处理登陆注册
if(sessionStorage.isLogin){
    $(".user-login").text("个人中心");
    $(".user-register").text("立即注销");
}else{
    $(".user-login").text("立即登陆");
    $(".user-register").text("立即注册");
}
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
$(".user-register").on("click",function(){
    sessionStorage.isLogin=false;
    sessionStorage.clear();
})
// 跳转购物车
$(".shop").click(function(){
    location.href="./shopcarts.html"
})
