const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;
var ball2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options = {
        restitution: 0.8
        
    }
    ball = Bodies.rectangle(200,200,20,20,ball_options);
    World.add(world,ball);
    console.log(ground);
    
    var ball1_options ={
    restitution: 0.1
    }
    ball1 = Bodies.circle(250,200,20,ball1_options);
    World.add(world,ball1);

    var ball2_options ={
        restitution: 0.5
    }
    ball2 = Bodies.circle(150,200,20,ball2_options);
    World.add(world,ball2);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS)
    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipse(ball2.position.x,ball2.position.y,20,20);
}