$(function(){
	mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	
	
	var url= window.location.search;
	// console.log(url)
	if(url == ""){
		res(0)
	} 
	if(url.indexOf("?")!=-1){
	var index = url.substr(url.indexOf("=")+1);
	// console.log(index)
	}
	
	
	 // = url.substr(url.indexOf("=")+1)
	// console.log(index);	
	
	function res(mmp) {
		
		$.ajax({
			type:"get",
			url:"http://mmb.ittun.com/api/getcouponproduct",
			data:{couponid:mmp},
			success: function(obj){
				console.log(obj.result)
				var html = template("result1",{list:obj.result});
				$("#result").html(html);
				
// 				var html2 = template("result2",{list2:obj.result});
// 				$("#lbotu").html(html2);
				
			}
		})
	}
	res(index);
	// res(0)
	
	
	$(".youjiantou").click(function(){
		// alert(222)
		window.history.go(-1);
	})
	
	
	$(".appdown").click(function(){
		// alert(222)
		window.location.href="wshangchengdaohang.html";
	})
	
	$(".shouye").click(function(){
		window.location.href= "index.html";
	})
	
	
	
	$("#nani").click(function(){
		mui('#fanhui').scroll().scrollTo(0,0,3000);//100毫秒滚动到顶
	})
	
	
})