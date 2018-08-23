$(function(){
	mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	
	function res() {
		$.ajax({
			type: "get",
			url: "http://mmb.ittun.com/api/getcoupon",
			success: function(obj){
				console.log(obj.result)
				var html = template("getcoupon",{list:obj.result});
				$("#result").html(html);
			}
		})
	}
	
	res();
	//
	
	$("#result").on("click","a",function(){
		
		var id = $(this).data("id"); 
		console.log(id)
		
		window.location.href = "wpingpaiyhj.html?couponid="+ id;
	})
	
	
	$(".youjiantou").click(function(){
		// alert(222)
		window.history.go(-1);
	})
	
	
	$(".shouye").click(function(){
		window.location.href= "index.html";
	})
	
	
	$("#nani").click(function(){
		mui('#fanhui').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
	})
	
	
	
})