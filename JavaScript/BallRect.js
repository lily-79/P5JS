let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(220);
  rect(mouseX,mouseY,width/4,height/4)
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(width/2,0);
    this.speed = createVector(random(-10, 10), random(-10, 10));
    this.c = color(random(255), random(255), random(255));
    this.r = random(10, 20);
  }

  move() {

    this.pos.add(this.speed);

    if (this.pos.x < 0) {
      this.speed.x = abs(this.speed.x);
    } else if (this.pos.x > width) {
      this.speed.x = -abs(this.speed.x);
    }

    if (this.pos.y < 0) {
      this.speed.y = abs(this.speed.y);
    } else if (this.pos.y > height) {
      this.speed.y = -abs(this.speed.y);
    }

    if(this.pos.x<mouseX+width/4+this.r && this.pos.y>mouseY-this.r && this.pos.y<mouseY+height/4+this.r && this.pos.x>mouseX-this.r){
      this.speed.x = this.speed.x *-1;
      this.speed.y = this.speed.y * -1;
    }
    if(this.pos.x<mouseX+width/4 && this.pos.y>mouseY && this.pos.y<mouseY+height/4 && this.pos.x>mouseX){
      this.pos = createVector(width/2,0);
    }
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}
