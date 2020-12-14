var log1,log2,log3;
var ground;
var ball;
var bagIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 bagIMG=loadImage("abc.jpg")
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ball=new  PaperBall(80,450);
  log1=new Dustbin(1000,590,200,20);
	log2=new Dustbin(1090,540,20,100);
  log3=new Dustbin(910,540,20,100);
  
  ground = new Ground(600,570,1200,20);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bagIMG);
  Engine.update(engine);
  
  ball.display();
  log2.display();
  log3.display();
  //ground.display();
  log1.display();
  

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
}
}