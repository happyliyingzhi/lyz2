$(function(){
    $.ajax({
        url: 'http://mmb.ittun.com/api/getgsshop',
        dataType: 'json',
        success: function (res) {
            var html = template('tpl', {
                list: res.result
            });
            $('.uls1').html(html);
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

            $('.uls2').html(html);
        }
    });

    $('.stores a').click(function(){
        $('.uls1').slideToggle(500);
        $('.uls2').hide();
    });
    $('.areas a').click(function(){
        $('.uls2').slideToggle(500);
        $('.uls1').hide();
    })



    var newSid=0;
    var newAid=0;
    var newSname=null;
    var newAname=null;
    $('.uls1').on('click', 'li', function () {
        newSid = $(this).data('shopid');
        newSname=$(this).data('shopname');
        $('.stores a').html($(this).data('shopname'));
        $('.uls1').hide();


    });
    $('.uls2').on('click', 'li', function () {
        newAid = $(this).data('areaid');
        newAname=$(this).data('areaname').split("（")[0];
        $('.areas a').html($(this).html());
        $('.uls2').hide();
    });


    $($('.mui-icon-back').click(function(){
        window.location.href='./index.html';
    }))

    $('.section5 button').click(function(){
        window.location.href="./coudanpin.html?shopid="+newSid+"&areaid="+newAid;
    })
})

