class Boxp {
    constructor(x, y, width, height){
        var options={
            isStatic:false
          }
       this.Visiblity=255;
     this.body = Bodies.rectangle(x,y,30,50,options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      if(this.body.speed<3){
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }else{
        push();
        World.remove(world,this.body);
        this.Visibility=this.Visibilityisiblity-1;
        tint(255,this.Visiblity);
        pop()
      }
      
     
    }
  
  };
  