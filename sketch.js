var w1, w2 ,w3 ,w4 ,w5 ,w6 ,w7 ,w8 ,w9 ,w10 ,w11 ,w12 ,w13 ,w14 ,w15 ,w16 ,w17 ,w18 ,w19 ,w20 ,w21;
var w22 ,w23 ,w24 ,w25 ,w26 ,w27 ,w28 ,w29 ,w30 ,w31 ,w32 ,w33 ,w34 ,w35 ,w36 ,w37 ,w38 ,w39 ,w40;
var w41 ,w42 ,w43 ,w44 ,w45;
var player ,playerImg ,plate ,plateImg ,spider ,spiderImg ,bed ,bedImg;
var granny ,grannyImg ,cheast ,chaestImg ,gray ,grayImg ,hammer ,hammerImg;
var meat2 ,meat2Img ,master ,masterImg ,cupboard ,cupboardImg ,blood1 ,blood1Img;
var blood2 ,blood2Img ,blood3 ,bloodImg ,table ,tableImg ,gun ,gunImg;

var w = [];

function preload(){
 playerImg = loadImage("Boy.png");
 plateImg = loadImage("Plate.png");
 spiderImg = loadImage("SPIDER.png");
 bedImg = loadImage("bed minecraft.png");
 grannyImg = loadImage("Granny.png");
 grayImg = loadImage("Grey Vase.png");
 chaestImg = loadImage("cheast.png");
 hammerImg = loadImage("HAMMER for granny.png");
 meat2Img = loadImage("meat2.png");
 masterImg = loadImage("Master Key.png");
 cupboard = loadImage("cupboard.png");
 gunImg = loadImage("Super-Shotgun.png");
 tableImg = loadImage("Table.png");
 blood1Img = loadImage("blood1.png");
 blood2Img = loadImage("BLOOD-2.png");
 bloodImg = loadImage("BLOOD-3.png");
}

function setup() {   
  createCanvas(800,650);
  player = createSprite(45 ,50 ,20 ,20);
  player.addImage(playerImg);
  player.scale=0.065;

  plate = createSprite(345 ,372 ,10 ,10);
  plate.addImage(plateImg);
  plate.scale=0.03;

 spider = createSprite(220 ,210 ,20 ,20)
 spider.addImage(spiderImg);
 spider.scale=0.1;

 bed = createSprite(30 ,30 ,10 ,10);
 bed.addImage(bedImg);
 bed.scale=0.18;

 granny = createSprite(Math.round(random(100 ,500)) ,Math.round(random(100 ,500)) ,10 ,10);
 granny.addImage(grannyImg);
 granny.scale=0.075;

 gray = createSprite(375 ,30 ,10 ,10);
 gray.addImage(grayImg);
 gray.scale=0.07;

 cheast = createSprite(325 ,25 ,10 ,10);
 cheast.addImage(chaestImg);
 cheast.scale=0.08;

 hammer = createSprite(350 ,210 ,10 ,10);
 hammer.addImage(hammerImg);
 hammer.scale=0.05;

 gun = createSprite(115 ,320 ,10 ,10);
 gun.addImage(gunImg);
 gun.scale=0.10;

 master = createSprite(480 ,270 ,10 ,10);
 master.addImage(masterImg);
 master.scale=0.05;

  w1 = createSprite(80, 55, 5, 390);
  w2 = createSprite(145 ,105 ,125 ,5);
  w3 = createSprite(20, 105 ,55 ,5);
  w4 = createSprite(130 ,150 ,150 ,5);
  w5 = createSprite(50 ,300 ,300 ,5);
  w6 = createSprite(140 ,245 ,5,110);
  w7 = createSprite(0 ,400 ,5 ,800);
  w8 = createSprite(400 ,0 ,800 ,5);
  w9 = createSprite(800 ,400 ,5 ,800);
  w10 = createSprite(400 ,800 ,800 ,5);
  w11 = createSprite(200 ,290 ,5 ,200);
  w12 = createSprite(295 ,190 ,200 ,5);
  w13 = createSprite(145 ,45 ,130 ,5);
  w14 = createSprite(275 ,115 ,5 ,150);
  w15 = createSprite(345 ,50 ,5 ,150);
  w16 = createSprite(390 ,270 ,5 ,160);
  w17 = createSprite(470 ,190 ,150 ,5);
  w18 = createSprite(420 ,120 ,150 ,5);
  w19 = createSprite(485 ,40 ,5 ,85);
  w20 = createSprite(540 ,110 ,5 ,160);
  w21 = createSprite(605 ,95 ,130 ,5);
  w22 = createSprite(660 ,25 ,5 ,70);
  w23 = createSprite(735 ,150 ,120 ,5);
  w24 = createSprite(735 ,25 ,5 ,70);
  w25 = createSprite(675 ,250 ,5 ,205);
  w26 = createSprite(630 ,200 ,90 ,5);
  w27 = createSprite(570 ,250 ,210 ,5);
  w28 = createSprite(465 ,320 ,5 ,150);
  w29 = createSprite(295 ,385 ,190 ,5);
  w30 = createSprite(570 ,390 ,210 ,5);
  w31 = createSprite(385 ,420 ,5 ,70);
  w32 = createSprite(550 ,445 ,330 ,5);
  w33 = createSprite(720 ,250 ,90 ,5);
  w34 = createSprite(715 ,505 ,5 ,130);
  w35 = createSprite(765 ,390 ,100 ,5);
  w36 = createSprite(555 ,570 ,330 ,5);
  w37 = createSprite(715 ,590 ,5 ,60);
  w38 = createSprite(485 ,485 ,5 ,85);
  w39 = createSprite(90 ,425 ,5 ,250);
  w40 = createSprite(145 ,440 ,110 ,5);
  w41 = createSprite(300 ,485 ,5 ,195);
  w42 = createSprite(180 ,610 ,5 ,155);
  w43 = createSprite(80 ,600 ,120 ,5);
  w44 = createSprite(600 ,485 ,5 ,80);
  w45 = createSprite(460 ,595 ,5 ,45);
  
  player.setCollider("rectangle" ,0 ,0 ,200 ,400);

  w =[ w1, w2 ,w3 ,w4 ,w5 ,w6 ,w7 ,w8 ,w9 ,w10 ,w11 ,w12 ,w13 ,w14 ,w15 ,w16 ,w17 ,w18 ,w19 ,w20 ,w21 ,w22 ,w23 ,w24 ,w25 ,w26 ,w27 ,w28 ,w29 ,w30 ,w31 ,w32 ,w33 ,w34 ,w35 ,w36 ,w37 ,w38 ,w39 ,w40 ,w41 ,w42 ,w43 ,w44 ,w45]
}

function draw() {
  background(0);  
  drawSprites();
  text(mouseX+ "," +mouseY, mouseX, mouseY);
  if(keyWentDown("up")){
    player.velocityY = -2;
  }

  if(keyWentUp("up")){
  player.velocityY = 0;
  }

if(keyWentDown("down")){
  player.velocityY = 2;
}

if(keyWentUp("down")){
  player.velocityY = 0;
}

if(keyWentDown("left")){
  player.velocityX = -2;
}

if(keyWentUp("left")){
  player.velocityX = 0;
}

if(keyWentDown("right")){
 player.velocityX = 2;
}

if(keyWentUp("right")){
  player.velocityX = 0;
}

for (var i = 0 ; i<=44 ; i++){
player.collide(w[i]);
}

}

