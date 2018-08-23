$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    //1 分析url 拿到id 
    function urlTool(url) {

        // console.log(url);
        var urlarr = url.split('?').pop().split('&');
        console.log(urlarr);
        var query = {};
        //遍历
        urlarr.forEach(function (v) {
            var param = v.split('=');
            query[param[0]] = param[1];

        });
        return query;
    }
    var url = location.href;
    var query = urlTool(url);
    // console.log(query);

    var pid = query.id;

    function render(productid) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getdiscountproduct',
            type: "GET",
            data: {
                productid: productid
            },
            success: function (res) {
                var htmlstr = template('detaillist', res);
                $('.content').html(htmlstr);



                
            }
        })
    }
    render(pid);


   

  





})