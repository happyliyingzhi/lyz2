$(function(){
    $('#more').click(function(){
        if($(".active").css('display')=='none'){
            $(".active").css("display","block");
        }else{
            $(".active").css("display","none");
        }
    });



    $.ajax({
        url:"http://mmb.ittun.com/api/getmoneyctrl",
        typ:"GET",
        dataType: 'JSON',
        success: function(res){
            console.log(res);
            
            var htmlstr = template("tpl", res);
                $(".mui-table-view").html(htmlstr);


        }

    });



    $(body).on('scroll',function (e){

        if($(this).scrollTop() > 1000) {
            $('.top .returnTop').css('visibility', 'visible');
        }else{
            $('.top .returnTop').css('visibility','hidden');
            }
        
    })

    
    
        




})