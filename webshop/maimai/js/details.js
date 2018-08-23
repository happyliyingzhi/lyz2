$(function(){
    function urlTool(urlStr) {
        //1. 把url以？分割
        var arr = urlStr.split("?").pop().split("&");
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
            var htmlstr = template('details', res);
            $(".detailsBox").html(htmlstr);
 
      
        }
    })

    $.ajax({
        url: "http://mmb.ittun.com/api/getcategorybyid",
        type: "GET",
        data: { categoryid: query.productid },
        success: function (res) {
            // 渲染详情
            var htmlstr1 = template('navBar', res);
            $(".navClassify").html(htmlstr1);
        }
    });
})