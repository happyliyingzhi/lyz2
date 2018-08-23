$(function(){

      // 给tab栏的li添加active类
      $(".tab-list li").click(function(){
        // alert('1');
        $(this).addClass('active').siblings().removeClass('active');   
    })
    
    function urlTool(urlStr) {
        //1. 把url以？分割
        var arr = urlStr.split("?").pop().split("&");
        // console.log(arr); //["proName=1", "page=1"]
        var query = {};
        arr.forEach(function (v) {
            var param = v.split("=");
            query[param[0]] = param[1];
        });
        return query;
    }

    var urlstr = window.location.href; //拿到当前页面的url
    var query = urlTool(urlstr);

    $.ajax({
        url: "http://mmb.ittun.com/api/getmoneyctrlproduct",
        type: "GET",
        data: { productid: query.productid },
        success: function (res) {
            // 渲染详情
            var html = template('pdetail', res);
            $(".descBox").html(html);
            // 渲染评论
            var html1 = template('comment', res);
            $('.commentBox').html(html1);

        }
    })
})