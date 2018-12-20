function loadingTeam() {
    // 获取容器
    var oWrap   = document.querySelector('.right');
    // 定义变量存储拼接的子元素标签
    var htmlStr = "";
    // 遍历数据
    model.right.forEach(function(obj, index) {
        // 拼接子节点li
        htmlStr += 
            `<span class="span-1">
                <img src="./image/lun/${obj.img}">  
            </span>`;
           
            
    });

    
    // 将子节点添加至容器中
    oWrap.innerHTML = htmlStr;
}

function myfunction(){
    document.getElementById("myssss");
}

