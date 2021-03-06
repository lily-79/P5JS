//------- Condortable p5 world :))))) -------//
let red = 255;
let blue = 255;
let green = 255;
let canvas;
let opac = 128;
let sketch = function(p){
  p.setup = function(){
    canvas = p.createCanvas(1000,1000);
    canvas.id("canvas");
    p.background(0);p.background(0);
    p.colorMode(p.RGB);
  }

  p.draw = function(){
//    p.clear();
  //  p.translate(-p.width/2, -p.height/2)
    if(detections != undefined){
      if(detections.multiHandLandmarks != undefined){
    p.stroke(red,green,blue,opac);
    p.strokeWeight(15);
    p.drawLines([0,1,2,3,4]);
    p.drawLines([0,5,6,7,8]);
    p.drawLines([0,17,18,19,20]);
    p.drawLines([5,9,13,17]);
    p.drawLines([9,10,11,12]);
    p.drawLines([13,14,15,16]);


      }
    }
  }

  p.drawHands = function(){
    for(let i=0; i<detections.multiHandLandmarks.length; i++){
      for(let j=0; j<detections.multiHandLandmarks[i].length; j++){
        let x = detections.multiHandLandmarks[i][j].x * p.width;
        let y = detections.multiHandLandmarks[i][j].y * p.height;
        let z = detections.multiHandLandmarks[i][j].z;
        // p.strokeWeight(0);
        // p.textFont('Helvetica Neue');
        // p.text(j, x, y);
        p.point(x, y);
      }
    }
  }

  p.drawLandmarks = function(indexArray, hue){
    for(let i=0; i<detections.multiHandLandmarks.length; i++){
      for(let j=indexArray[0]; j<indexArray[1]; j++){
        let x = detections.multiHandLandmarks[i][j].x * p.width;
        let y = detections.multiHandLandmarks[i][j].y * p.height;
        // let z = detections.multiHandLandmarks[i][j].z;
        p.point(x, y);
      }
    }
  }

  p.drawLines = function(index){
    for(let i=0; i<detections.multiHandLandmarks.length; i++){
      for(let j=0; j<index.length-1; j++){
        let x = detections.multiHandLandmarks[i][index[j]].x * p.width;
        let y = detections.multiHandLandmarks[i][index[j]].y * p.height;
        // let z = detections.multiHandLandmarks[i][index[j]].z;

        let _x = detections.multiHandLandmarks[i][index[j+1]].x * p.width;
        let _y = detections.multiHandLandmarks[i][index[j+1]].y * p.height;
        // let _z = detections.multiHandLandmarks[i][index[j+1]].z;
        p.line(x, y, _x, _y);
      }
    }
  }

  p.keyPressed = function(){
    console.log(p.key);
//red
  if (p.key === 'r'){
    red= 158;
    blue=33;
    green=33;
  }
//orange
  if (p.key === 'o'){
    red= 219;
    blue=29;
    green=102;
  }
//yellow
  if (p.key === 'y'){
    red= 219;
    blue=29;
    green=184;
  }
//green
  if (p.key === 'g'){

    red= 38;
    blue=29;
    green=219;
  }
//blue
  if (p.key === 'b'){
    red= 29;
    blue=219;
    green=102;
  }
//purple
  if (p.key === 'u'){
    red= 153;
    blue=219;
    green=29;
  }
//pink
  if (p.key === 'p'){
    red= 176;
    blue=152;
    green=32;
  }
//white
  if (p.key === 'w'){
    red= 255;
    blue=255;
    green=255;
  }
  if(p.key ==='i'){
    opac +=20;
  }
  if(p.key ==='d'){
    opac -=20;
  }
  }

}

let myp5 = new p5(sketch);
