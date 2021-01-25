
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 660);


	engine = Engine.create();
	world = engine.world;

	
  paper =	new Paper(200, 648, 20);
  dustbin1 = new Dustbin(900, 615, 20, 100);
  dustbin2 = new Dustbin(985, 651, 150, 20);
  dustbin3 = new Dustbin(1069, 615, 20, 100);
  ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
	
	fill(255, 255, 255);

	World.add(world, ground);

	Engine.run(engine);

    
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

  drawSprites();

 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 75,y: -75})
	}
}
