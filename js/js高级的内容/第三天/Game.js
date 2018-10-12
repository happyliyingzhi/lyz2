/**
 * Created by 李英芝 on 2018/6/11.
 */
//将所有的关于游戏的逻辑代码写在这里
(function (w) {
    //为了改变this 的对象,game的对象
    var that=null;
    function Game(map){
        //调用食物的对象
        this.food=new Food();
        //调用蛇的对象
        this.snack=new Snack();
        //获取当前的地图
       this.map=map;
        that=this;
    };
    //将食物和蛇添加在地图上面，写在原型对象中可以直接调用
    Game.prototype.Stratgame= function () {
        this.food.render(this.map);
        this.snack.render(this.map);
        //this.snack.move(this.map);
        //this.snack.render(this.map);
        //调用蛇移动的函数
        SnackAutoMove();
      //  onkeydown();
        bindKey();
    }


//让蛇一直动起来
    function SnackAutoMove(){
        //添加计时器
   var timeId =setInterval(function () {
            //调用蛇移动和添加蛇在页面
            this.snack.move(this.map,this.food);
            this.snack.render(this.map);
      //判断蛇头是否撞墙
      var snackHeadX=this.snack.body[0].x*this.snack.width;
      var snackHeadY=this.snack.body[0].y*this.snack.height;
      if(snackHeadX<0||snackHeadX>=this.map.offsetWidth||snackHeadY<0||snackHeadY>=this.map.offsetHeight){
          alert("游戏结束");
          clearInterval(timeId);
      }
            //bind(that)是改变蛇的this，变成上面的game对象调用
            //没有用bind(),this是window
     }.bind(that),300);


    };

  //如何获取键盘的按钮
    //e.keyCode//能将键盘上的按键转换成数字
   //根据键盘按键，来更改蛇移动的方向
   // function bindKey(){
   //     document.onkeydown=function (e){
   //         e=e||window.event;
   //         console.log(e.keyCode);
   //         //蛇移动的方向
   //         switch (e.keyCode){
   //             case 37:
   //                 if(this.snack.direction!="right"){
   //                     this.snack.direction="left";
   //                 }
   //
   //                 break;
   //             case 38:
   //                 if(this.snack.direction!="bottom"){
   //                     this.snack.direction="top";
   //                 }
   //                 break;
   //             case 39:
   //                 if(this.snack.direction!="left"){
   //                     this.snack.direction="right";
   //                 }
   //
   //                 break;
   //             case 40:
   //                 if(this.snack.direction!="top"){
   //                     this.snack.direction="bottom";
   //                 }
   //                 break;
   //         }
   //     }.bind(that);
   // }
   //
  //判断键盘按下了哪个键
    function bindKey(){
      window.onkeydown= function (e) {
          e=e||window.event;
          console.log(e.keyCode);
          switch (e.keyCode){
              case 37:
                  if(this.snack.direction!="right"){
                      this.snack.direction="left";

                  }
                  break;
              case  38:
                  if(this.snack.direction!="bottom"){
                      this.snack.direction="top";
                  }
                  break;
              case 39:
                  if(this.snack.direction!="left"){
                      this.snack.direction="right";
                  }
                  break;
              case  40:
                  if(this.snack.direction!="top"){
                      this.snack.direction="bottom";
                  }
                  break;
          }
      }.bind(that);

    }


    w.Game=Game;
}(window))