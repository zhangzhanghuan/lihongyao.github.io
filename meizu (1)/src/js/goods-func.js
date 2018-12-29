export {loaddingKeywordsList, loaddingGoodsList, scroll, tabChange, loaddingSuggestList}

/****** 加载商品数据 *****/
function loaddingGoodsList(respon, keyword, words) {
    let goodsStr = "";
    let goodsArr = [];
    let dataArr = [];
    // 判断关键字是否为全部商品
    if(keyword === "全部商品") {
        // 取出respon中的所有商品
        $.each(respon, function(index, item) {
            $(item.contents).each(function(index,obj) {
                goodsArr.push(obj);
            });
        });
        dataArr = goodsArr;
    }else {
        // 根据关键字过滤respon
        goodsArr = $.grep(respon, function(obj, index){
            return obj.classify === keyword;
        });
        dataArr = goodsArr[0].contents;
    }
    // 判断是否有货: 多传入了参数1,就代表只加载有货商品
    if(arguments[3] === 1) {
        // 过滤出有货商品
        dataArr = $.grep(dataArr, function(obj, index) {
            return obj.stock === true;
        });
    }else if(arguments[3] === 2) {
        // 降序
        dataArr = dataArr.sort(function(a, b) {
            return b.price - a.price;
        });
    }else if(arguments[3] === 3) {
        // 升序
        dataArr = dataArr.sort(function(a, b) {
            return a.price - b.price;
        });
    }else if(arguments[3] === 4) {
        // 升序
        dataArr = dataArr.sort(function(a, b) {
            return a.price / a.oldPrice - b.price / b.oldPrice;
        });
    }
    // 根据关键词再次过滤剩下数据
    let redDataArr= fil(words,dataArr);
    // 经过过滤后如果没有数据存在,就显示空白样式
    if(redDataArr.length != 0) {
        $('.goods-list').removeClass('nothing');
    }else {
        $('.goods-list').addClass('nothing');
    }
    redDataArr.forEach(obj => {
        goodsStr += `<li class="goods-box" title="${obj.name}">
            ${(function(){
                let arr = [];
                let contentStr = `<div class="tab-content">`;
                let menuStr = `
                    <div class="tab-menu">
                        <i class="iconfont icon-arrow1"></i>
                        <i class="iconfont icon-arrow"></i>
                        <div class="menu-box">
                            <div class="view-box">
                `;
                let imgStr = "";
                obj.colorImg.forEach(img => {
                    contentStr += `<img src="${img}" alt="${obj.name}">`;
                    imgStr += `<img src="${img}" alt="${obj.name}">`;
                });
                contentStr +=`</div>`;
                imgStr +=`</div></div></div>`;
                arr = [contentStr, menuStr, imgStr];
                return arr.join("");
            })()}
            <p class="goods-name">${obj.name}</p>
            ${isExist(obj.des, "goods-des")}
            <p class="goods-price">￥ <span class="price-num">${parseInt(obj.price)}</span> 起</p>
            <div class="compare">
                <i class="iconfont icon-duibi"></i>
                <span>对比</span>
            </div>
        </li>`;
    });
    $('.goods-list').html(goodsStr);

    // 将被点击元素数据存入本地
    $(".goods-box").on('click', '.tab-content', function(e){
        sessionStorage.book=JSON.stringify(redDataArr[$(this).parent().index()]);
        location.href="./details.html"
    })

    // 过滤数据
    function fil(words,data) {
        return data.filter(item => {
            return Object.keys(words).every(key => {
               return String( item[key] ).toLowerCase().includes(String( words[key] ).trim().toLowerCase())
            })
        })
    }

    // [内部函数]判断JSON数据是否存在,存在则添加HTML标签和样式,否则不添加
    function isExist(str, className) {
        if(str) {
            return `<p class=${className}>${str}</p>`;
        }else {
            return "";
        }
    }

}

/****** 加载推荐商品数据 *****/
function loaddingSuggestList(resp) {
    let goodsStr = `
            <li class="for-you">
                为您推荐
                <span class="suggest-arrow">
                    <i class="iconfont icon-arrow1"></i>
                    <i class="iconfont icon-arrow"></i>
                </span>
            </li>
            <li class="suggest-view-box">
    `;
    resp.forEach(obj => {
        goodsStr += `
                    <div class="suggest-box" title="${obj.name}">
                        <img src="${obj.img[0]}" alt="${obj.name}">
                        <p class="suggest-name">${obj.name}</p>
                        <p class="suggest-price">
                            ￥
                            <span class="suggest-price-num">
                                ${parseInt(obj.price)}
                            </span>
                            起
                        </p>
                    </div>
                `;
    });
    goodsStr += `</li>`;
    $('.suggest-list').html(goodsStr);

    // 左箭头 -> 后退
    $('.suggest-arrow > .icon-arrow1').on('click', function(){
        $(this).closest('.for-you').siblings('.suggest-view-box').animate({left: "0px"}, "slow");
        $(this).removeClass('work');
        $(this).siblings('.icon-arrow').addClass('work');
    });
    // 右箭头 -> 前进
    // 初始化
    let _len = $('.suggest-list').width();
    $('.suggest-arrow > .icon-arrow').on('click', function(){
        $(this).closest('.for-you').siblings('.suggest-view-box').animate({left: `-${_len}px`}, "slow");
        $(this).removeClass('work');
        $(this).siblings('.icon-arrow1').addClass('work');
    });

    // 将被点击元素数据存入本地
    $(".suggest-view-box").on('click', '.suggest-box', function(){
        sessionStorage.book=JSON.stringify(resp[$(this).index()]);
        location.href="./details.html"
    })
}

/****** 加载关键词数据 *****/
function loaddingKeywordsList(response, keyword) {
    // 默认显示[全部商品]
    let htmlStr = "";
    htmlStr += `
        <section class="nav">
            <a href="../../index.html">首页</a>
            <span id="all-goods">&gt; 全部商品 </span>
            <span class="topword">&gt; ${keyword} </span>
        </section>
    `;
    // 关键词过滤
    let resData = $.grep(response, function(obj, index){
        return obj.title === keyword;
    })
    if(resData.length != 0){
        $(resData).each(function(index, res){
            $.each(res, function(key, value){
                // 加载除了title以外的其他key的value
                if(key != "title") {
                    htmlStr += `<li class="${key}">`;
                    $.each(value, function(index, item) {
                        if(key === "classify") {
                            htmlStr += `<span class="${key} channel">${item}</span>`;
                        }else {
                            htmlStr += `<span class="${key} keywords">${item}</span>`;
                        }
                    });
                    htmlStr += `</li>`;
                }
            });
        })
        $('.keywords-list').html(htmlStr);
    }else{return}
}

/****** 前进后退功能 *****/
function scroll() {
    // 判断商品颜色图片是否多于4个,是则添加左右箭头,并设置初始样式
    $('.view-box').each(function(index, element) {
        if($(element).children('img').length > 4) {
            $(element).parent().siblings('.iconfont').show();
            $(element).parent().siblings('.icon-arrow1').addClass('disabled');
        }else {return;}
    });
    // 左箭头 -> 后退
    $('.tab-menu > .icon-arrow1').on('click', function(){
        $(this).siblings('.menu-box').children().animate({left: "0"}, 300);
        $(this).addClass('disabled');
        $(this).siblings('.icon-arrow').removeClass('disabled');
    });
    // 右箭头 -> 前进
    let len = $('.menu-box').width();
    $('.tab-menu > .icon-arrow').on('click', function(){
        $(this).siblings('.menu-box').children().animate({left: `-${len}px`}, 300);
        $(this).addClass('disabled');
        $(this).siblings('.icon-arrow1').removeClass('disabled');
    });
}

/****** 选项卡切换效果 *****/
function tabChange(){
    // 点击同时切换按钮和图片内容
    $('.view-box img').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        let index = $(this).index();
        $(this).closest('.tab-menu').siblings('.tab-content').children().eq(index).show().siblings().hide();
    });
    // 手动触发一次点击
    $('.view-box').each(function(index, element){
        $(element).children('img:first').trigger('click');
    });
}
