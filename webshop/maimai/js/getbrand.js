$(function() {
    //1：请求渲染页面函数;十大品牌
    function render(id) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getbrand",
            type: "get",
            data: {
                brandtitleid: id
            },
            success: function(res) {
                //console.log(res);
                var htmlstr = template('tmp', res);
                $('#ul1').html(htmlstr);
            }

        })
    }

    //封装提取url关键字的函数
    function urlTool(urlStr) {
        //把url以?分割;再调用pop方法删除数组最后一个元素得到这个元素再.split("&")
        var arr = urlStr.split("?");
        arr.shift();
        console.log(arr);
        var query = {}; //准备一个空对象
        arr.forEach(function(v) { //用forEach的方法循环遍历数组;再用.split("=")截取数组
            var param = v.split('=');
            query[param[0]] = param[1]; //设置成对象
        });
        return query;
    }
    //拿到url中携带的id
    var urlStr = window.location.href;
    var dataid = urlTool(urlStr);
    console.log(dataid);
    if (JSON.stringify(dataid) == "{}") {
        dataid = {
            brandTitleId: 0
        }
    };
    var id = Number(dataid.brandTitleId);
    console.log(id);


    //调用渲染函数
    if (id == 0) {
        console.log(id);
        render(id);
        render2(id, 4);
    } else {
        render(1);
        render2(1, 2);
    }



    //拿到标题
    var titleStr = sessionStorage.getItem('titleStr');
    //console.log(titleStr);
    //split()
    var newtitle = titleStr.split('十')[0];
    //console.log(newtitle);
    //获取品牌好
    var str1 = $('.good').text();
    //console.log(str1);
    //拼接
    var newstr1 = newtitle + str1;
    //console.log(newstr1);
    //品牌
    $('.good').text(newstr1);
    $('.hot').text(newstr1);
    //销量
    var str2 = $('.hot1').text();
    var newstr2 = newtitle + str2;
    $('.hot1').text(newstr2);
    //评论
    var str3 = $('#str2').text();
    var newstr3 = newtitle + str3;
    $('#str2').text(newstr3);





    //2：请求渲染十大品牌的销量排行
    function render2(id, pagesize) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getbrandproductlist",
            type: "get",
            data: {
                brandtitleid: id,
                pagesize: pagesize
            },
            success: function(res) {
                console.log(res.result);
                var htmlstr = template('tmp2', res);
                $('.xiaoliang').html(htmlstr);
            }
        })
    }
    // if (id == 0) {
    //     render2(id, 4);
    // } else {
    //     render2(1, 2);
    // }


    //3:请求渲染用户评论
    function render3(id) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproductcom",
            type: "get",
            data: {
                productid: id
            },
            success: function(res) {
                //console.log(res);
                //准备模板渲染
                var htmlstr = template('tmp3', res);
                $('#ul3').html(htmlstr);

            }
        })
    }
    render3(id);


    //4:点击某条销量排行跳转到对应的详情页面
    $('.xiaoliang').on('click', 'li', function() {
        var productid = $(this).data('productid');
        //console.log(productid);
        var categoryid = $(this).data('categoryid');
        window.location.href = './bijia.html?categoryid=' + categoryid + '&productid=' + productid;
    })


    //5:1-10序号的点击事件，点击对应的一条数据跳转对应的详情页
    $('#ul1').on('click', 'li', function() {
        var categoryid = $(this).data('categoryid');
        window.location.href = './proList.html?categoryid=' + categoryid;
    })


    //点击返回顶部事件
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
})