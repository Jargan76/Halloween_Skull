
class Skull {
    constructor() {
        this.x = 250;
        this.y = 275;
        this.eyesY = this.y-125;
        this.noseY = this.y-30;
        this.teethY = this.y+55;
    }

    show() {
        noStroke();
        fill(250,250,204);
        // back of skull
        rect(this.x-112.5, this.y, 225, 100);
        // teeth
        stroke(33);
        fill(245)
        rect(this.x-100, this.y, 200, 80);
        line(this.x-100, this.teethY, this.x+100, this.teethY)
        noStroke();
        // top shadding
        noStroke();
        fill(180,200);
        ellipse(this.x+1, this.y-95, 350, 300);
        // skull top
        stroke(33)
        fill(255,255,214);
        ellipse(this.x, this.y-100, 350, 300);
        // chin shadding
        noStroke();
        fill(180, 200);
        ellipse(this.x, this.y+100, 240, 60);
        // skull bottom
        stroke(33);
        fill(255,255,214);
        ellipse(this.x, this.y+95, 240, 60);

        // left eye
        fill(75);
        ellipse(this.x-65, this.eyesY, 78, 103);
        fill(138,138,92);
        ellipse(this.x-65, this.eyesY, 75, 100);
        // right eye
        fill(75);
        ellipse(this.x+65, this.eyesY, 78, 103);
        fill(138,138,92);
        ellipse(this.x+65, this.eyesY, 75, 100);
        // nose
        noStroke();
        fill(75);
        ellipse(this.x+15, this.noseY, 40, 65);
        ellipse(this.x-15, this.noseY, 40, 65);

        // fill(255,255,214);
        // ellipse(this.x, this.y+95, 240, 60);
    }
}