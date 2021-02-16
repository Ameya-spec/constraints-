class Ball{
constructor(x,y){
    var options = {
    isStatic:false,
    restitution:0.8,
    friction:1.0,
    density:0.10,
   
    }
this.body = Bodies.circle(x,y,35,options)
this.radius = 35;
World.add(world,this.body)
}
display(){
 
}
}