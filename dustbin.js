class Dustbin {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic:true,
      }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.image = loadImage("dustbinImg.png")
    this.height = height
    this.width = width

     }

     display(){
    var pos = this.body.position;
    var angle = this.body.angle 
    push();
    translate(pos.x, pos.y)
    rotate(angle) 
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height)
    pop();
     }


    }

