/**
 * Created by 李英芝 on 2018/6/4.
 */
/**
 * 函数缓动动画
 * @param ele 元素
 * @param target 目标距离
 */
function animateSlow(ele,target){
    //设置计时器之前,清空计时器
    clearInterval(ele.timerID);
    //设置计时器
    ele.timerID = setInterval(function () {
        //获取当前的left值
        var currentLeft = ele.offsetLeft;
        //计算步长.
        var step = (target - currentLeft)/3;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //计算
        currentLeft += step;
        //赋值:因为步长最后是1,无论如何都会赋值的.
        ele.style.left = currentLeft + "px";
        //console.log(currentLeft);
        if(currentLeft == target){
            clearInterval(ele.timerID);
        }
    },50);
}
/**
 * 获得元素的样式属性
 * @param ele 目标元素
 * @param attr 目标属性名
 * @returns {*} 目标属性值
 */
function getStyle(ele,attr) {
    //能力检测
    if(ele.currentStyle){
        //如果进入这里,那么代表你的浏览器是ie8
        return ele.currentStyle[attr];
    }else {
        //如果进入这里,那么你的浏览器是火狐或者谷歌
        return window.getComputedStyle(ele,null)[attr];
    }

}
/**
 * 针对不同浏览器的兼容，获得滚动出去的距离
 * @returns {{top: (Number|number), left: (Number|number)}}
 */

function getScroll() {
    //利用短路来做判断
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0

    }
}
/**
 * 封转可视区client的兼容
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
//封装可视区的兼容的函数
function getClient() {
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

    }
};
    /**
     * ie8和ie8之前的浏览器,不支持e.pageX和e.pageY, 所以针对ie8及以前的浏览器要做计算.
     * 那么针对e.pageX和e.pageY就要做兼容处理.
     * @param e
     * @returns {{pageX: (Number|number), pageY: (Number|number)}}
     */
    //获得page位置的兼容方案
    function getPage(e) {
        e = e || window.event;
        return {
            pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
            pageY: e.clientY || e.clientY+document.documentElement.scrollTop
        }
    };
/**
 * 阻止冒泡的兼容
 * @param e
 * @returns {boolean}
 */
function stopBubble(e){
    e=e||window.event;
    if(e.stopPropagation){
        //如果能进当前浏览器是谷歌的
        return e.stopPropagation();
    }else{
        return e.cancelBubble=true;
    }
}
/**
 * 可以同时注册相同的事件
 * @param ele   谁调用
 * @param type 字符串类型
 * @param fun  函数
 */
function setEvent(ele,type,fun) {
    if(ele.attachEvent){
        ele.attachEvent("on"+type,fun);
    }else{
        ele.addEventListener(type,fun,false);
    }
}
/**
 * 移出兼容的事件
 * @param ele   谁调用
 * @param type 字符串类型
 * @param fun  函数
 */
function setRemoveEvent(ele,type,fun) {
    //能力检测
    if(ele.detachEvent){
        //进入这里代表你是ie8
        ele.detachEvent("on"+type,fun);
    }else{
        //代表谷歌或火狐
        ele.removeEventListener(type,fun,false);
    }
}