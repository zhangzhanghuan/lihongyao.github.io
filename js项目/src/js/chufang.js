(function(){
    $.ajax({
        url:"/json/chufang.json",
        success:function(obj){
            var arrName=obj.list1;
            var list1="";
            arrName.forEach(el => {
                if(el.do){
                      list1+=`
                <li class="every">
                <img src="${el.img}" title="${el.name}" class="img_1">
                <div class="chufang_div_1">
                    <div class="chufang_div_2">
                        <strong>${el.name}</strong>
                        <span>${el.des}</span>
                        <em>${el.title}</em>
                    </div>
                    
                    <div class="chufang_hide_div">
                        <ul>
                        <li>${el.do1}</li>
                        <li>${el.taste}</li>
                        </ul>
                    </div>
                    </div>
                    <strong class="gx">${el.do}</strong>
                    <img class="san" src="https://s1.c.meishij.net/n/images/gxarrow.png">
                </li>
                `
                }else{
                    list1+=`
                    <li class="every">
                    <img src="${el.img}" title="${el.name}" class="img_1">
                    <div class="chufang_div_1">
                        <div class="chufang_div_2">
                            <strong>${el.name}</strong>
                            <span>${el.des}</span>
                            <em>${el.title}</em>
                        </div>
                        
                        <div class="chufang_hide_div">
                            <ul>
                            <li>${el.do1}</li>
                            <li>${el.taste}</li>
                            </ul>
                        </div>
                        </div>
                    </li>
                    `
                }
                           // 3. 事件添加
          
              
            });
            $('.ul_list_1').html(list1);
              $('.every').click(function() {
                // 临时存储用户点击对应的信息，便于详情页读取
                localStorage.every = JSON.stringify(arrName[$(this).index()]);
                // 跳转到详情页
                location.href = "/page/detail.html";
            });
        }
    });

    $.ajax({
        url:"/json/chufang.json",
        success:function(obj){
            var arrName=obj.list3;
            // document.write(`Insert into `)
            var list1="";
            arrName.forEach(el => {
                if(el.do){
                      list1+=`
                <li class="every1">
                <img src="${el.img}" title="${el.name}" class="img_1" alt="图片已过期">
                <div class="chufang_div_1">
                    <div class="chufang_div_2">
                        <strong>${el.name}</strong>
                        <span>${el.des}</span>
                        <em>${el.title}</em>
                    </div>
                    
                    <div class="chufang_hide_div">
                        <ul>
                        <li>${el.do1}</li>
                        <li>${el.taste}</li>
                        </ul>
                    </div>
                    </div>
                    <strong class="gx">${el.do}</strong>
                    <img class="san" src="https://s1.c.meishij.net/n/images/gxarrow.png">
                </li>
                `
                }else{
                    list1+=`
                    <li>
                    <img src="${el.img}" title="${el.name}" class="img_1">
                    <div class="chufang_div_1">
                        <div class="chufang_div_2">
                            <strong>${el.name}</strong>
                            <span>${el.des}</span>
                            <em>${el.title}</em>
                        </div>
                        
                        <div class="chufang_hide_div">
                            <ul>
                            <li>${el.do1}</li>
                            <li>${el.taste}</li>
                            </ul>
                        </div>
                        </div>
                    </li>
                    `
                }
              
            });
            $('.ul_list_3').html(list1);
            $('.every1').click(function() {
                // 临时存储用户点击对应的信息，便于详情页读取
                localStorage.every = JSON.stringify(arrName[$(this).index()]);
                // 跳转到详情页
                location.href = "/page/detail.html";
            });
        }
    });


    $.ajax({
        url:"/json/chufang.json",
        success:function(obj1){
            var arr=obj1.list2;
            var list=""
            arr.forEach(function(el){
                list+=`
                <li>
                    <a>
                        <span class="yingji">${el.ying}</span>
                        <strong class="shei">${el.who}</strong>
                        <em class="shuliang">${el.num}</em>
                    </a>
                </li>
                `
            });
            $('.ul_list_2').html(list);
           
        }
    })
 

    $.ajax({
        url:"/json/chufang.json",
        success:function(el){
            var arr=el.list4;
            arr.forEach(function(ele){
                var arr1=ele.list6;
                var list="";
                list+=`<div  class="div_title div_title_1">${ele.title}</div>`
                arr1.forEach(ele1=>{
                    list+=`

               
                    <a>${ele1.a}</a>
               
                    `
                }); 
                var arr2=ele.list7;
                var list1="";
                list1+=`<div class="div_title">${ele.title1}</div>`
                arr2.forEach(ele2=>{
                    list1+=`
         
                    <a>${ele2.a}</a>
              
                    `
                }); 
                var arr3=ele.list8;
                var list2="";
                list2+=`<div  class="div_title">${ele.title2}</div>`
                arr3.forEach(ele2=>{
                    list2+=`
             
                    <a>${ele2.a}</a>
        
                    `
                });   
                var arr4=ele.list9;
                var list3="";
                list3+=`<div  class="div_title">${ele.title3}</div>`
                arr4.forEach(ele2=>{
                    list3+=`

                 
                    <a>${ele2.a}</a>
          
                    `
                });
                
                $('.left_div_3').html(list);
                $('.left_div_4').html(list1);
                $('.left_div_5').html(list2 );
                $('.left_div_6').html(list3 );
            });
           
            }
    })

    

// tab选项卡
    function Tab(tab1,tab2){
        for(let i=0;i<tab1.length;i++){
            tab1[i].onclick=function(){
                for(let j=0;j<tab2.length;j++){
                    tab2[j].className="none";
                }
                tab2[i].className="block";
            }
        };
    };
    var lists=document.querySelectorAll('.left_title li a');
    var Divs=document.querySelectorAll('.content_left .left_div');
    Tab(lists,Divs);
}());