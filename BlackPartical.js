// This is the Black Partical used by Particals.js 
class BlackPartical {
  constructor(x, y, size) {
      this.x = x;
      this.y = y;
      // vx, vy is velocity       
      this.vx = random(-0.5, 0.5);
      this.vy = random(-2, -0.5);
      this.size = size;
      this.alfaa = random(50, 120);
  }
  update() {
      
      this.x += this.vx;
      this.y += this.vy;
      this.alfaa -= 5;
  }
  show() {
      noStroke();
      fill(75, 0, 0, this.alfaa);
      ellipse(this.x-5, this.y+4, this.size-this.size/0.65);
      ellipse(this.x+5, this.y+4, this.size-this.size/0.65);
  }
}