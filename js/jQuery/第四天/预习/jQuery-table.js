/**
 * Created by itcast on 2018 06/05.
 */
(function ($) {
  //给jQuery的原型,添加一个table方法.
  $.fn.table = function (arrHead,arrBody) {
    //根据传入进来的2个参数,生成一个表格,这个表格添加到this中.

    var list = ["<table><tr>"];
    //生成表头
    for(var i = 0 ; i < arrHead.length; i++){
    	list.push("<td>"+arrHead[i]+"</td>");
    }
    list.push('</tr>');
    //生成表格主体部分
    for(var i = 0 ; i < arrBody.length; i++){
    	list.push('<tr>');
        list.push('<td>'+(i+1)+'</td>');  //序号列
        for(var key in arrBody[i]){
          list.push('<td>'+arrBody[i][key]+'</td>');
        }
    	list.push('</tr>');
    }

    list.push('</table>');


    //
    this.html(list.join(""));



    //返回this
    return this;

  }
}(jQuery));