/**
 * Created by 李英芝 on 2018/6/11.
 */
(function (w) {
    //为了准确的删除蛇之前的身体，首先创建一个空数组保存之前的数据
    var list=[];
    //这里是创建蛇的属性，宽和高，方向
    function Snack(width,height,direction){
            this.width=width||20;
            this.height=height||20;
        this.direction=direction||"right";
        //这里的创建蛇的身体，分三步部分，蛇头，蛇身1，蛇身2
            this.body=[
                {x:3,y:1,bgColor:"red"},
                {x:2,y:1,bgColor:"yellowgreen"},
                {x:1,y:1,bgColor:"skyblue"}
            ]
        }
    //创建蛇的原型，也就是将蛇添加在页面上
    Snack.prototype.render= function (map) {
        //删除蛇移动之前的身体
         remove(map);
        //因为蛇的身体是数组，可以用循环创建
        for(var i=0;i<this.body.length;i++){
            var arr=this.body[i];
            var divs=document.createElement("div");
            divs.style.left=arr.x*this.width+"px";
            divs.style.top=arr.y*this.height+"px";
            divs.style.position="absolute";
            divs.style.backgroundColor=arr.bgColor;
              divs.style.width=this.width+"px";
            divs.style.height=this.height+"px";
            list.push(divs);
            map.appendChild(divs);
            //添加蛇的每个身体在数组里面
          //  list.push(divs);
        }
    }

    //删除蛇之前移动的身体
    function remove(map){
        for(var i=0;i<list.length;i++){
            //从页面删除
            map.removeChild(list[i]);
            //从数组中删除
        }
        list.length=0;
    }


    ////让蛇动起来
    // Snack.prototype.move= function (map,food) {
    //     var i=this.body.length-1;
    //     for(;i>0;i--){
    //         this.body[i].x=this.body[i-1].x;
    //       this.body[i].y=this.body[i-1].y;
    //     }
    //
    //     //蛇头的方向
    //     switch (this.direction){
    //         case "left":
    //             this.body[0].x--;
    //             break;
    //         case "right":
    //             this.body[0].x++;
    //             break;
    //         case "top":
    //             this.body[0].y--;
    //             break;
    //         case "bottom":
    //             this.body[0].y++;
    //             break;
    //     }
    //     //判断蛇有没有食物，就看蛇头的坐标是否和食物的坐标重叠
    //     //首先获取蛇头的坐标
    //     var snackHeadX=this.body[0].x*this.width;
    //     var snackHeadY=this.body[0].y*this.height;
    //     //获取食物的坐标
    //     var foodX=food.x;
    //     console.log(food);
    //     var foodY=food.y;
    //     //获取设蛇尾的最后一个坐标
    //     var snackLast=this.body[this.body.length-1];
    //    //console.log(foodX + '======' +  foodY);
    //    //console.log(snackHeadX + '======' +  snackHeadY);
    //     //判断蛇头和食物重叠时，就增加一个长度
    //     if(snackHeadX==foodX&&snackHeadY==foodY){
    //        // alert("吃到");
    //         this.body.push({
    //                 x:snackLast.x,
    //                 y:snackLast.y,
    //                 bgColor:"pink"
    //             });
    //
    //         //重新在生成食物：在调用以下食物对象的render方法，重新随机生成食物坐标
    //
    //         food.render(map);
    //     }
    // }

//判断蛇移动
    Snack.prototype.move= function (map,food) {
        var i=this.body.length-1;
        for(;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        switch (this.direction){
            case "left":
                this.body[0].x--;
                break;
            case "right":
                this.body[0].x++;
                break;
            case "top":
                this.body[0].y--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
        }
        //判断蛇头与食物重合的时候，就是吃掉这个食物
        //首先获取蛇头的坐标
        var snackHeaderX=this.body[0].x*this.width;
        var snackheaderY=this.body[0].y*this.height;
        //获取食物的坐标
        var foodX=food.x;
        var foodY=food.y;
        //console.log(snackHeaderX+"-----"+snackheaderY);
        //console.log(foodX+"-----"+foodY);
        //获取蛇尾最后一个坐标
        var snackLast=this.body[this.body.length-1];
        //判断吃到食物就增加一个蛇尾
        if(snackHeaderX==foodX&&snackheaderY==foodY){
          //  alert("chidao")
            this.body.push({
                x:snackLast.x,
                y:snackLast.y,
                bgColor:"pink"
            });
           //添加一个食物，在页面上，只需要重新调用创建随机的方块函数
            food.render(map);
        }
    }


    w.Snack=Snack;
}(window))
