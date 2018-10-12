/**
 * Created by 李英芝 on 2018/6/11.
 */
(function (w) {
    list=[];
    var map=document.getElementById("map");
    function Food(x,y,width,height,bgColor){
            this.x=x||0;
             this.y=y||0;
             this.width=width||20;
            this.height=height||20;
            this.bgColor=bgColor||"green";

        };
    Food.prototype.render= function (map) {
          eatFood(map);
        this.x=Math.floor(Math.random()*map.offsetWidth/this.width)*this.width;
        this.y=Math.floor(Math.random()*map.offsetHeight/this.height)*this.height;
        var div=document.createElement("div");
        div.style.position="absolute";
        div.style.left=this.x+"px";
        div.style.top=this.y+"px";
        div.style.backgroundColor=this.bgColor;
        div.style.width=this.width+"px";
        div.style.height=this.height+"px";
        map.appendChild(div);
        list.push(div);

    }
    //删除吃到的食物
      function eatFood(map){
          for(var i=0;i<list.length;i++){
                map.removeChild(list[i]);
              list.length=0;
          }
      }
    w.Food=Food;
}(window))

