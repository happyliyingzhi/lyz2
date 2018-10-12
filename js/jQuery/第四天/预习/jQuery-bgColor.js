/**
 * Created by itcast on 2018 06/05.
 */
(function ($) {
  $.prototype.bgColor = function (color) {
    //谁调用这个bgColor方法,这个方法中的this就是谁.
    //console.log(this); //这里的this是jQuery对象.

    this.css('backgroundColor',color);

    //返回当前这个元素.
    return this;
  }
}(jQuery));