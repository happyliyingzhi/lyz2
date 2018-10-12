/**
 * Created by itcast on 2018 06/05.
 */
(function ($) {
  //给$这个顶级对象,添加方法;   静态方法.
  $.add = function (a,b) {
    return a + b;
  }
}(jQuery));