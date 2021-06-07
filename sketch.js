var rect1, rect2, rect3;
var ball;
var world;
var ground;
var dustbin, dustbinI;
var paper, paperI;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  rect1 = new Dustbin(400, 650, 200, 20);
    rect2 = new Dustbin(300, 610, 20, 100);
    rect3 = new Dustbin(500, 610, 20, 100);

    ball = new Paper(20, 680, 70);

    ground = new Ground(400, 690, 800, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  ground.display();

  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x : 13, y : -13});
  }
}



