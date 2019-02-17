(function(){
    let Order=JSON.parse(localStorage.orders);
    console.log(Order);
    console.log(document.cookie.slice(9))
    var Username=document.querySelector('.username');
    Username.innerText=document.cookie.slice(9);

    var Ul=document.querySelector('.ul_list_save');
    Order.forEach(element => {
        console.log(element);
        if(JSON.parse(localStorage.orders)){
             Ul.innerHTML+=`
        <li class="one">
        <img src="${element.img}">
        <p class="p1">${element.name}</p>
        <p class="p2">${element.des}</p>
        <p class="p3">${element.title}</p>
        <div class="hide_save_1">取消收藏</div>
        <div class="hide_save">
        <p class="p4">${element.do1}</p>
        <p class="p5">${element.taste}</p>
        </div>
        </li>
        ` 
        }else{
            Ul.innerHTML=`<p class="no_order">还没有收藏<a href="/page/chufang.html">点击去选择收藏</a></p>` 
        }
      
    });

    function remove(indexs){
    let Order=JSON.parse(localStorage.orders);
    let tmpArr=[];
    
    for(let i=0,len1=Order.length;i<len1;i++){
        let flag=false;

        for(let j=0,len2=indexs.length;j<len2;j++){
            if(i==indexs[j]){
                flag=true;
            }
        }
        if(!flag){
            tmpArr.push(Order[i]);
        }
    }
    localStorage.orders=JSON.stringify(tmpArr)
    }
    var One=document.querySelector('.one');
    if(One.length==0){
        Ul.innerHTML=`<p class="no_order">还没有收藏<a href="/page/chufang.html">点击去选择收藏</a></p>` 
    }
    // var $orders=$('.one');
    var Hide=Array.from(document.querySelectorAll('.hide_save_1'));
    // for(let i=0;i<Hide.length;i++){

    // }
    Hide.forEach(function(index){
        // this.orders.index=index;

    })
    Hide.onclick=function(){
        console.log(this)
        // index=this.dataset.index;
        console.log(index);
        alert('确定')
    }

}())