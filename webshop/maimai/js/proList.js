$(function() {
    var url = location.href;
    var arr = url.split("?");
    arr.shift();
    var dataId = {};
    $.each(arr, function(index, value) {
        var newArr = value.split("=");
        dataId[newArr[0]] = newArr[1];
    });
    if (JSON.stringify(dataId) == "{}") {
        dataId = {
            categoryid: 0
        }
    };
    //console.log(dataId);


    //1, 渲染导航标题
    render(dataId);

    //2, 渲染列表内容
    var pageid = 1;
    dataId.pageid = pageid;
    renderList(dataId);

    //3, 渲染选择列表
    rendersect(dataId);

    //4,点击上一页,下一页事件
    var pagenum = 1;
    //console.log(pagenum);
    $('.pre').click(function() {
        if (pagenum <= 2) {
            $('.pre').css({
                backgroundColor: "#eee"
            })
        };
        if (pagenum <= 1) return false;
        $('.next').css({
            backgroundColor: "#ddd"
        });
        pagenum--;
        $("#select").val(pagenum);
        $("#select").change();

    })
    $('.next').click(function() {
            if (pagenum >= $("#select option").length - 1) {
                $(this).css({
                    backgroundColor: "#eee"
                })
            };
            if (pagenum >= $("#select option").length) return false;
            $('.pre').css({
                backgroundColor: "#ddd"
            });
            pagenum++;
            $("#select").val(pagenum);
            $("#select").change();
        })
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
    //点击筛选按钮事件
    $('.filter').click(function() {
        $(".filterlist").fadeIn(500);
        $(".side").addClass("active");
        
    });
    $('.closefilt').click(function() {

        $(".side").removeClass("active");
        $(".filterlist").fadeOut(500, "linear");
    });
    //点击筛选a事件
    $(".sidelist span").click(function() {
        $(this).addClass('active').parent().siblings().children().removeClass('active');
        var categoryid = $(this).data('categoryid');
        location.href = "./proList.html?categoryid=" + categoryid;
    });
    //点击筛选中的箭头加载更多事件
    $(".more").click(function() {
        $(this).toggleClass("icon-xuanzeqishouqi icon-xuanzeqizhankai");
        //第一次删除.A和添加.B。再次点击，它将删除.B和恢复.A。
        if ($(this).hasClass("icon-xuanzeqizhankai")) {
            $(this).parent().siblings().find("a:gt(5)").show();
        } else if ($(this).hasClass("icon-xuanzeqishouqi")) {
            $(this).parent().siblings().find("a:gt(5)").hide();
        }
    });



    // **********************封装方法类********************//
    function render(dataId) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcategorybyid',
            data: dataId,
            dataType: 'json',
            success: function(obj) {
                var html = template('tplNav', obj);
                $('.nav').html(html);
                $('.mask').show();
            }
        })
    };

    function renderList(data) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getproductlist',
            data: data,
            dataType: 'json',
            success: function(obj) {
                //console.log(obj);
                $('.mask').hide();
                var html = template("tplList", obj);
                $('.productList').html(html);

            }
        })
    }

    function rendersect(data) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getproductlist',
            data: data,
            dataType: 'json',
            success: function(obj) {
                var page = Math.ceil(obj.totalCount / obj.pagesize);
                obj.pageTotal = page;
                //console.log(obj);
                var html = template("sect", obj);
                $('#select').html(html);
                if ($("#select option").length == 1) {
                    $('.pre').css({
                        backgroundColor: "#eee"
                    });
                    $('.next').css({
                        backgroundColor: "#eee"
                    });
                }

                // 选择事件
                $("#select").change(function() {
                    $('.mask').show();
                    pageid = $(this).val();
                    pagenum = $(this).val();
                    // if (pagenum < 2) {
                    //     $('.pre').css({
                    //         backgroundColor: "#eee"
                    //     })
                    // } else {
                    //     $('.pre').css({
                    //         backgroundColor: "#ddd"
                    //     })
                    // };
                    pagenum < 2 ? $('.pre').css({
                        backgroundColor: "#eee"
                    }) : $('.pre').css({
                        backgroundColor: "#ddd"
                    });
                    pagenum > $("#select option").length - 1 ? $('.next').css({
                        backgroundColor: "#eee"
                    }) : $('.next').css({
                        backgroundColor: "#ddd"
                    });
                    dataId.pageid = pageid;
                    renderList(dataId);
                })
            }
        })
    }













});