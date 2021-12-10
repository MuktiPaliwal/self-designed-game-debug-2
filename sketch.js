var map, boy1Img, boy2Img, boy2LeftImg;
var foundSnd, countSnd;
var tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7;
var vent1, vent2, vent3, vent4, vent5, vent6;
var house;
var player, computer;
var gameState = 1;
var timer = 30;
var timeOverImg, youWinImg;
var restartImg;
var restart;

function preload(){
  map = loadImage("./assets/map.png");
  boy1Img = loadImage("./assets/boy1.png");
  boy2Img = loadImage("./assets/boy2.png")
  foundSnd = loadSound("./assets/found.mp3");
  countSnd = loadSound("./assets/counting.mp3");
  boy2LeftImg = loadImage("./assets/boy2left.png");
  timeOverImg = loadImage("./assets/timeover.jpg");
  youWinImg = loadImage("./assets/Youwin.jpg");
  restartImg = loadImage("./assets/restart.png");
}

function setup() {
  createCanvas(1200, 800);

  tree1 = createSprite(250, 220, 50, 80);
  tree1.visible = false;
  tree2 = createSprite(285, 585, 40, 70);
  tree2.visible = false;
  tree3 = createSprite(450, 530, 50, 90);
  tree3.visible = false;
  tree4 = createSprite(610, 430, 45, 90);
  tree4.visible = false;
  tree5 = createSprite(730, 700, 45, 60);
  tree5.visible = false;
  tree6 = createSprite(985, 700, 50, 80);
  tree6.visible = false;
  tree7 = createSprite(865, 200, 30, 70);
  tree7.visible = false;
  tree8 = createSprite(1025, 230, 50, 80);
  tree8.visible = false;
  rock1 = createSprite(120, 280, 150, 100);
  rock1.visible = false;
  rock2 = createSprite(230, 400, 150, 80);
  rock2.visible = false;
  rock3 = createSprite(100, 710, 100, 80);
  rock3.visible = false;
  rock4 = createSprite(500, 640, 250, 100);
  rock4.visible = false;
  rock5 = createSprite(710, 510, 80, 50);
  rock5.visible = false;
  rock6 = createSprite(1060, 330, 100, 50);
  rock6.visible = false;
  rock7 = createSprite(590, 180, 100, 80);
  rock7.visible = false;
  vent1 = createSprite(100, 535, 120, 100);
  vent1.visible = false;
  vent2 = createSprite(400, 330, 100, 50);
  vent2.visible = false;
  vent3 = createSprite(700, 90, 200, 100);
  vent3.visible = false;
  vent4 = createSprite(847, 340, 150, 50);
  vent4.visible = false;
  vent5 = createSprite(650, 750, 130, 50);
  vent5.visible = false;
  vent6 = createSprite(1100, 680, 100, 50); 
  vent6.visible = false;  
  player = createSprite(1115, 550, 30, 30);
  player.addImage("boy2",boy2Img); 
  player.addImage("boy2left", boy2LeftImg);
  player.scale = 0.7;
  //player.debug = true;
  player.setCollider("rectangle", 0, 0, 30, 150);
  computer = createSprite(1780, 400, 10, 10);
  computer.addImage("boy2",boy1Img);
  computer.scale = 0.7;
  //computer.debug = true;
  computer.setCollider("rectangle", 0,0,100, 200);
  restart = createImg("./assets/restart.png");
  restart.position(600, 50);
  restart.size(1, 1);
}


function draw() {
  background(map);  
  if(gameState === 1 && (!countSnd.isPlaying())){
    countSnd.play();
    randomNum = Math.round(random(1, 21));
    if(randomNum === 1){
      computer.x = tree1.x;
      computer.y = tree1.y;
    }  
    if(randomNum === 2){
      computer.x = tree2.x;
      computer.y = tree2.y;
    }  
    if(randomNum === 3){
      computer.x = tree3.x;
      computer.y = tree3.y;
    } 
    if(randomNum === 4){
      computer.x = tree4.x;
      computer.y = tree4.y ;
    }  
    if(randomNum === 5){
      computer.x = tree5.x;
      computer.y = tree5.y;
    }  
    if(randomNum === 6){
      computer.x = tree6.x;
      computer.y = tree6.y;
    }  
    if(randomNum === 7){
      computer.x = tree7.x;
      computer.y = tree7.y;
    }  
    if(randomNum === 8){
      computer.x = tree8.x;
      computer.y = tree8.y;
    }  
    if(randomNum === 9){
      computer.x = rock1.x;
      computer.y = rock1.y;
    }  
    if(randomNum === 10){
      computer.x = rock2.x;
      computer.y = rock2.y;
    }  
    if(randomNum === 11){
      computer.x = rock3.x;
      computer.y = rock3.y;
    }  
    if(randomNum === 12){
      computer.x = rock4.x;
      computer.y = rock4.y;
    }  
    if(randomNum === 13){
      computer.x = rock5.x;
      computer.y = rock5.y;
    }  
    if(randomNum === 14){
      computer.x = rock6.x;
      computer.y = rock6.y;
    }  
    if(randomNum === 15){
      computer.x = rock7.x;
      computer.y = rock7.y;
    }  
    if(randomNum === 16){
      computer.x = vent1.x;
      computer.y = vent1.y;
    }  
    if(randomNum === 17){
      computer.x = vent2.x;
      computer.y = vent2.y;
    }  
    if(randomNum === 18){
      computer.x = vent3.x;
      computer.y = vent3.y;
    }
    if(randomNum === 19){
      computer.x = vent4.x;
      computer.y = vent4.y;
    }    
    if(randomNum === 20){
      computer.x = vent5.x;
      computer.y = vent5.y;
    }  
    if(randomNum === 21){
      computer.x = vent6.x;
      computer.y = vent6.y;
    }  
    computer.visible = false;
    console.log(computer.x, computer.y);
    setTimeout(()=>{
      gameState = 2;
    }, 6000)
  }
  if(gameState === 2){
    if(keyDown(LEFT)){
      player.x = player.x-10
      player.changeImage("boy2left");
    }
    if(keyDown(RIGHT)){
      player.x = player.x+10
      player.changeImage("boy2");
    }
    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
    }   
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    player.collide(tree1);
    player.collide(tree2);
    player.collide(tree3);
    player.collide(tree4);
    player.collide(tree5);
    player.collide(tree6);
    player.collide(tree7);
    player.collide(tree8);
    player.collide(rock1);
    player.collide(rock2);
    player.collide(rock3);
    player.collide(rock4);
    player.collide(rock5);
    player.collide(rock6);
    player.collide(rock7);
    player.collide(vent1);
    player.collide(vent2);
    player.collide(vent3);
    player.collide(vent4);
    player.collide(vent5);
    player.collide(vent6);  
    if(player.isTouching(computer)){
      foundSnd.play();
      gameState = 3;
      computer.visible = true;
    }
    textSize(30);
    fill("blue");
    text("Time left: " + timer, 10, 50);
    if(frameCount % 60 === 0){
      timer = timer-1;
    }
    if(timer <= 0){
      gameState = 3;
    }
  }
  if(gameState === 3){
    computer.visible = false;
    player.visible = false;
    if(timer <= 0){
    background(timeOverImg);
    }
    else{
      setTimeout(()=>{
      }, 2000);
      background(youWinImg);
    }
    
    restart.size(50, 50);
    restart.mouseClicked(restartF); 
  
  }
  drawSprites();
}

function restartF() {
  console.log("restart")
  gameState = 1;
  countSnd.stop();
  restart.size(1, 1);
  
}
