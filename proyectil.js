class Proyectil{
  constructor(){
     this.x = width/2;
    
     this.velx = 5;
    
     this.img = []; 
   
    this.frame = 0;
   
   for(var i = 0; i < 0; i++){
      this.img[i] = loadImage("Proyectil/Proyectil"+ i +".png");
    }
  }
  mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir, 0.5);
    imageMode(CENTER);
    image(this.img[this.frame], 0, 0);
    pop();
  }
}
