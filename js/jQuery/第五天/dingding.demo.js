$(function () {

    //存一个li移动的次数
    var index=0
   //li的长度
    var $lilen=$('#ulli li').length;
    //console.log($lilen);
    //鼠标计时器变量
    var timeid=null;
    function arr(){
        index++;
        //判断条件
        if(index==$lilen){
            index=0;
            top=0;
        }
        //让ul移出的长度
        $('#ulli').animate({
            top:-index*78
        },1000)
    }

    timeid= setInterval(arr,2000)

    $('#kuangjia').on('mouseenter', function () {
        clearInterval(timeid)
    }).on('mouseleave', function () {
        timeid= setInterval(arr,2000)
    })



})

//$(".newslist li").eq(0).clone(true).appendTo(".newslist");
//var hottime = 0;
//var newListlen = $(".newslist li").length;
//var hotNewtimer = null;
//hotNewtimer = setInterval(hotNew, 2000);
//function hotNew() {
//    hottime++
//    if (hottime == newListlen) {
//        hottime = 1
//        $(".newslist").stop(true, false).animate({
//            top: 0,
//        }, 0);
//    }
//    $(".newslist").stop(true, false).animate({
//        top: -hottime * 78,
//    });
//};
//$(".news").on("mouseenter", function () {
//    clearInterval(hotNewtimer)
//}).on("mouseleave", function () {
//    hotNewtimer = setInterval(hotNew, 2000);
//})