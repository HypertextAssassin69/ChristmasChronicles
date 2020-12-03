class Man extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/theif.gif");
    this.Visiblity = 255;
   
  }

 display(){
   //console.log(this.body.speed);
   // this.body.speed = 1;
   if(this.body.velocity.x <0.4||this.body.velocity.x >1){
    Matter.Body.setVelocity( this.body, {x: 0.4, y: 0});
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 200,200);
    //Matter.body.setVelocity(this.body,velocity.x=1)
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     //this.image.scale = 3
     image(this.image, this.body.position.x, this.body.position.y, 10, 10); 

    // Matter.body.scale(this.body,2,2);
     

     pop();
   }

   }
   
   score(){
    // var score = 0 
    if (this.Visiblity < 0 && this.Visiblity > -20){
     
       score = score+1;
       console.log("pig be gone")
      }

};

}
