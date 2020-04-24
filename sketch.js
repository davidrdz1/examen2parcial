var player1;
var player2;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  player1 = new Mario();
  player2 = new Luigi();
  
}

function draw() {
  
  background(255);
 
  player1.mostrar();
  player2.mostrar();
  
  if(keyCode == 74){
    player1.izquierda();
  }
  if(keyCode == 76){
    player1.derecha();
  }
  if(keyCode == 68){
    player2.derecha();
  }
  if(keyCode == 65){
    player2.izquierda();
  }
  
}
