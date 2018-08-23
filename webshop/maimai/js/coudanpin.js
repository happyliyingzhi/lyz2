$(function () {
    var subnav = document.querySelector('.subnav');
    var subnav2 = document.querySelector('.subnav2');
    var query = {};

    function urlTool(urlStr) {
        //1. 把url以？分割
        var arr = urlStr.split("?").pop().split("&");
        //console.log(arr); //["proName=1", "page=1"]
        // var query = {};
        arr.forEach(function (v) {
            var param = v.split("=");
            query[param[0]] = param[1];
        });

        return query;
    }
    //console.log(query.shopid);
    //console.log(query.shopname);

    function render(sid, aid) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getgsproduct?",
            data: {
                shopid: sid,
                areaid: aid
            },
            dataType: "JSON",
            success: function (res) {
                //console.log(res);
                var html = template('tpl2', {
                    list: res.result
                });
                $('.content').html(html);
            }
        })
    }

    var urls = window.location.href;
    //console.log(urls);
    urlTool(urls);



    var arr = ["没数据不要钱", "1-3元", "3-5元", "5-10元", "10-15元", "15元以上"];
    var uls = document.querySelector('.uls3');
    $('.subnav .uls3').slideToggle(0.000000001).siblings('ul').hide();
    uls.innerHTML = "";
    for (var i = 0; i < 6; i++) {
        var lis = document.createElement('li');
        lis.innerHTML = arr[i];
        uls.appendChild(lis);
        uls.style.display = "none";
    }

    $.ajax({
        url: 'http://mmb.ittun.com/api/getgsshop',
        dataType: 'json',
        success: function (res) {
            var html = template('tpl', {
                list: res.result
            });
            $('.subnav .uls1').html(html);

            if (query.shopid != undefined & query.areaid != undefined) {
                render(query.shopid, query.areaid);
                $('.nav .left .store li').html($('.uls1 li').eq(query.shopid).data('shopname'));
                $('.uls1 li').eq(query.shopid).children('span').show().parent('li').siblings('li').children('span').hide();
            } else {
                render(0, 0);
            }
        }
    });

    $.ajax({
        url: 'http://mmb.ittun.com/api/getgsshoparea',
        dataType: 'json',
        success: function (res) {
            //console.log(res);
            var html = template('tpl', {
                list: res.result
            });
            $('.subnav .uls2').html(html);
            if (query.shopid != undefined & query.areaid != undefined) {
            $('.nav .left .area li').html($('.uls2 li').eq(query.areaid).data('areaname').split("（")[0]);
            $('.uls2 li').eq(query.areaid).children('span').show().parent('li').siblings('li').children('span').hide();
            }
        }
    });

    $('.nav .left #mo').click(function () {
        $('.subnav .uls3').slideToggle(0.000000001).siblings('ul').hide();
    })
    $('.nav .left #st').click(function () {
        $('.subnav .uls1').slideToggle(0.000000001).siblings('ul').hide();
    })
    $('.nav .left #ar').click(function () {
        $('.subnav .uls2').slideToggle(0.000000001).siblings('ul').hide();
    })


    $('.nav .left a').click(function () {
        if (subnav2.style.display == "block") {
            $('.subnav2').hide();
        }
        // 箭头方向
        if ($(this).children('span').hasClass('rotate')) {
            $(this).children('span').removeClass('rotate');
        } else {
            $(this).children('span').addClass('rotate');
        }
        if ($(this).siblings('a').children('span').hasClass('rotate')) {
            $(this).siblings('a').children('span').removeClass('rotate');
        }

    });

    $('.nav .right').click(function () {
        $('.subnav2').slideToggle(0.0000000001);
        $('.subnav ul').hide();
        $('.nav .left span').removeClass('rotate');

    });

    var newSid;
    var newAid;
    $('.subnav .uls1').on('click', 'li', function () {
        newSid = $(this).data('shopid');
        if (newAid == undefined) {
            render(newSid, 0);
        } else {
            render(newSid, newAid);
        }
        $('.nav .left .store li').html($(this).data('shopname'));
        $('.uls1').hide();
        $('.nav .left span').removeClass('rotate');
        $(this).children('span').show().parent('li').siblings('li').children('span').hide();


    });
    $('.subnav .uls2').on('click', 'li', function () {
        newAid = $(this).data('areaid');
        if (newSid == undefined) {
            render(0, newAid);
        } else {
            render(newSid, newAid);
        }
        var newareaName = $(this).data('areaname').split("（")[0];
        $('.nav .left .area li').html(newareaName);
        $('.nav .left .store li').html($(this).data('shopname'));
        $('.uls2').hide();
        $('.nav .left span').removeClass('rotate');
        $(this).children('span').show().parent('li').siblings('li').children('span').hide();
        return newAid;
    });


    $('.mui-icon-back').click(function () {
        window.location.href = './couyixia.html';
    })



    $("#back-top").click(function () {
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