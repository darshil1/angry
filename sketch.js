const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world, r1;
var ball;

function setup() {
  createCanvas(1200, 400)

  engine = Engine.create()
  world = engine.world

  ground = new Ground(600, 380, 1200, 10)
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  log1 = new Log(100,260,300, PI/2);

  // p=new pig(400,200)
  // l=new log(800,250,150,PI/2)
}

function draw() {
  background(0)

  Engine.update(engine)
  //  box1.display()
  //  box2.display()
  //  p .display()
  //  l.display()
  ground.display()
  box1.display();
  box2.display();
  log1.display()
  drawSprites()

}