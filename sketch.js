const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world;
var polygon,polygon_img;
 
function preload(){
polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200,400);
	imageMode(CENTER);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,260,150,10 );
    

    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40); 
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40); 
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40); 
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40); 
    
    polygon = Bodies.circle(50,200,20);
    World.add(world.polygon);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    
    
}

function draw(){
    background("gray")
    ground.display();
    stand.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
