const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render= Matter.Render
const MouseConstraint= Matter.MouseConstraint
const Mouse = Matter.Mouse
const Composites = Matter.Composites
var engine, world;
var ball,slingShot;




function setup(){
  createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
     render = Render.create({
      element: document.body,
      engine: engine,
    options: {
          width: 500,
          height: 600,
          pixelRatio: 1,
          background: "skyblue",
          wireframeBackground: 'black',
          hasBounds: false,
          enabled: true,
          wireframes:true,
          showSleeping: false,
          showDebug: false,
          showBroadphase: false,
          showBounds: true,
          showVelocity: true,
          showCollisions: true,
          showSeparations: true,
          showAxes: true,
          showPositions: true,
          showAngleIndicator: true,
          showIds: true,
          showShadows: true,
          showVertexNumbers: false,
          showConvexHulls: true,
          showInternalEdges: true,
          showMousePosition: false
      }});
      var mouse = Mouse.create(render.canvas)
      mouseConstraint = MouseConstraint.create(engine, {
               mouse: mouse,
               constraint: {
                   // allow bodies on mouse to rotate
                   angularStiffness: 0.4,
                   render: {
                       visible: false
                   }
               }
           });
     render.mouse= mouse
     World.add(engine.world, mouseConstraint);
     var body = Bodies.polygon(150, 200, 5, 30);
     
    //  var constraint = Constraint.create({
    //       pointA: { x: 100, y: 120 },
    //        bodyB: body,
    //        pointB: { x: -10, y: -10 },
    //        stiffness: 0.1,
    //        damping: 1
    //    });
      
 ball = new Ball(280,200)
 slingShot = new Slingshot(ball.body,{x:280,y:200})

var rows = 10,
yy = 600 - 25 - 40 * rows;

var stack = Composites.stack(400, yy, 5, rows, 0, 0, function(x, y) {
return Bodies.rectangle(x, y, 40, 40);
});

World.add(world, [
stack,
// walls
Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);
 Engine.run(engine);
 Render.run(render);
  }
function draw (){


slingShot.display();
drawSprites();
}
