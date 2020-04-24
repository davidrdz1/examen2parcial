class Mario{
  constructor(){
    
    this.x = width/2;
    this.y = height/2;
    this.dir = 0.5;
    
    this.velx = 4;
    
    this.img = []; 
   
    this.frame = 0;
   
    for(var i = 0; i < 12; i++){
      this.img[i] = loadImage("Mario/Mario_"+ i +".gif");
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
 
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.5;
    if(this.frame > 7){
      this.frame = 0;
    }
  }
 
  izquierda(){
    this.frame++;
    this.x = this.x - this.velx;
    this.dir = -0.5;
    if(this.frame > 7){
      this.frame = 0;
    }
  }
   
}
