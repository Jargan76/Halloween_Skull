// This is the Blue Partical used by Particals.js

class BluePartical {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      // vx, vy is velocity 
      this.vx = random(-0.5, 0.5);
      this.vy = random(-1, -0.5);
      // this is the alpha used to fade-out  
      this.alfaa = random(100, 120);
      this.offsetY = this.y - random(0,size/2);
  }
  update() {
      // using the velocity
      this.x += this.vx;
      this.y += this.vy;
    //   the higher the this.alfaa the faster it will burn out
      this.alfaa -= 13;
  }
  show() {
      noStroke();
      fill(10, 10, 255, this.alfaa);
      ellipse(this.x, this.offsetY, this.size-this.size/0.50);
  }
}