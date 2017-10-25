
class YellowPartical {
    constructor(x,y, size){
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-3, -1);
        this.alfaa = random(175, 225);
        this.size = size;
        this.offsetX = this.x + random(-2,2);
        this.offsetY = this.y - random(0,size/2);
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alfaa -= 15;
    }
    show(){
        noStroke();
        fill(255, 204, 104, this.alfaa);
        ellipse(this.offsetX, this.offsetY, this.size-this.size/0.5);
    }
}