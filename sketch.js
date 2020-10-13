
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
 var ground1,paperball,dustbin,dustbin1,dustbin2;
 var bin;

function preload(){
	bin=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground1=new ground(700,680,1400,20);

	dustbin=new useme(800,570,20,200,PI/2);
	dustbin1=new useme(900,660,200,20,PI/2);
	dustbin2=new useme(1000,570,20,200,PI/2);
	
	paperball=new ball(180,450,150);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER)
  background("white");

  image (bin,dustbin1.body.position.x-95,dustbin1.body.position.y-210,190,200);

 ground1.display();

  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  paperball.display();



 
  drawSprites();
 
}

function keyPressed (){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1115,y:-1005});
	}
}



