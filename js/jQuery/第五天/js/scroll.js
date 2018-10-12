/**
 * Created by 李英芝 on 2018/6/29.
 */
//缓动动画的函数
function getstyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return window.getComputedStyle(ele,null)[attr];
    }
}

function huandong(target,box,attr,spd){
    clearInterval(box.timeId);
    box.timeId = setInterval(function () {
        var boxleft = parseInt(getstyle(box,attr));
        var stup = target > boxleft ? Math.ceil((target - boxleft) / 10) : Math.floor((target - boxleft) / 10);
        boxleft += stup;
        if(Math.abs(target - boxleft) > Math.abs(stup)){
            box.style[attr] = boxleft + "px";
        }else{
            box.style[attr] = target + "px";
            clearInterval(box.timeId)
        }
    },spd)
}