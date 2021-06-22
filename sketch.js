const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,block1,block2,block3,block4,block5;
var backgroundImg,stand1,stand2;
var polygon,polygonImg, slingshot;


function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //level 1
    box1=new Box(300,275,30,40)
    box2=new Box(330,275,30,40)
    box3=new Box(360,275,30,40)
    box4=new Box(390,275,30,40)
    box5=new Box(420,275,30,40)
    box6=new Box(450,275,30,40)
    box7=new Box(480,275,30,40)
    //level2
    box8=new Box(330,235,30,40)
    box9=new Box(360,235,30,40)
    box10=new Box(390,235,30,40)
    box11=new Box(420,235,30,40)
    box12=new Box(450,235,30,40)
    //level3
    box13=new Box(360,195,30,40)
    box14=new Box(390,195,30,40)
    box15=new Box(420,195,30,40)
    box16=new Box(390,155,30,40)

    block1=new Box(640,175,30,40)
    block2=new Box(670,175,30,40)
    block3=new Box(700,175,30,40)
    block4=new Box(730,175,30,40)
    block5=new Box(760,175,30,40)
    block6=new Box(670,135,30,40)
    block7=new Box(700,135,30,40)
    block8=new Box(730,135,30,40)
    block9=new Box(700,95,30,40)


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 250, 10);
    polygon=Bodies.circle(50,200,40)
    World.add(world,polygon)

   
   // polygon = new Polygon(200,50);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon,{x:200, y:50});

}

function draw(){
    Engine.update(engine);
    background("lightBlue")
   ground.display();
   // polygon.display();
    //platform.display();
    image (polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();   
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}