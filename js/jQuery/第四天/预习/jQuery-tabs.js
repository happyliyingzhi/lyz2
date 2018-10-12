/**
 * Created by itcast on 2018 06/05.
 */
(function ($) {
  /**
   * 给$的原型添加tabs方法.实现tab栏切换.
   * @param obj.tabHeads       tab栏切换上面的那些li标签
   * @param obj.tabHeadsClass  tab栏切换上面选中的li标签,要显示的样式类
   * @param obj.tabBodys       tab栏切换下面要显示的div们
   * @param obj.tabBodysClass  tab栏切换下面对应显示的div的样式
   */
  $.fn.tabs = function (obj) {
    //根据传递过来的参数,实现tab栏切换.
    var $tabDiv = this;

    //找到上面的那些li标签,分别给他们设置单击事件.
    $tabDiv.find(obj.tabHeads).on('click', function () {
      $(this).addClass(obj.tabHeadsClass).siblings('li').removeClass(obj.tabHeadsClass);

      //获取当前点击的这个li标签的index值.
      var idx = $(this).index();

      //下面div们中对应索引idx的div,显示.
      $tabDiv.find(obj.tabBodys).eq(idx).addClass(obj.tabBodysClass).siblings('div').removeClass(obj.tabBodysClass);

    });


  }
}(jQuery));