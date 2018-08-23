$(function(){
	mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
	
	$.ajax({
		url: "http://mmb.ittun.com/api/getsitenav",
		type: "get",
		dataType: "json",
		success: function(obj){
			console.log(obj.result)
			var html = template("result",{list:obj.result});
			$("#list").html(html);
		}
	})
	
	
	
	$(".youjiantou").click(function(){
		// alert(2322)
		window.history.go(-1)
	})
})