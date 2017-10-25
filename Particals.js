// vars in order rP=Red, bP=Black, yP=Yellow, blP=Blue
let rP;
let bP;
let yP;
let blP;
let particals = [];
function Particals(x,y,size) {
   let xCord = x;
   let yCord = y;
   bP = new BlackPartical(xCord, yCord,size);
   rP = new RedPartical(xCord, yCord,size);
   yP = new YellowPartical(xCord, yCord,size);
   blP= new BluePartical(xCord, yCord,size);
   particals.push(bP);
   particals.push(rP);
   particals.push(yP);
   particals.push(blP);
     for(let i = particals.length-1; i > 0; i--){
      particals[i].show();
      particals[i].update();
      if(particals[i].alfaa <= 0){
          particals.splice(i,1);
      }
  }
}