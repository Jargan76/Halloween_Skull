
class RedPartical {
  constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.vx = random(-1.5, 1.5);
      this.vy = random(-5, -1);
      this.alfaa = random(150, 200);
      this.flameSize = random(size-5, size+2);
      this.offset = this.flameSize/PI /2;
  }
  update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alfaa -= 7;
      this.flameSize -= 0.5;
  }
  
  show() {
      noStroke();
      fill(255, 1, 5, this.alfaa);
      ellipse(this.x+this.offset*2, this.y-this.offset, this.flameSize/5, this.flameSize);
      ellipse(this.x-this.offset*2, this.y-this.offset, this.flameSize/5, this.flameSize);
      ellipse(this.x, this.y-this.offset, this.flameSize/4, this.flameSize);
      
      fill(255, 50, 50, this.alfaa);
      ellipse(this.x, this.y, this.flameSize);
      ellipse(this.x-this.offset, this.y, this.flameSize);
      ellipse(this.x+this.offset, this.y, this.flameSize);
      
  }
}