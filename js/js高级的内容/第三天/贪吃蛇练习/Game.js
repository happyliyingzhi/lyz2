/**
 * Created by 李英芝 on 2018/6/13.
 */
(function (w) {
      var that=null;
    function Game(){
        this.Food=new Food();
        this.Snack=new Snack();
        this.map=map;
        that=this;
    }
     Game.prototype.startGame= function (map) {
         this.Food.render(map);
     //    this.Snack.move(this.Food1);
         this.Snack.render(map);
          movestart();
         bindkey();

     }
    function  movestart(){
    var  timdID =setInterval(function () {
            this.Snack.move(this.Food,this.map);
            this.Snack.render(map);
            var headx=this.Snack.body[0].x*this.Snack.width;
            var heady=this.Snack.body[0].y*this.Snack.height;

            if(headx<0||headx>=map.offsetWidth||heady<0||heady>=map.offsetHeight){
                alert("游戏结束");
                clearInterval(timdID);
            }

        }.bind(that),200)


    }
       function bindkey(){
        window.onkeydown =function (e){
             e=e||window.event;
            console.log(e.keyCode);
            switch (e.keyCode){
                 case 37:
                     if(this.Snack.direction!="right"){
                         this.Snack.direction="left";
                     }
                     break;
                 case 38:
                     if(this.Snack.direction!="bottom"){
                         this.Snack.direction="top";
                     }
                     break;
                 case 39:
                     if(this.Snack.direction!="left"){
                         this.Snack.direction="right";
                     }
                     break;
                 case 40:
                     if(this.Snack.direction!="top"){
                         this.Snack.direction="bottom";
                     }
                     break;
             }
        }.bind(that);
     }



    w.Game=Game;
}(window))