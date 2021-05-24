
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
	
var world;
var dustdin1,paper1,ground1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ground1=new ground(800,670,3000,20)
	dustdin1=new dustbin(1200,650)
	paper1=new paper(200,450,40)
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("pink");
 dustdin1.display();
 paper1.display();
 ground1.display();
 
 
  
  
 
}

function keyPressed() {
  	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
}





