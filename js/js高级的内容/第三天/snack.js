/**
 * Created by 李英芝 on 2018/6/10.
 */
(function () {
    var map=document.getElementById("map");
    var elements=[];
    function snake(width,height,direction){
        //小蛇的宽
        this.width=width||20;
        //小蛇的高
        this.height=height||20;
        //小蛇的方向
        this.direction=direction||"right";
        this.body=[
            {x:3,y:2, color:"red"},//小蛇的头
            {x:2,y:2, color:"green"},//小蛇的身体
            {x:1,y:2, color:"green"}
        ]

    }
    snake.prototype.inner= function (map) {
        remove();
        //循环遍历创建div
        for(var i=0;i<this.body.length;i++){
            //数组里面的元素每一个是对象
            var obj=this.body[i];
            //创建div
            var div=document.createElement("div");
            div.style.position="absolute";
            div.style.width=this.width+"px";
            div.style.height=this.height+"px";
            div.style.left=obj.x*this.width+"px";
            div.style.top=obj.y*this.height+"px";
            div.style.backgroundColor=obj.color;
            //新创的每个div添加到elements
            elements.push(div);
            //添加在页面上
            map.appendChild(div)
        }
    }
    //小蛇的移动
    snake.prototype.move= function (food,map) {
        //先设置小蛇的身体
        var i=this.body.length-1;//2  因为小蛇是1和2的下标
        //将前一个x抽给后一个x抽
        for(;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;

        }
        //判断和改变小蛇的坐标的位置
        switch (this.direction){
            case "right":
                this.body[0].x+=1;
                break;
            case  "left":
                this.body[0].x-=1;
                break;
            case "top":
                this.body[0].y-=1;
                break;
            case  "bottom":
                this.body[0].y+=1;
                break;
        }
    };
    function remove(){
        var i=elements.length-1;
        for(;i>=0;i--){
            var ele=elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i,1);
        }
    }

    window.snake=snake;
}())


//创建小蛇
var box=new snake();
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);
box.inner(map);
box.move(map);



