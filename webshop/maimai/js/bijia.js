/**
 * Created by 李英芝 on 2018/8/19.
 */
//获取网站id
$(function() {

    function geturl(url) {
        var query = {};
        var arr = url.split('?');
        console.log(arr);
        if (arr.length == 1) return query;
        var newarr = arr[1].split('&');
        console.log(newarr);
        //arr.shift();
        //console.log(arr);

        newarr.forEach(function(v) {
            var param = v.split('=');
            query[param[0]] = param[1];
        });
        return query;
    };
    var url = location.href;
    //console.log(url);
    var query = geturl(url);
    console.log(query);
    if (JSON.stringify(query) == "{}") {
        query = {
            categoryid: 0,
            productid: 0
        }
    };

    var indexids = query.productid;
    var cateId = query.categoryid;
    //console.log(cateId);

    //console.log(indexids);

    //商品详情的渲染
    function rendercate(ids) {
        $.ajax({
            type: "get",
            url: "http://mmb.ittun.com/api/getproduct",
            dataType: "json",
            data: { productid: ids },
            success: function(obj) {
                //console.log(obj);
                var arr = template('shopdetail', obj);
                $('.detail-head').html(arr);
            }
        })


    }
    rendercate(indexids);
    //评论的渲染
    function comment(ids) {

        $.ajax({
            type: "get",
            url: "http://mmb.ittun.com/api/getproductcom",
            dataType: "json",
            data: { productid: ids },
            success: function(obj) {
                var arr = template('comments', obj);
                $('.detail-comment').html(arr);
            }
        })

    }
    comment(indexids);
    //三级分类的渲染
    function rendcategory(ids) {

        $.ajax({
            type: 'get',
            url: "http://mmb.ittun.com/api/getcategorybyid",
            data: { categoryid: ids },
            dataType: "json",
            success: function(obj) {
                //console.log(obj);
                var arr = template('catagory', obj);
                $('.nav').html(arr);
            }
        })



    }
    rendcategory(cateId);

    // 点击回到顶部
    $("#back-top").click(function() {
        //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
            $('html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
        $('body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // 点击图标返回上一页
    $(".log").click(function() {
        if (history.length <= 1) {
            location.href = "./index.html"
        } else {
            history.go(-1);
        }
    });



})