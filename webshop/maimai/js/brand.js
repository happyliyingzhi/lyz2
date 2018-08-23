$(function () {
    //1:品牌数据渲染函数
    function render() {
        $.ajax({
            url: "http://mmb.ittun.com/api/getbrandtitle",
            type: "get",
            success: function (res) {
                $('.mask').show;
                //console.log(res);
                var htmlstr = template('tmp', res);
                $('.mui-table-view').html(htmlstr);
                $('.ad').css('opacity', 1);
                $('.mask').hide();
            }
        })
    }

    //2:渲染数据
    render();

    //3:点击某个品牌跳转到对应的十大品牌列表页
    $('.mui-table-view').on('click', 'li', function () {
        var brandTitleId = $(this).data('brandtitleid');
        //console.log(brandTitleId);
        var brandTitle = $(this).data('brandtitle');
        sessionStorage.setItem('titleStr', brandTitle);
        window.location.href = './getbrand.html?brandTitleId=' + brandTitleId;
    })

    //4:点击xx关闭广告
    $('.off').click(function () {
        $('.ad').animate({
            opacity: 0
        }, 1000);
    })

    //5:点击返回顶部事件
    $("#back-top").click(function () {
        //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
            $('html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
        $('body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //标记法
    var flag = true;
    var flag2=true;

    //6:搜索框获得焦点事件
    $('#onfocus').click(function () {
        var keyArr = gethistory(); //取出本地存储的数组
        renderhistory(keyArr); //渲染到页面
        
    })


    //7:移入某条历史记录事件
    $('#history').on('mouseenter','li',function(){
       
        $(this).addClass('active').siblings().removeClass('active');
        $('#onfocus').val($(this).children().eq(0).text()).css('backgroundColor', '#faffbd');
    })


    //8:移出事件
    $('.history').on('mouseleave', 'li', function () {
        $('.history li').removeClass('active');
        if (flag) {
            $('#onfocus').val('');
            $('#onfocus').css('backgroundColor', '#f1f1f1');

        } else {
            flag = true;
        }
    })

    //9：每条历史纪录的点击事件
    $('#history').on('click', 'li', function () {
        flag = false;
        $('#onfocus').css('backgroundColor', '#faffbd');
        var str = ($(this).children().eq(0).text());
        if(flag2){
            $('#onfocus').val(str);
        }
        $('.history').hide();

    })



    //-----------------------------------------------------------------------
    //10:数组去重
    Array.prototype.norepeat = function () {
        var arr = this,
            result = [],
            i,
            j,
            len = arr.length;
        for (i = 0; i < len; i++) {
            for (j = i + 1; j < len; j++) {
                if (arr[i] === arr[j]) {
                    j = ++i;
                }
            }
            result.push(arr[i]);
        }
        return result;
    }
    //11:封装获取搜索历史纪录的函数
    function gethistory() {
        var keyArr = [];
        var historyStr = window.localStorage.getItem('keywords'); //取出存储在localStorage中的历史纪录
        if (historyStr) {
            keyArr = JSON.parse(historyStr); //如果有数据，就数据转换存入数组
        }
        return keyArr;
    }

    //12：封装一个渲染页面的函数
    function renderhistory(arr) {
        if (arr.length > 0) {
            $('#history').show(); //如果有数据就显示
        } else {
            $('#history').hide();
        }
        //设置模板
        var htmlstr = template('tmp1', {
            list: arr
        });
        $('#history').html(htmlstr);
    }

    //13：点击搜索按钮事件
    $('.searchbtn').click(function () {
        var inputtext = $('#onfocus').val().trim(); //获取到input的值
        $('#onfocus').val(''); //清空input的内容
        if (inputtext == '') return; //判断如果为空
        var keyArr = gethistory(); //取出本地存储的数组
        keyArr.push(inputtext); //添加到数组
        keyArr = keyArr.norepeat(); //数组去重
        window.localStorage.setItem('keywords', JSON.stringify(keyArr)); //设置本地存储
        renderhistory(keyArr); //渲染到页面
        //console.log(keyArr.length);
    })

    //14:点击xx删除某条历史记录
    $('#history').on('click','.shangchu',function(){
        flag2=false;
        var index = $(this).data('index');
        var keyArr = gethistory();
        keyArr.splice(index,1);//删除数组某一个元素
        localStorage.setItem('keywords',JSON.stringify(keyArr));
        renderhistory(keyArr);
        $('#onfocus').val(''); //清空input的内容
    })

    //15:滚下去一定距离隐藏搜索历史
    $(window).scroll(function(){
        //console.log($(document).scrollTop());
        if($(document).scrollTop()>100){
            $('#history').hide();
        }
    })

    //16:按回车实现搜索
    $(document).keyup(function(e){
        var key =  e.which;
        if(key == 13){
            $('.searchbtn').click();
        }
    });
})