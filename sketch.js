
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var engine,world;

var block1,block2,block3,block4,block5,block6;
var r1,r2,r3;
var f1,f2,f3;
var ball1,sling;


function setup() {

  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

  ball1= new Ball(300,50,25);

  r1= new Rotate(300,150,150,10)
  r2= new Rotate(0,150,100,10)
  r3= new Rotate(600,150,100,10)

  f1= new finish(100,550)
  //f2= new finish(300,550)
  //f3= new finish(500,550)

  block1= new Block(125,150,75,75)
  //block2= new Block(475,150,75,75,45)

 sling= new SlingShot(ball1,{x: 300, y: 75})



  Engine.run(engine)


}

function draw() {

  background(rgb(55,190,240));  
  Engine.update(engine);

  ball1.display();

  r1.display();
  r2.display();
  r3.display();

  f1.display();
  //f2.display();
 // f3.display();

 
  block1.display();
  //block2.display();


  showGrid();
  drawSprites();
}