

var PLAY=1;
var END=0;
var gameState=PLAY;

var bow , arrow, BG, redB, pinkB, greenB; 
var blueB ,arrowGroup,bowImage, arrowImage, green_balloonImage;
var bowImage, arrowImage, green_balloonImage, red_balloonImage;
var pink_balloonImage ,blue_balloonImage ,backgroundmage;


function preload()
{
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() 
{
  createCanvas(600, 600);

  BG = createSprite(0,0,600,600);
  BG.addImage(backgroundImage);
  BG.scale = 2.5
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
 
  arrowgroup=new Group();
  redB=new Group();
  pinkB=new Group();
  greenB=new Group();
  blueB=new Group();
  
}

function draw()
{
  BG.velocityX = -3 
  camera.position.x = width/2;
  camera.position.y = bow.y;
  if (BG.x < 0)
  {
   BG.x = BG.width/2;
  }
  
  if(gameState===PLAY)
 {
    bow.y = World.mouseY

    if (keyDown("space"))
    {
      createArrow();
    }

    var select_balloon = Math.round(random(1,4));

    if (World.frameCount % 100 == 0)
    {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      } else {
        pinkBalloon();
      }
    }
   
   if (redB.isTouching(arrowgroup))
     {
       score=score+2;
       redB.destroyEach();
       arrowgroup.destroyEach();   
     }
   
   if (pinkB.isTouching(arrowgroup))
     {
       score=score+3;
       pinkB.destroyEach();
       arrowgroup.destroyEach();
     }
   
   if (greenB.isTouching(arrowgroup))
     {
       score=score+1;
       greenB.destroyEach();
       arrowgroup.destroyEach();
     }
   
   if (blueB.isTouching(arrowgroup))
     {
       score=score+4;
       blueB.destroyEach();
       arrowgroup.destroyEach();
     }

  if(score>19)
  {
    gameState=END;
  }
}
  
  drawSprites();
    text("Score: "+ score, 500,50);
  text ("green-1point",3,15);
  text ("red-2points",100,15);
  text ("pink-3points",190,15);
  text ("blue-4points",280,15);
  
  if (gameState===END)
  {
    textSize(30)
    fill("black")
    text("game over!",200,200)
    blueB.destroyEach();
    arrowgroup.destroyEach();
    bow.destroy();
    BG.velocityX = 0;
  }
}


function redBalloon() 
{
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);  
}

function blueBalloon()
{
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon()
{
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);   
}

function pinkBalloon()
{
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2
  pinkB.add(pink);
}


 function createArrow() 
{
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowgroup.add(arrow);
   
}
