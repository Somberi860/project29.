class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var posX = this.body.position.x;
    var posY = this.body.position.y;
    push();
    translate(this.body.position.x, this.body.position.y);
    
    rectMode(CENTER);
    fill("red");
    rect( 0, 0, this.width, this.height);
    pop();
  }
}

