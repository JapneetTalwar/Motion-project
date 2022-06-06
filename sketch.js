const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bod

let engine;
let world;

let ball,ground,rock,wall

function setup()
{
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  let ball_options={
    //bounciness
    restitution:0.5,
    frictionAir:0.1
  }

  ball = Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)

  let rock_options={
    //bounciness
    restitution:1,
    frictionAir:0.05
  }

  rock = Bodies.circle(300,10,20,rock_options)
  World.add(world,rock)

  let ground_options={
    //static
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)

  let wall_options={
    //static
    isStatic: true
  }

  wall = Bodies.rectangle(100,250,200,20,wall_options)
  World.add(world,wall)
}

function draw() 
{
  background(51);

  Engine.update(engine)
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 40)
  ellipse(rock.position.x, rock.position.y, 40)

  rectMode(CENTER)
  push()
  fill("brown")
  rect(ground.position.x, ground.position.y,400,20)
  pop()
 

  rect(wall.position.x, wall.position.y,200,20)
 

  

}

