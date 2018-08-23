$(function() {


    //页面分类标题数据渲染
    categoryTitleRender();

    function categoryTitleRender() {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcategorytitle',
            dataType: 'json',
            success: function(obj) {
                var html = template('tplcategorytitle', obj);
                $(".productList").html(html);
                $.each(obj.result, function(index, value) {
                    var id = value.titleId;
                    categoryListRender(id, index);
                })
            }
        })
    };

    //页面分类列表数据渲染
    function categoryListRender(id, index) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcategory',
            data: { titleid: id },
            dataType: 'json',
            success: function(obj) {
                var html = template("tplcategory", obj);
                $(".datailList" + index).html(html);
                //console.log($(".datailList" + index).find("a").length % 3);
                if ($(".datailList" + index).find("a").length % 3 == 1) {
                    for (var i = 1; i <= 2; i++) {
                        var a = document.createElement("a");
                        $(".datailList" + index).find("li").append(a);
                    }
                }
                if ($(".datailList" + index).find("a").length % 3 == 2) {
                    var a = document.createElement("a");
                    $(".datailList" + index).find("li").append(a);
                }
            }
        })
    };

    //1.点击事件切换和箭头方向改变,排他思想
    $(".productList").on('click', '.item', function() {
        if ($(this).children('.detail').hasClass('active')) {
            $(this).children('.detail').removeClass('active');
        } else {
            $(this).children('.detail').addClass('active')
                .parent().siblings()
                .find('.detail').removeClass('active');
        };
        if ($(this).find('.btnRight').hasClass('icon-xuanzeqizhankai')) {
            $('.btnRight').removeClass('icon-xuanzeqishouqi').addClass('icon-xuanzeqizhankai');
            $(this).find('.btnRight').removeClass('icon-xuanzeqizhankai')
                .addClass('icon-xuanzeqishouqi')
        } else
        if ($(this).find('.btnRight').hasClass('icon-xuanzeqishouqi')) {
            $('.btnRight').removeClass('icon-xuanzeqizhankai').addClass('icon-xuanzeqishouqi');
            $(this).find('.btnRight').removeClass('icon-xuanzeqishouqi').addClass('icon-xuanzeqizhankai')
        };
        if (!$('.detail').hasClass('active')) {
            $('.btnRight').removeClass('icon-xuanzeqishouqi').addClass('icon-xuanzeqizhankai');
        }
        // $('.datailList').html("");

        // categoryListRender($(this).data('titleid'));


    });
    //2, 点击图标返回上一页
    $(".log").click(function() {
        if (history.length <= 1) {
            location.href = "./index.html"
        } else {
            history.go(-1);
        }
    });
    //3,点击关闭按钮,关闭广告bar
    $(".closebar").click(function() {
        $(".app-promotion-bar").hide();
    })














});