require('../less/common.less');
require('../less/goods.less');
import './common';
import {
    loaddingKeywordsList,
    loaddingGoodsList,
    scroll,
    tabChange,
    loaddingSuggestList
} from './goods-func';

// 禁止热更新刷新页面
if (module.hot) {
    module.hot.accept();
}

$(function (keywordCh) {
    /**
     * @words 筛选条件集合
     * @keywordCh 商品分类关键字
     * @keywordKe 商品过滤关键字
     * @keywordsClass 商品过滤关键字所属JSON属性
     */
    var words = {};
    var keywordCh = "手机";
    var keywordKe = "";
    var keywordsClass = "";

    /****************** 商品数据处理 **********************/
    $.ajax({
        url: '../json/data.json',
        success: (function (respon) {

            // 默认加载
            loaddingGoodsList(respon, keywordCh, words);
            tabChange();
            scroll();

            // 点击分类更新商品列表
            $('.content').on('click', '.channel', function(e){
                /**
                 * 切换不同品类之后再次触发
                 * 初始化筛选条件
                 */
                words = {};

                /**
                 * 切换不同品类之后再次触发
                 * 解绑第一个元素(如"屏幕尺寸")的事件
                 */
                $('.keywords-list li').each(function(){
                    $(this).children('.keywords:first').click(function(e) {
                        e.stopPropagation();
                    });
                });

                // 获取分类
                keywordCh = $(e.target).text();
                loaddingGoodsList(respon, keywordCh, words);
                tabChange();
                scroll();
            });

            // 点击条件筛选商品
            $('.keywords-list').on('click', '.keywords', function(e){
                /** 因为"耳机"和"音箱"在JSON中属于二级分类(点击之后
                 * 还会出现筛选条件),所以这里单独设置,
                 * 点击文本是"耳机"或者"音箱"时, 清空筛选条件
                 * 同时更改头部title内容
                 */
                if(keywordKe === "耳机" || keywordKe === "音箱") {
                    words = {};
                    // 改变头部title内容
                    $('#head-title').text(`${$(e.target).text()} - 魅族官网在线商店`);
                }
                // 获取被点击关键字的Class, 根据第一个Class判断其属于JSON数据的哪种属性
                keywordsClass = $(e.target).attr('class').split(" ")[0];
                // 被点击元素的文本按属性筛入words对象
                words[`${keywordsClass}`] = $(e.target).text() === "全部" ? "" : keywordKe;
                loaddingGoodsList(respon, keywordCh, words);
                tabChange();
                scroll();
            });

            /**
             * 解绑默认页面第一个元素(如"屏幕尺寸")的事件
             * 因为此元素的click事件被祖先代理,所以用
             * off()方法无效,此方法的原理是阻止元素click事件冒泡
             */
            $('.keywords-list li').each(function(){
                $(this).children('.keywords:first').click(function(e) {
                    e.stopPropagation();
                });
            });

            // 显示全部商品
            $('.keywords-list').on('click', '#all-goods', function(){
                keywordCh = "全部商品";
                // 切换不同类别清空筛选条件
                words = {};
                loaddingGoodsList(respon, keywordCh, words);
                tabChange();
                scroll();
            });

            // 只显示有货商品
            let stockFlag = 0;
            $('.is-stock').on('click', function(){
                stockFlag = stockFlag === 0 ? 1 : 0;
                // 打勾
                $(this).find('.iconfont').toggle();
                // 传参
                if(stockFlag) {
                    // 多传入了参数: 1 只显示有货 ; 0 代表全部显示
                    loaddingGoodsList(respon, keywordCh, words, stockFlag);
                    tabChange();
                    scroll();
                }else {
                    // 显示全部商品
                    loaddingGoodsList(respon, keywordCh, words);
                    tabChange();
                    scroll();
                }
            });

            /** 按价格排序  2: 升序 3: 降序 */
            let sortFlag = 2;
            $('.sort-price').on('click', function(){
                // 点击改变颜色
                $(this).addClass('checked').prev().removeClass('checked');
                // 点击切换箭头方向
                $(this).children('.icon-arrowsdown').toggle().next().toggle();
                sortFlag = sortFlag === 2 ? 3 : 2;
                loaddingGoodsList(respon, keywordCh, words, sortFlag);
                tabChange();
                scroll();
            });

            /****** 点击推荐按照折扣比例排序 ******* */
            $('.suggest').click(function(){
                let discountFlag = 4;
                // 点击改变颜色
                $(this).addClass('checked').next().removeClass('checked');
                loaddingGoodsList(respon, keywordCh, words, discountFlag);
                tabChange();
                scroll();
            });

            /****************** 全局搜索 **********************/
            $('.search .icon-search').on('click', function(){
                let _value = $('.search .search-btn').val();
                keywordCh = "全部商品";
                if(_value) {
                    words = {};
                    words.name = _value;
                    loaddingGoodsList(respon, keywordCh, words)
                    tabChange();
                    scroll();
                }else {
                    return;
                }
            });
        })
    });

    /****************** 过滤关键词数据处理 *******************/
    $.ajax({
        url: '../json/keywords.json',
        success: (function (response) {

            // 默认加载
            loaddingKeywordsList(response, keywordCh);

            // 点击分类更新关键词
            $('.content').on('click', '.channel', function(e){
                // 改变头部title内容
                $('#head-title').text(`${$(e.target).text()} - 魅族官网在线商店`);
                // 被点击元素改变颜色
                $(this).addClass('checked').siblings('.keywords').removeClass('checked');
                // 获取关键词
                keywordCh = $(e.target).text();
                loaddingKeywordsList(response, keywordCh);
            });

            // 点击筛选条件更新关键词
            $('.keywords-list').on('click', '.keywords', function(e){
                // 被点击元素改变颜色
                $(this).addClass('checked').siblings('.keywords').removeClass('checked');
                // 获取被点击元素文本
                keywordKe = $(e.target).text();
                loaddingKeywordsList(response, keywordKe);
            });

            // 全部商品
            $('.keywords-list').on('click', '#all-goods', function(e){
                // 改变头部title内容
                $('#head-title').text("全部商品 - 魅族官网在线商店");
                keywordKe = "全部商品";
                loaddingKeywordsList(response, keywordKe);
            });

            /****************** 全局搜索 **********************/
            $('.search .icon-search').on('click', function(){
                let _value = $('.search .search-btn').val();
                keywordKe = "全部商品";
                if(_value) {
                    loaddingKeywordsList(response, keywordKe);
                    // 改变头部title内容
                    $('#head-title').text(`全部商品 - 魅族官网在线商店`);
                }else {
                    return;
                }
            });

        })
    });
    /****************** 底部商品数据处理 *******************/
    $.ajax({
        url: '../json/suggest.json',
        success: (function(resp) {
            loaddingSuggestList(resp);
        })
    });

});
