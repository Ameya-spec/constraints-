class Slingshot{
constructor(body,point){
 var options = {
 bodyA:body,
pointB:point,
stiffness: 0.01,
length:130,
 damping:1
 }

 this.pointB=point;
this.sling=Constraint.create(options);
  World.add(world,this.sling);
 }


display(){


}
}
