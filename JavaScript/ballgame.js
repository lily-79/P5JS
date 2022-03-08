let gamestate = 0;
let r = 15;

function setup() {
  createCanvas(640, 360);
    background(0);
}

function draw() {
  if(gamestate==0 && mouseX<=40 && mouseY>=320){
    gamestate+=1;
  }
  if(gamestate==1 && mouseX>=80 && mouseY >=280){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX>=120 && mouseY >=240){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX>=160 && mouseY >=200){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX<=600 && mouseY <= 40){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX<=560 && mouseY <= 80){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX<=520 && mouseY <= 120){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX<=480 && mouseY <= 160){
   gamestate +=1;
 }
  if(gamestate==1 && mouseX>=601 && mouseY<=40){
     gamestate +=2;
     }

  if (gamestate ==0){
     fill(255,0,0);
  rect(0,320,40,360);
  fill(0,0,255);
  ellipse(mouseX, mouseY, r*2, r*2);
  } else if(gamestate==1){
  fill(255);
  background(0);
  rect(0,0,600,40);
  rect(0,0,560,80);
  rect(0,0,520,120);
  rect(0,0,480,160);
  rect(40,320,640,360);
  rect(80,280,640,360);
  rect(120,240,640,360);
  rect(160,200,640,360);
  fill(0,255,0);
  rect(600,0,640,40);
  fill(0,0,255);
  ellipse(mouseX, mouseY, r*2, r*2);
  }else if (gamestate==2){
    background(255,0,0);
  } else if (gamestate==3){
    background(0,255,0);
  }
}
