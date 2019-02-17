


(function(){
    let date=JSON.parse(localStorage.every);

    console.log(date);

    // var arr=[];
    // for(let i in date){
    //     arr.push(date[i]);
    // }
    // console.log(arr);
 
    
    

    

    var Content=document.querySelector('.detail_content');
    Content.innerHTML=`
    <div class="detail">
            <p class="p1">首页 > 菜谱大全 > 热菜</p>
            <div class="content_header">
                <img src="${date.img}" class="detail_img_1" alt="图片已过期">
                    <span class="content_header_right">
                        <span class="content_header_right_1">
                            <p class="p2">${date.name}</p>
                            <span class="content_header_right_2">
                            <a class="save">收藏()</a><span class="share">分享到:</span>
                       
                            </span>  
                        </span>
                    <div class="gongyi">
                    <strong>工艺</strong>
                    <a class="a1">${date.gongyi}</a>        
                    </div>

                    <div class="gongyi kouwei">
                    <strong>口味</strong>
                    <a class="a1">${date.kouwei}</a>        
                    </div>
                    
                    
                    <div class="four nd">
                    <strong>难度</strong>
                    <span class="icon icon_nd"></span>
                    <span class="processing processing_nd"></span>
                    <a class="">初中水平</a>        
                    </div>

                    <div class="four rs">
                    <strong>人数</strong>
                    <span class="icon icon_rs"></span>
                    <span class="processing processing_rs"></span>
                    <a class="">3人份</a>        
                    </div>

                    <div class="four time">
                    <strong>准备时间</strong>
                    <span class="icon icon_time"></span>
                    <span class="processing processing_time"></span>
                    <a class="">15分钟</a>        
                    </div>

                    <div class="four time2">
                    <strong>烹饪时间</strong>
                    <span class="icon icon_time2"></span>
                    <span class="processing processing_time2"></span>
                    <a class=""><30分钟</a>        
                    </div>

                </span>
            
            </div>
            <div class="content_main">
                <div class="content_mian_1">
            
                ${(function(){
                 if(date.des1){
                     return `<p class="p3">${date.des1}</p>`
                 }else{
                     return "";
                 }
                })()}
                    <p class="p4">用料</p>
                        <div  class="cailiao_zhuliao">
                        <span class="liao zhuliao">主料</span>
                        <a class="liaoname zhuliao_1">${date.zhuliao}</a>
                        <a class="a_img"></a>   
                        <a class="num">${date.num1}</a>
                        </div>
                        <ul class="cailiao_fuliao">
                                <span class="liao fuliao" style="float:left">辅料</span>
                                <li>
                                <a class="liaoname">${date.fuliao}</a>
                                <a class="a_img"></a>                                
                                <a class="num">${date.num2}</a>
                                </li>
                                <li>
                                <a class="liaoname">${date.shengfen}</a>
                                <a class="a_img"></a>
                                <a class="num">${date.num3}</a>
                                </li>
                                <li>
                                <a class="liaoname">${date.yan}</a>
                                <a class="a_img"></a>
                                <a class="num">${date.num4}</a>
                                </li>
                                <li>
                                <a class="liaoname">${date.jiangyou}</a>
                                <a class="a_img"></a>
                                <a class="num">${date.num5}</a>
                                </li>
                        </ul>
                </div>
                <div class="content_mian_2">
                <p class="p5">${date.zuofa}</p>
                <span>1. <a class="zuofa">${date.zuofa1}</a></span>
               

                ${(function(){
                    if(date.img1){
                        return `<img src="${date.img1}" class="img1">
                        `;
                    }else{
                        return "";
                    }
                })()}
                

                <span>2.<a class="zuofa">${date.zuofa2}</a></span>
                
                ${(function(){
                    if(date.img2){
                        return `<img src="${date.img2}" class="img1">
                        `;
                    }else{
                        return "";
                    }
                })()}

                

                <span>3.<a class="zuofa">${date.zuofa3}</a></span>
                
                <img src="${date.img3}" class="img1">

                <span>4.<a class="zuofa">${date.zuofa4}</a></span>
                
            

                ${(function(){
                    if(date.img4){
                        return `<img src="${date.img4}" class="img1">
                        `;
                    }else{
                        return "";
                    }
                })()}

                <span>5.<a class="zuofa">${date.zuofa5}</a></span>
                
                <img src="${date.img5}" class="img1">
                ${(function(){
                    if(date.zuofa6){
                        return `<span>6.<a class="zuofa">${date.zuofa6}</a></span>`
                    }else{
                        return "";
                    }
                })()}
              
                
                <img src="${date.img6}" class="img1">

                ${(function(){
                    if(date.zuofa7){
                        return `<span>7.<a class="zuofa">${date.zuofa7}</a></span>`
                    }else{
                        return "";
                    }
                })()}
              
                ${(function(){
                    if(date.img7){
                        return ` <img src="${date.img7}" class="img1">`
                    }else{
                        return "";
                    }
                })()}
               
                ${(function(){
                    if(date.zuofa8){
                        return `<span>8.  <a class="zuofa">${date.zuofa8}</a></span>`
                    }else{
                        return "";
                    }
                })()}

                ${(function(){
                    if(date.img8){
                        return `<img src="${date.img8}" class="img1">`
                    }else{
                        return "";
                    }
                })()}
              
           

                ${(function(){
                    if(date.zuofa9){
                        return `<span>9.<a class="zuofa">${date.zuofa9}</a></span>`
                    }else{
                        return "";
                    }
                })()}
              
                ${(function(){
                    if(date.img9){
                        return `<img src="${date.img9}" class="img1">`
                    }else{
                        return "";
                    }
                })()}

                ${(function(){
                    if(date.zuofa10){
                        return `<span>10.<a class="zuofa">${date.zuofa10}</a></span>`
                    }else{
                        return "";
                    }
                })()}
              
                ${(function(){
                    if(date.img10){
                        return `<img src="${date.img10}" class="img1">`
                    }else{
                        return "";
                    }
                })()}

                </div>
            </div>
    </div>
    `
    var Save=document.querySelector('.save');
    Save.onclick=function(){
        if(localStorage.isLogin=='false'){
            new LHYAlertView({
                type:"alert",
                message:"你还未登录，请先登录！"
            })
        }else{
            let orders={
                "img":date.img,
                "name":date.name,
                "des":date.des,
                "title":date.title,
                "do1":date.do1,
                "taste":date.taste
            };
            let rootArr=[];
            if(localStorage.orders){
                rootArr=JSON.parse(localStorage.orders);
            }
            //处理重复收藏
            let flag=false;
            for(let i=0,len=rootArr.length;i<len;i++){
               if(rootArr[i].name === orders.name){
                   new LHYAlertView({
                       type:"alert",
                       message:"你已经收藏过，不用再执行操作"
                   }) 
                   flag=true;
                   return;
                  
               }
            }
            if(!flag){
                new LHYAlertView({
                    type:"alert",
                    message:"收藏成功",
                    autoClose:5000
                })
                rootArr.push(orders)          
                 location.href="/page/save.html"
            }
            localStorage.orders=JSON.stringify(rootArr);

        }
    }
})();