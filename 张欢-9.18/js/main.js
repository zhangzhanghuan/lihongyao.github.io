/**
 * Created by Administrator on 2018/9/17.
 */
(function() {


    //定时器

    setInterval(function(){
        var d1 = new Date("Oct 1,2019");
        var d2 = new Date();//此时此刻
        var distance = d1-d2;
        //如何将一个毫秒数转换为天时分秒

        //转换为天数；
        var day = Math.floor(distance/1000/60/60/24);
        if(day<10){
            day='0'+day;
        }

        //转换为小时
        var hour = Math.floor(distance / 1000 / 60 / 60%24);
        if(hour<10){
            hour='0'+hour;
        }

        //转换为分钟
        var minutes = Math.floor(distance / 1000 / 60%60);
        if(minutes<10){
            minutes='0'+minutes;
        }

        //转换为秒
        var second = Math.floor(distance / 1000 %60);
        if(second<10){
            second='0'+second;
        }
        var all=(`距离2019年国庆还剩：${day}天${hour}时${minutes}分${second}秒`);
        console.log(all);

        var Otime=document.querySelector('.time');
        Otime.textContent =day;
        var h=document.querySelector('.h');
        h.textContent=hour;
        var m=document.querySelector('.m');
        m.textContent=minutes;
        var s=document.querySelector('.s');
        s.textContent=second;
    },1000);










})();
