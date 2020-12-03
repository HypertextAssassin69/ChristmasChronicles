const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,bg,manImage;
var score = 0;
var gamestate = 0;
var man = [];
var bgMusic
var gameState = "onSling";

function preload() {
    //getBackGroundImage();
    bg= loadImage("sprites/bg2.jpg");
    manImage = loadImage("sprites/theif.gif");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(1050, 305, 300, 170);

    box1 = new Box(1000,370,50,50);
    box2 = new Box2(1050,370,50,50);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(1050,320,50,50);
    box4 = new Box2(1000,320,50,50);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Box3(1125,310,150,150);
   // log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(700,230);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:700, y:230});
    
}

function draw(){
   
    background(bg);

    if(gamestate === 0){
        textSize(25);
        fill("yellow");
        text("press space to start!!!",500,350);
        text("1)press space to get the snowBall.",50,100)
        text("2)Aim the slingshot to hit the theives and earn 3 points for each.",50,150)
         text("So let's begin to protect the Santa's gifts.",50,200)
        fill("red")
        text("Christmas",500,50);
        fill("green")
        text("Chronicles",625,50)
         if(keyCode ===32){
        gamestate = 1;
        //bgMusic.play();
    }
    }
    if (gamestate == 1){
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();
    //pig1.score();
    //pig3.score();

    box5.display();
    //log4.display();
   // log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display(); 
   fill("yellow");
   textSize(25)
    text("Score:"+score,1000,50 );
 //console.log();
 spawnObstacles();
    } 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       bird.trajectory=[];
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body, {x: 700, y: 230});
    }
}

function spawnObstacles() {
    if(frameCount%300===0){
        man.push(new Man(100,350));
        
        
      }
     
     for (var j = 0; j < man.length; j++) {
      
        man[j].display();
        man[j].score();
        
        
       
      }

      
}