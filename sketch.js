let skull;

function setup() {
  createCanvas(500, 500);
  skull = new Skull();
}
function draw() {
    background(75);
    skull.show();
    Particals(185, 172, 40);
    Particals(315, 172, 40);
}

