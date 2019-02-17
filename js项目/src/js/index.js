(function() {
   
   
  
    // 第一个tab内容
    $.ajax({
        url:"json/scroll.json",
        type:"GET",
        success:function(res){
            var ele=res.list1;
            var arr=document.querySelector('.ul_tex_1');
            Json(ele ,arr);
        }
    }); 


    $.ajax({
        url:"json/scroll.json",
        type:"GET",
        success:function(res){
            var ele=res.list2;
            var arr=document.querySelector('.ul_tex_2');
            Json(ele ,arr);
        }
    }); 

    $.ajax({
        url:"/json/scroll.json",
        type:"GET",
        success:function(res){
            var ele=res.list3;
            var arr=document.querySelector('.ul_tex_3');
            Json(ele ,arr);
        }
    }); 

    $.ajax({
        url:"json/scroll.json",
        type:"GET",
        success:function(res){
            var ele=res.list4;
            var arr=document.querySelector('.ul_tex_4');
            Json(ele ,arr);
        }
    }); 
               
   
    // 第二个json内容
    $.ajax({
        url:"/json/scroll.json",
        type:"GET",
        success:function(res){
            var ar=res.list5;
            console.log(ar);
            var arr=document.querySelector('.main_2_div');
            ar.forEach(function(ele,index){
                if(index==7){
                    var arr1=ele.list6;
                    arr.innerHTML+=`<p class="p5">${ele.title1}</p>`
                    var re="<li></li>";
                    re.innerHTML+=arr;
                    arr1.forEach(function(arr2){                      
                    arr.innerHTML+=`<span><a>${arr2.a}</a></span>`
                    })
                }
                if(ele.do){
                    arr.innerHTML+=`<li class="every">
                <img src="${ele.img}" title="${ele.name}" class="hover_img">
                <p class="p4">${ele.do} <img class="p4_img" src="https://s1.c.meishij.net/n/images/gxarrow.png">
                </p>
               <div class="move_div">
                <p class="p1">${ele.name}</p>
                <p class="p2">${ele.des}</p>
                <p class="p3">${ele.title}</p>
                </div>
                <div class="chufang_hide_div">
                            <ul>
                            <li>${ele.do1}</li>
                            <li>${ele.taste}</li>
                            </ul>
                        </div>
                </li>`
                }else if(ele.img){
                    arr.innerHTML+=`<li class="every">
                    <img src="${ele.img}" title="${ele.name}" class="hover_img">
                    <div class="move_div">
                    <p class="p1">${ele.name}</p>
                    <p class="p2">${ele.des}</p>
                    <p class="p3">${ele.title}</p>
                    </div>
                    <div class="chufang_hide_div">
                            <ul>
                            <li>${ele.do1}</li>
                            <li>${ele.taste}</li>
                            </ul>
                        </div>
                    </li>`
                }
                  // 3. 事件添加
            $('.every').click(function() {
                // 临时存储用户点击书本对应的信息，便于详情页读取
                localStorage.every = JSON.stringify(ar[$(this).index()]);
                console.log(sessionStorage.every);
                // 跳转到详情页
                location.href = "/page/detail.html";
            });
            })
        }
    })
    scroll();
    var As=document.querySelectorAll('.tab_2 .ul_list li a');
    var texs=document.querySelectorAll('.ul_tex');
    for(let i=0;i<As.length;i++){
        As[i].onmouseover=function(){
            for(let j=0;j<texs.length;j++){
                texs[j].className="none";
            }
            texs[i].className="block";
        }

    
     
    };
    var San=document.querySelectorAll('.span_div');
    var Jian=document.querySelectorAll('.div_1 .img_1');
    Tab(San,Jian);


    var San_1=document.querySelectorAll('.span_div_1');
    var Jian_1=document.querySelectorAll('.div_2 .img_1');
    Tab(San_1,Jian_1);

    var San_2=document.querySelectorAll('.span_div_2');
    var Jian_2=document.querySelectorAll('.div_3 .img_1');
    Tab(San_2,Jian_2);

    var San_3=document.querySelectorAll('.span_div_3');
    var Jian_3=document.querySelectorAll('.div_4 .img_1');
    Tab(San_3,Jian_3);

    function Tab(tab1,tab2){
        for(let i=0;i<tab1.length;i++){
            tab1[i].onmouseover=function(){
                // tab1[i].className="backr"
                for(let j=0;j<tab2.length;j++){
                    tab2[j].className="none";
                }
                tab2[i].className="block";
            }
        };
    };

    var topBtn=document.querySelector('#btn img');
    topBtn.onmouseover=function(){
        topBtn.src="/images/gotop2.png"
    }
    topBtn.onmouseout=function(){
        topBtn.src="https://static.meishichina.com/v6/img/wap_a/gotop.png"
    }

    var Ul=document.querySelectorAll('.tab_2 .ul_list li a');
    Ul.onclick=function(){
        console.log(this);
    }
  
})();