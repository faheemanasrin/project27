class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
          bodyA:bodyA,
       bodyB:bodyB,
       pointB:{x:this.offsetX,y:this.offsetY} 
}
       this.rope=Constraint.create(options) ;
       World.add(world,this.rope)
    }

display(){
    
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position
  
strokeWeight(2);

var Anchor1X=pointA.x
var Anxhor1y=pointA.y

var Anchor2x=pointB.x+this.offsetX
var Anchor2y=pointB.y+this.offsetY
  
    line (Anchor1X,Anxhor1y,Anchor2x,Anchor2y);


}
}