/**
 * Created by ¿Ó”¢÷• on 2018/6/16.
 */
$(function () {
    $('.slide').mouseenter(function () {
        $(this).css('opacity',1).show().siblings("li").css('opacity',0.5)
    });
    $('.slide-group').mouseleave(function () {
        $('.slide').css('opacity',1);
    })
})