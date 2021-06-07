class Dustbin{
  constructor(x, y, width, height){
    var options = {
      isStatic : true
    }
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.body = loadImage("MatterJSBoilerPlate-master/dustbin.png");
    World.add(world, this.body);
  }
  
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill(255);
        image(pos.x, pos.y, this.width, this.height);
      }
}
        
    
