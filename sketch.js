const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;



var engine, world; 
var ground;
 var stand1,stand2; 
 var ball; 
 var slingShot; 
 var polygon; 
 var bl1,bl2,bl3,bl4,bl5,bl6,bl7,b8,b9,b10,b11,b12,bl13,bl14,bl15,b16;
 var bp1,bp2,bp3,bp4,bp5,blu6,blu7,blu8,bp9;
 var polygon_img;

function preload(){
  polygon_img=loadImage('polygon.png');
   }

function setup() {
  createCanvas(1200,400); 

  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);

   ground = new Ground(600,400,1300,20);
    
  stand1=new Ground(500,300,300,10);

  bl1=new Boxblue (400,280);
  bl2=new Boxblue(430,280);
  bl3=new Boxblue(460,280);
  bl4=new Boxblue(490,280);
  bl5=new Boxblue(520,280);
  bl6=new Boxblue(550,280);
  bl7=new Boxblue(580,280);

  b8=new Boxp(430,250);
  b9=new Boxp(460,250);
  b10=new Boxp(490,250);
  b11=new Boxp(520,250);
  b12=new Boxp(550,250);

  bl13=new Boxblue (460,230);
  bl14=new Boxblue(490,230);
  bl15=new Boxblue(520,230);

  b16=new Boxp(490,200);

  stand2=new Ground(1000,200,300,10);

  bp1=new Boxp(960,190);
  bp2=new Boxp(980,190);
  bp3=new Boxp(1000,190);
  bp4=new Boxp(1020,190);
  bp5=new Boxp(1040,190);

  blu6=new Boxblue(980,160);
  blu7=new Boxblue(1000,160);
  blu8=new Boxblue(1020,160);

  bp9=new Boxp(1000,130);

  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:150,y:200});


   

   
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
  
  //polygon.display();
  
  stand1.display();
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
  bl7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  bl13.display();
  bl14.display();
  bl15.display();

  b16.display();

  stand2.display();

  bp1.display();
  bp2.display();
  bp3.display();
  bp4.display();
  bp5.display();

  blu6.display();
  blu7.display();
  blu8.display();

  bp9.display();
  ground.display();
  imageMode(CENTER);

  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.ball,{x:290,y:200});
    slingShot.attach(this.ball);
  }
}
