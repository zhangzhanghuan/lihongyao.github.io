"use strict";

$(function () {
    var nav = $(".nav"); //得到导航栏对象
    var win = $(window); //得到窗口对象
    var sc = $(document); //得到document文档对象
    win.scroll(function () {
        if (sc.scrollTop() >= 800) {
            nav.addClass("fixednav");
        } else {
            nav.removeClass("fixednav");
        }
    });
    $('i').click(function(){
        $(".list").fadeToggle();
    })
});