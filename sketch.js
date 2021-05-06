const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;
var thunderCreatedFrame=0;
var raindrop=[];
var thunder, thunder1img, thunder2img, thunder3img, thunder4img;
var umbrella;


function preload(){
    thunder1img=loadImage("images/thunderbolt/1.png");
    thunder2img=loadImage("images/thunderbolt/2.png");
    thunder3img=loadImage("images/thunderbolt/3.png");
    thunder4img=loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    umbrella=new Umbrella(200,500);
    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i++)
        {
            raindrop.push(new Raindrop(random(0,400),random(0,400)));
        }
    }
  
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

   var ran=Math.round(random(1,4));
   
   if(frameCount%120===0){
       thunderCreatedFrame=frameCount;
       thunder=createSprite(random(1,350),random(10,30),10,10);
       switch(ran){
           case 1:thunder.addImage(thunder1img);
           break;
           case 2:thunder.addImage(thunder2img);
           break;
           case 3:thunder.addImage(thunder3img);
           break;
           case 4:thunder.addImage(thunder4img);
           break;
           default: break;
       }
       
   }
   if(thunderCreatedFrame+10===frameCount&&thunder){
       thunder.destroy();

   }
   umbrella.display();
   for(var i=0;i<maxDrops;i++){
       raindrop[i].showDrop();
       raindrop[i].updateY();
   }

   drawSprites();
}   




