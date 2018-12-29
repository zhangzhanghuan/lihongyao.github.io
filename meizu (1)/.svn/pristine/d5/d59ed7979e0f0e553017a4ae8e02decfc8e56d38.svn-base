export {getVerificationCode}

module.exports.loadingMenuList = loadingMenuList;
function loadingMenuList(menuList, response) {
    var htmlArr = [];
    response.forEach(function(menuItem) {
        htmlArr.push(`
            <li class="menu-item">
                <a class="menu-item-title" href="javascript:;">${menuItem.title}</a>
                ${(function(){
                    if(menuItem.contentList) {
                        var menuItemContentStr = `<div class="hid"><ul class="menu-item-content">`;
                        menuItem.contentList.forEach(function(obj) {
                            menuItemContentStr += `
                                <li>
                                    <img src="${obj.img[0]}">
                                    <p class="name">${obj.name}</p>
                                    <p class="price">￥${obj.price}</p>
                                </li>
                            `;
                        });
                        menuItemContentStr += `</ul></div>`;
                        return menuItemContentStr;
                    }else {
                        return "";
                    }
                })()}
            </li>
        `);
    });
    menuList.html(htmlArr.join(""));
 }

//  function loadingGoodsList(htmlStr,ObjStr,keys){
//      var reg = new
//  }
//获取随机验证码
// function getVerificationCode(length) {
//     // 定义随机源
//     var str = "";
//     str += "QWERTYUIOPASDFGHJKLZXCVBNM";
//     str += "1234567890";
//     str += "qwertyuiopasdfghjklzxcvbnm";
//     // 根据长度截取字符
//     var resStr = "";
//     for(var i = 0; i < length; i++) {
//         // 获取随机下标
//         var index = Math.floor(Math.random() * str.length);
//         resStr += str.slice(index, index + 1);
//     }
//     return resStr;
// }


