


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
    

    //2, 渲染列表内容
    var pageid = 1;
    dataId.pageid = pageid;
    renderList(dataId);

    //3, 渲染选择列表
    rendersect(dataId);

    //4,点击上一页,下一页事件
    var pagenum = 1;
    console.log(pagenum);
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

    });

    $('.next').click(function () {
        
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
    });

    //渲染列表
    function renderList (data) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrl",
            type: "GET",
            data: data,
            datatype: "json",
            success: function(res) {

                $('.mask').hide();
                var htmlstr = template("productList",res);
                $(".productLists").html(htmlstr);
            }
        });
    }

    function rendersect(data) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getmoneyctrl',
            data: data,
            dataType: 'json',
            success: function(obj) {
                var page = Math.ceil(obj.totalCount / obj.pagesize);
                obj.pageTotal = page;
                console.log(obj);
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