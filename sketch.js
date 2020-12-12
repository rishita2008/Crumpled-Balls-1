
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin2,paper,ground;
var dustbin1,dustbin3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground
	paper=new Paper()
	dustbin1= new Dustbin(1000,630,10,60);
	dustbin2= new Dustbin(1100,630,10,60)
	dustbin3= new Dustbin(1050,656,100,10)



	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  ground.display();

  keyPressed()
  
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5})
	}
}



