/**
 * Created by Administrator on 2018/9/17.
 */
    function extend(child,parent){
    var F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}




