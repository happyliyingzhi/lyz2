/**
 * Created by 李英芝 on 2018/6/2.
 */
function animate (target){
    //清空计时器
    clearInterval(timeID);
    //2.设置到400的计时器
    setInterval(function () {
         //3.先获取盒子开始的位置
         var leftBox=box.offsetLeft;
        //4.设置步长
            var step=10;
           leftBox=leftBox+step;
        //5.判断最后一步的距离
        if(leftBox<target){
            box.style.left=leftBox+"px";
        }else{
            //6.当超过400，那么强行设置400
            box.style.left=target+"px";
            //7.当da400这个位置的时候，计时器应该停止
            clearInterval(timeID);
        }
        },100)
}
