// constant values
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

//Create variables here
  var dog,Hdog,food,foodS
  var database
  var engine,world
  var dogIm,doghappy
function preload()
{
  //load images here
   dogIm = loadImage("images/Dog.png");
   doghappy = loadImage("images/happydog.png");

   database = firebase.database();
}

function setup() {
  createCanvas(500,500);

   engine = Engine.create();
   world = engine.world;

   foodS = database.ref('food');
   foodS.on("value",readstock);
   
    dog = Bodies.rectangle(250,250,50,50);
    //dog.addImage(dogIm);
    //Hdog.addImage(doghappy);
  
  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

}



