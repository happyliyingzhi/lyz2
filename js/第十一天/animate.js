/**
 * 动画封装
 * @param ele 移动的元素
 * @param target   目的地
 */
function animate(ele,target) {
    clearInterval(ele.timeID);
    //clearInterval(timeID);
    //因为他们共用了一个计时器,所以其中一个开始,另外一个就结束
    //思路,应该给每个移动的元素自己设置一个timeID,只有自己能停止自己的计时器:对象是可以设置属性的
    //设置计时器
    ele.timeID = setInterval(function () {
        //得到等前的位置
        var current = ele.offsetLeft;
        //设置步长
        //什么时候是正数,什么时候是负数
        //当前位置小于目标位置,那么就是正数
        //当前位置大于目标位置,那么就是负数
        var step = current > target ? -10 : 10;
        current += step;
        //修改位置
        //如果距离大于步长,那么就走一步,如果距离小于步长,那么就直接等于目的地
        if(Math.abs(target-current) > Math.abs(step)){
            ele.style.left = current + "px";
        }else {
            ele.style.left = target+"px";
            clearInterval(ele.timeID);
        }
    },20)
}