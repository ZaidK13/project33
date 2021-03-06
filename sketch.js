var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var gameState = "play"
var particles = [];
var plinkos = [];
var divisions =[];
var score = 0
var particle;
var turn = 0;
var divisionHeight=300;
var score =0;
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
  
 
 if(score>=3000){
   gameState="end"
   fill("Red")
   text("Congratulation You have Won!!",200,200)
 }
 

 


  Engine.update(engine);
 
  if(gameState==="play"){

    fill("Green")
    textSize(20)
   text("Score : "+score,20,30);
  
   text("100",25,520);
   text("100",110,520)
   text("100",185,520)
   text("100",260,520)
   text("100",340,520)
   text("100",420,520)
   text("100",500,520)
   text("100",580,520)
   text("100",660,520)
   text("100",740,520)
   
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score=score+100;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}
}

