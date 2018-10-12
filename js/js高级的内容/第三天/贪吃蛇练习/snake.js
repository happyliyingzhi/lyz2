/**
 * Created by 李英芝 on 2018/6/13.
 */
(function (w) {
    function getColorForRandom(){
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];  //下标0-15
        var str = "#";
        //循环产生 6个 0-15的数.
        for(var i = 0 ; i < 6; i++){
            var num = Math.floor(Math.random()*16);
            //根据这个随机数,在arr数组中去取值.
            str += arr[num];
        }
        return str;   //"#985700"
    }
    var list=[];
     map=document.getElementById("map");
    function Snack(width,height,direction){
        this.width=width||20;
        this.height=height||20;
        this.direction=direction||"right";
        this.body=[
        {x:3,y:1,bgcolor:"red"},
        {x:2,y:1,bgcolor:"greenyellow"},
        {x:1,y:1,bgcolor:"blue"}]

    }
    Snack.prototype.render= function (map) {
     //   var arr=this.body[i];
        remove()
        for(var i=0;i<this.body.length;i++){
            var divs=document.createElement("div");
            divs.style.position="absolute";
            divs.style.left=this.body[i].x*this.width+"px";
            divs.style.top=this.body[i].y*this.height+"px";
            divs.style.width=this.width+"px";
            divs.style.height=this.height+"px";
            divs.style.borderRadius=30+"px";
            divs.style.backgroundColor=this.body[i].bgcolor;
             map.appendChild(divs);
            list.push(divs)
        }
    }
    
    Snack.prototype.move= function (Food,map) {
           var i =this.body.length-1
        console.log(i);
         for(;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        switch (this.direction){
            case "left":
                this.body[0].x--;
                break;
            case  "right":
                this.body[0].x++;
                break;
            case  "top":
                this.body[0].y--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
        }
        var snackheadx=this.body[0].x*this.width;
        var snackheady=this.body[0].y*this.height;
        var foodx=Food.x;
        var foody=Food.y;
        var snacklast=this.body[this.body.length-1];
      //  var snacklasty=this.body[this.length].y;
          if(snackheadx==foodx&&snackheady==foody){
              this.body.push(
                  {x:snacklast.x,y:snacklast.y,bgcolor:getColorForRandom()}
              )
              Food.render(map);
          }

    }


   function remove(){
       for(var i=0;i<list.length;i++){
        list[i].parentNode.removeChild(list[i]);
       }
       list.length=0;
   }



    w.Snack=Snack;
}(window))