require("../less/common.less");
import './common';
require('../less/shop.less');

$(function(){

     // 在指定容器创建地图实例并设置最大最小缩放级别
     var map = new BMap.Map("allmap", {
        minZoom: 5,
        maxZoom: 19
    });

    // 初始化地图，设置中心点和显示级别
    map.centerAndZoom(new BMap.Point(121.36564, 31.22611), 19);

    // 开启鼠标滚轮缩放功能，仅对PC上有效
    map.enableScrollWheelZoom(true);

    // 将控件（平移缩放控件）添加到地图上
    map.addControl(new BMap.NavigationControl());

    // 为地图增加点击事件，为input赋值
    map.addEventListener("click", function(e) {
        document.getElementById('lat').value = e.point.lat;
        document.getElementById('lng').value = e.point.lng;

    });

    // 创建位置检索、周边检索和范围检索
    var local = new BMap.LocalSearch(map, {
        renderOptions: {
            map: map
        }
    });

    // // 发起检索
    // function theLocation() {
    //     var city = document.getElementById("cityName").value;
    //     if (city != "") {
    //         local.search(city);
    //     }
    // };

    // // 弹出经纬度 
    // function submit() {
    //     var lat = document.getElementById('lat');
    //     var lng = document.getElementById('lng');
    //     alert("经度：" + lng.value + "\n" + "纬度：" + lat.value);
    // };
    $('.style').click(function(){
        $('.style a').css("color","#00C3F5")
        $('.list-2').hide();
        $('.list-2-two').show();
        $('.list-3-left').show();
        $('.p1').hide();
        $('form').css('margin-left',"25px");
        $('.list-3').css('border','none');
        $('.nav ul .style a').css('border-bottom','2px solid #00C3F5');


    });
    $('.style a').mouseleave(function(){
        $('.style a').css('color',"#666666");
        $('.nav ul .style  a').css('border','none');

    })
    $('.speacial').click(function(){
        $('.speacial a').css("color","#00C3F5")
        $('.list-2').show();
        $('.list-2-two').hide();
        $('.list-3-left').hide();
        $('.p1').show();
        $('.nav ul .speacial a').css('border-bottom','2px solid #00C3F5');
    });

    $('.speacial a').mouseleave(function(){
        $('.speacial a').css('color',"#666666");
        $('.nav ul .speacial a').css('border','none');

    })
    //地图

    
    $.ajax({
        url:"../json/shop.json",
        type:"GET",
        success:(function(res){
            var lis ="";
            lis +=`<p class="p1">${res.title}</p>`,
    
            lis +=`
            <form>
                <select class="cars">
                <option value="volvo">${res.selected1.title1}</option>
                <option value="volvo">${res.selected1.check1}</option>
                <option value="volvo">${res.selected1.check2}</option>
                <option value="volvo">${res.selected1.check3}</option>
                <option value="volvo">${res.selected1.check4}</option>
                <option value="volvo">${res.selected1.check5}</option>
                <option value="volvo">${res.selected1.check6}</option>
                <option value="volvo">${res.selected1.check7}</option>
                <option value="volvo">${res.selected1.check8}</option>
                <option value="volvo">${res.selected1.check9}</option>
                </select>

                <select class="cars">
                <option value="volvo">${res.selected2.title2}</option>
                <option value="volvo">${res.selected2.check1}</option>
                <option value="volvo">${res.selected2.check2}</option>
                <option value="volvo">${res.selected2.check3}</option>
                <option value="volvo">${res.selected2.check4}</option>
                <option value="volvo">${res.selected2.check5}</option>
                <option value="volvo">${res.selected2.check6}</option>
                <option value="volvo">${res.selected2.check7}</option>
                <option value="volvo">${res.selected2.check8}</option>
                <option value="volvo">${res.selected2.check9}</option>
                </select>
            </form>
            `    
        
            $(".list-1").html(lis);
        })
     
    });

    $.ajax({
        url:"../json/shop.json",
        type:"GET",
        success:function(res){
            var lis="";
            res.list2.forEach(data => {
                lis+=`<li>
                <p class="p">${data.title}</p>
                <span class="span">
                <p class="p2">${data.description}</p><br>
                <p>${data.tel}</p>
                </span>
                </li>`

              
            });
            $('.list-2').html(lis);
        }
    });
    $.ajax({
        url:"../json/shop.json",
        type:"GET",
        success:function(good){
            var liss="";
            good.list3.forEach(good=>{
                
           if(good.p2){
            liss+=`
           <li class="list-3-right">
           <p class="list-3-p1">${good.title}</p>
           <p class="list-3-p2"><a>${good.p1}</a></p>
           <p class="list-3-p2"><a>${good.p2}</a></p>
           </li>`
           }else{
            liss+=`
           <li class="list-3-left">
           <p class="list-3-p1">${good.title}</p>
           <p class="list-3-p2"><a>${good.p1}</a></p>
           </li>`
           }
           
           });
           $('.list-3').html(liss);

          
        }
    });
    $.ajax({
        url:"../json/shop.json",
        type:"GET",
        success:function(res){
            var list ="";
            res.list4.forEach((data,index)=>{
                list+=`
                <li>
                <span class="number">${index++ +1}</span>
                <p>${data.title}</p>
                <p><a>${data.description}</a></p>
                <p><a>${data.tel}</a></p>


                </li>
                `
            });
            $('.over').html(list);
            }
    })
})  