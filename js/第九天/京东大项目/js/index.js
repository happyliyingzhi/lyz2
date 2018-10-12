/**
 * Created by itcast on 2018 04/02.
 */
window.onload = function () {
  //关闭顶部广告开始---------------------------------------------------
  //1.找到小叉叉,给他一个点击事件.
  id("adCloseBtn").onclick = function () {

    //2.1 把顶部广告栏的内容全部清空.以及他的高度设置为0.
    // id("banner").innerHTML = "";
    // id("banner").style.height = "0px";


    //2.2 还可以设置顶部广告栏隐藏.
    //id("banner").style.display = "none";

  };
  //关闭顶部广告结束---------------------------------------------------
    //逻辑:每间隔一秒钟,就要去修改秒杀模块的时间,  时分秒  中的内容
    //1.获取元素
    //var spanHour = id("spanHour");
    //var spanMin = id("spanMin");
    //var spanSec = id("spanSec");
   // var timeId;
    ////2.设置定时器
    //timeId = setInterval(function () {
    ////    //3.想要修改时间,就要先获取原来的时间
    //    var sec = spanSec.innerHTML;
    //    if(sec == 0){
    //        sec = 60;//如果sec等于0,那么就代表一分钟走完,将sec改成60,同时要让min减1
    //
    //        var min = spanMin.innerHTML;
    //        if(min == 0){
    //            min = 60;////var hour = spanHour.innerHTML;
    //
    //            if(hour == 0){
    //                //代表计时器结束
    //                //清空计时器
    //                clearInterval(timeId);
    //                //清空了计时器之后,后面的就不需要再执行了,直接结束程序
    //                return;
    //            }
    //            hour--;
    //            spanHour.innerHTML = hour < 10 ? "0"+hour : hour;
    //        }
    //        min--;
    //
    //        spanMin.innerHTML = min < 10 ? "0"+min : min;
    //
    //    }
    //    sec--;//让秒自减1
    //
    //    //////4.将修改的时间赋值上去
    //    spanSec.innerHTML = sec < 10 ? "0"+sec : sec;
    //
    //},1000);


  //秒杀部分开始-----------------------------------------------------------------
    var spanHour=document.getElementById("spanHour");
    var spanMin=document.getElementById("spanMin");
    var spanSex=document.getElementById("spanSec");
    var timeID;
       clearInterval(timeID);

    timeID= setInterval(function () {
           var hour= spanHour.innerHTML;
           var min=spanMin.innerHTML;
           var sec=spanSex.innerHTML;
         if(sec==0) {
             sec = 60;
             if (min == 0) {
                 min = 60;

             if (hour == 0) {
                 clearInterval(timeID);
                 return;
             }
                 hour--;
                 spanHour.innerHTML=hour<10?"0"+hour:hour;

             }
              min--;
             spanMin.innerHTML=min<10?"0"+min:min;
         }
          sec--;
         spanSex.innerHTML= sec<10?"0"+sec:sec;
    },10)
};