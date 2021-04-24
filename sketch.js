var carImage,carImage2,bg1;
var gameState = 1;
var form,trackImage;
var nextImage;
var next,next1;
var carI1,carI2,carI3,carI4,carI5;
var car2,car3,car4,car5;
var carmain;
var TG1,TG2,TG3,TG4;
var carState;

function preload(){
  carImage = loadImage("tail-light-car.jpg");
  nextImage = loadImage("Next.png");
  carImage2 = loadImage("t8271.jpg");
  bg1 = loadImage("black-background.jpg");
  carI1 = loadAnimation("Blue1.png");
  carI2 = loadAnimation("Blue2.png");
  carI3 = loadAnimation("Yellow 1.png");
  carI4 = loadAnimation("Yellow 2.png");
  carI5 = loadAnimation("Orange.png");
  trackImage = loadImage("track.png");
  TG1 = loadImage("yellowcar.png");
  TG2 = loadImage("whitecar.png");
  TG3 = loadImage("purplecar.png");
  TG4 = loadImage("blackcar.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
}

function draw() {
  var bg = background(trackImage);

  if(gameState === 1){  

    background(carImage);  
    textSize(100);
    textFont("amarante");
    text("GameName",displayWidth/2-50,displayHeight/2-100);
    next = createSprite(displayWidth/2+600,displayHeight/2-300);
    next.addImage(nextImage);
    next.scale = 0.08;
    if(keyDown("space")){
      gameState = 2;
      console.log(gameState)
    }
  
  }
  else if(gameState === 2){
    background(carImage2);
    
    console.log(2);

    textSize(30);
    fill("black");
    text("INSTRUCTIONS",displayWidth/2-300,displayHeight/2-300)
    text("1. This is a Car Racing Game.",displayWidth/2-650,displayHeight/2-200);
    text("2. You can choose different tracks on which you want to race.",displayWidth/2-650,displayHeight/2-150);
    text("3. Use the arrow keys to control your car.",displayWidth/2-650,displayHeight/2-100);
    text("4. You can modify your car to make it look more cool.",displayWidth/2-650,displayHeight/2-50);

    console.log("last")
    if(mousePressedOver(next) && gameState===2){
      gameState = 4;
      console.log(gameState)
    }
  }
  else if(gameState === 4){
    var i=0;
    
    background(trackImage);
    var cara = createSprite(displayWidth/2-300,displayHeight/2+250);
    cara.addImage(TG1);
    var carb = createSprite(displayWidth/2-100,displayHeight/2+250);
    carb.addImage(TG2);
    var carc = createSprite(displayWidth/2+100,displayHeight/2+250);
    carc.addImage(TG3);
    carc.scale = 0.4;
    var card = createSprite(displayWidth/2+300,displayHeight/2+250);
    card.addImage(TG4);
    card.scale = 0.8;
  
    if(mousePressedOver(cara)){
        carState = "a";
    }
    else if(mousePressedOver(carb)){
        carState = "b";
    }
    else if(mousePressedOver(carc)){
        carState = "c";
    } 
    else if(mousePressedOver(card)){
        carState = "d";
    }     


    if(carState==="a"){
      if(keyDown(UP_ARROW)){
        cara.velocityY-=5;

      }
      carb.velocityY=-5;
      carc.velocityY = -3;
      card.velocityY = -6;
      camera.position.x = displayWidth/2;
      camera.position.y = cara.y;
    }

    else if(carState==="b"){
      if(keyDown(UP_ARROW)){
        carb.velocityY =-5;
       
      }
      camera.position.x = displayWidth/2;
      camera.position.y = carb.y;
    }

    else if(carState==="c"){
      if(keyDown(UP_ARROW)){
        carc.velocityY =-5;
        
      }
    }

    else if(carState==="d"){
      if(keyDown(UP_ARROW)){
        card.velocityY =-5;
      }
    }

    
           
  }
  drawSprites();
}
  
    