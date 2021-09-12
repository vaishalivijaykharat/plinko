const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var divisons =[];
var divisonHeight=300;
var particles = [];
var plinkos = [];



function preload() {

}


function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,690,800,20);

  //create division objects
  for (var i = 0; i <=width; i= i+ 80) {
    divisons.push(new Divisions(i, height-divisonHeight/2, 10, divisonHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
   for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  
 for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
Engine.run(engine);
    
}
 


function draw() {
  rectMode(CENTER);
  background(0);
 
 
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
 for (var j =0; j<plinkos.length; j++) {
   plinkos[j].display();
 }
   
  //display the divisions
 for (var n = 0; n < divisons.length; n++) {
    divisons[n].display();   
  }

  //create the particles using frameCount
 if (frameCount %60 === 0) {
   particles.push(new Particles(random(width/2-30, width/2+30),10,10));
  }

  //display the particles 
for (var h=0; h<particles.length;h++){
   particles[h].display();
  }

}