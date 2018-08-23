$(function () {
    // mui('.header .mui-scroll-wrapper').scroll({
    //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });
    //
    $(".tab-list li").click(function(){
        // alert('1');
        $(this).addClass('active').siblings().removeClass('active');   
    })
    mui('.main .mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //
    mui.init({
        pullRefresh: {
            container: ".main .mui-scroll-wrapper",
            down: {
                style: 'circle',
                auto: true,
                callback: function () {
                    // alert('a');
                    setTimeout(function () {
                        $.ajax({
                            url: "http://mmb.ittun.com/api/getinlanddiscount",
                            type: "get",
                            dataType: "json",
                            success: function (res) {

                                var htmlstr = template('discount', res);
                                $('.content').html(htmlstr);

                            }
                        })
                        mui(".main .mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
                    }, 200);
                }
            }
            
        }
    });

    //随意点击prouduct哪个位置都会跳转到相应的详情页
    $('.content').on('tap','.product',function(){
        // alert('1');
        // alert($(this).data('id'));
        window.location.href = "./detail.html?id="+$(this).data('id');
    });




    $('.gotop').on('tap','.backtotop',function(){
        
        mui(".main .mui-scroll-wrapper").scroll().scrollTo(0,0,0);
    
    })
       
       
    
    


})