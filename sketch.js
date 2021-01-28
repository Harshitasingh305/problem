var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var count=0;
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,500,30);
  Engine.update(engine);
 text("100",20,520)
  text("500",90,520)
 text("500",170,520)
 text("200",270,520)
 text("400",340,520)
 text("1000",420,520)
 text("500",500,520)
 text("600",570,520)
 text("400",650,520)
 text("700",730,520)

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 /*  if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display()
   }
}
function mousePressed(){
if(gameState=="end"){

  particle=new Particle(mouseX,10,10,10)
}


}