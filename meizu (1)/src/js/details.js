import './okzoom';
import './common';
require("../less/common.less");
require("../less/details.less");
import{
    LHYAlertView 
}from "../plugin/LHYAlertView";
$(function(){
    let data = JSON.parse(sessionStorage.book);
    let allstr = "";
    allstr = `
        ${(function(){
            if(data.spec) {
                return `
                    <div class="container">
                    <span>
                        ${data.name}
                    </span>
                    <ul>
                        <li> <a href="">首页</a> </li>
                        <li> <a href="">概述</a> </li>
                        <li> <a href="">性能</a> </li>
                        <li> <a href="">相机</a> </li>
                        <li> <a href="">参数</a> </li>
                        <li> <a href="">常见问题</a> </li>
                    </ul>
                    </div>
                `;
            }else {return "";}
        })()}
        <div class="con-clor">
            <section class="container-row">
                <div class="left-container">
                    <div class="container-img">
                        ${(function(){
                            let restr="";
                            data.img.forEach(function(res){
                                restr+= `<img src="${res}" class="big-image">`;
                            })
                            return restr;
                        })()}
                    </div>
                    <ul class="small-img">
                        ${(function(){
                            let imgstr="<li>";
                            data.img.forEach(function(img){
                                imgstr+=`<img src="${img}" alt="">`;
                            })
                            imgstr+= `</li>`;
                            return imgstr;
                        })()}
                    </ul>
                </div>
                <div class="right-container">
                    <div class="right-text">
                        <h1>${data.name}</h1>
                        <p>${data.des}</p>
                    </div>
                    <div class="right-price">
                        ${(function(){
                            if(data.oldPrice) {
                                return `
                                    <p class="sale">
                                        限时特惠
                                        <span class="sale-time">
                                        </span>
                                    </p>
                                    <span class="right-price-small">￥</span>
                                    <span class="money">${data.price}</span>
                                    <span class="old-price">￥${data.oldPrice}</span>
                                `;
                            }else {
                                return `
                                    <span class="right-price-small">￥</span>
                                    <span class="money">${data.price}</span>
                                `;
                            }
                        })()}
                    </div>
                    <div class="div-server">
                        <div class="vm">
                            <span>支持</span>
                            <span>
                                <i class="iconfont icon-success"></i>
                                花呗分期
                            </span>
                            <span>
                                <i class="iconfont icon-success"></i>
                                顺丰发货
                            </span>
                            <span>
                                <i class="iconfont icon-success"></i>
                                7天无理由退货
                            </span>
                        </div>
                        <div class="vm-server">
                            <span>配送服务</span>
                            <span>四川省</span>
                            <span>成都市</span>
                            <p>
                                本商品由 魅族 负责发货并提供售后服务
                                <span class="kefu">
                                    <i class="iconfont icon-kefu"></i>
                                    在线客服
                                </span>
                            </p>
                        </div>
                    </div>
                    ${(function(){
                        if(data.model){
                            return `<div class="type type-one">
                                            <span>型号</span>
                                            <span class="set-style">${data.model}</span>
                                        </div>
                            `;
                        }else{
                            return "";
                        }
                    })()}
                    ${(function(){
                        if(data.spec){
                            return `<div class="type">
                                        <span>网络类型</span>
                                        <span class="set-style">全网公开版</span>
                                    </div>`;
                        }else{
                            return "";
                        }
                    })()}
                    <div class="type type-color">
                        <span>颜色分类</span>
                        ${(function(){
                            let colorstr="";
                            data.color.forEach(function(col){
                                colorstr+=` <span class="set-style">${col}</span> `;
                            })
                            return colorstr;
                        })()}
                    </div>
                    ${(function(){
                        if(data.spec){
                            let specstr=`<div class="type type-color">
                            <span class="type-spec">内存容量</span>`;
                            data.spec.forEach(function(spec){
                                specstr+=` <span class="set-style">${spec}</span> `;
                            })
                            specstr+=`</div>`;
                            return specstr;
                        }else{
                            return "";
                        }
                    })()}
                    ${(function(){
                        if(data.spec){
                            return `<div class="type">
                                        <span>选择套餐</span>
                                        <span class="set-style">官方标配</span>
                                    </div>`;
                        }else{
                            return "";
                        }
                    })()}
                    <div class="type-num">
                        <span>数量</span>
                        <span class="type-del"> - </span>
                        <input type="text" value="1" class="type-value">
                        <span class="type-add"> + </span>
                    </div>
                    <div class="once">
                        ${(function(){
                            if(data.stock){
                                return `
                                    <button>立即购买</button>
                                    <button class="add-shop">加入购物车</button>
                                `;
                            }else{
                                return `
                                    <button class="stock-none">售罄</button>
                                `;
                            }
                        })()}
                    </div>
                </div>
            </section>
        </div>
    `;
    $(".con").html(allstr);
    $(".side-one").click(function(){
        location.href="./shopcarts.html"
    });
    // 本地缓存
    $(".add-shop").click(function () {
        console.log(data)
        let order = {
            "name": data.name,
            "price": data.price,
            "num": 1,
            "color": data.color[0],
            "img": data.img[0],
            "total": data.price,
            "spec": data.spec?data.spec[0]:""
        };

        new LHYAlertView({
            type:"alert",
            "autoClose": 1000,
            message:"亲，购物车已添加成功",
        });
        // 随时更新购物车数量
        $(function(){
            let rootArr = JSON.parse(localStorage.orders);
            $('.shop .icon-iconfontcart em').text(rootArr ? rootArr.length : 0);
            $('.store-num').text(rootArr ? rootArr.length : 0);
        })
        let rootArr = [];
        // 如果本地存在订单数据，则根据本地数据更新rootArr
        if (localStorage.orders) {
            rootArr = JSON.parse(localStorage.orders);
        }
        // 更新本地数据
        // 处理重复商品
        let flag = false;
        for (let i = 0, len = rootArr.length; i < len; i++) {
            if (rootArr[i].name === order.name) {
                rootArr[i].num = rootArr[i].num + 1;
                rootArr[i].total = (rootArr[i].num * rootArr[i].price).toFixed(2);
                flag = true;
                break;
            }
        }
        if (!flag) {
            rootArr.push(order);
        }
        localStorage.orders = JSON.stringify(rootArr);
    });

    // 配置放大镜插件
    $('.container-img img').okzoom({
        width: 200,
        height: 200,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 20px #333",
        border: "1px solid #aaa",
        scaleWidth: 800
    });

    // 配置倒计时插件

    // 选项卡 点击同时切换按钮和图片内容
    $('.small-img img').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        let index = $(this).index();
        $(this).closest('.small-img').siblings('.container-img').children('img').eq(index).show().siblings('img').hide();
    });
    // 手动触发一次点击
    $('.small-img').each(function(index, element){
        $(element).find('img:first').trigger('click');
    });

    // 标签选中效果
    $('.set-style').on('click', function(){
        $(this).addClass('checked').siblings().removeClass('checked');
    });
    // 手动触发效果
    $('.type').each(function(index, item){
        $(item).children('.set-style:first').trigger('click');
    })

    //处理+-
    let curIndex = 1;
    $(".type-del").on("click", function () {
        if (curIndex == 0) {
            return;
        }
        curIndex--;
        $(".type-value").val(curIndex);
    })
    $(".type-add").on("click", function () {
        curIndex++;
        $(".type-value").val(curIndex);

    })

})
// 回到顶部
let offset=0;
$(window).on("scroll",function(){
    offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
        $(".sidebar").show();
})
