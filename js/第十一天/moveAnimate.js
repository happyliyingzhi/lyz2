/**
 * Created by 李英芝 on 2018/6/2.
 */
/**
 * 动画函数
 * @param ele 元素
 * @param target 目标
 */
function animate(ele,target){
    clearInterval(ele.timeID);
    ele.timeID=setInterval(function () {
        var currentLeft=ele.offsetLeft;
        //获取当前位置比目标位置要小，步长是正，如果当前位置比目标位置要大，步数为负
        var step=currentLeft>target?-9:9;
        //计算
        currentLeft+=step;
        //赋值
        //console.log(currentLeft);
        //如果目标位置减去当前的的位置，不够走一步，就表示到了最后的，直接赋值
        if(Math.abs(target-currentLeft)>Math.abs(step)){
            ele.style.left=currentLeft+"px";
        }else{
            ele.style.left=target+"px";
            clearInterval(ele.timeID);
        }
    },30);

}