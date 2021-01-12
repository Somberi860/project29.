class Polygon{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = width;
        this.height = height;
        polygon = loadImage("polygon.png");
        World.add(world, polygon);
      }
      display(){
        var posX = this.body.position;
        var posY = this.body.position;
        push();
        translate(this.body.position,this.body.position);
        
        imageMode(CENTER);
        image(this.image ,polygon.position,polygon.position,40,40);
        pop();
      }
}