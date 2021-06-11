const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var con1,con2,con3,con4,con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    bob_options = {
	  isStatic:true	
	}

    bob1 = Bodies.circle(330,300,15,bob_options);
    World.add(world,bob1);

    bob2 = Bodies.circle(360,300,15,bob_options);
    World.add(world,bob2);

	bob3 = Bodies.circle(390,300,15,bob_options);
    World.add(world,bob3);

	bob4 = Bodies.circle(420,300,15,bob_options);
    World.add(world,bob4);

	bob5 = Bodies.circle(450,300,15,bob_options);
    World.add(world,bob5);

     con1 = Matter.Constraint.create({
          pointA:{x:330,y:100},
          bodyB:bob1,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con1);

con2 = Matter.Constraint.create({
          pointA:{x:360,y:100},
          bodyB:bob2,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
       World.add(world,con2) 
  
  con3 = Matter.Constraint.create({
          pointA:{x:390,y:100},
          bodyB:bob3,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
       World.add(world,con3) 

    con4 = Matter.Constraint.create({
          pointA:{x:420,y:100},
          bodyB:bob4,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
       World.add(world,con4) 

        con5 = Matter.Constraint.create({
          pointA:{x:450,y:100},
          bodyB:bob5,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
       World.add(world,con5) 

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
push();
  strokeWeight(5);
  stroke("white");
  line(con1.pointA.x,con1.pointA.y,bob1.position.x,bob1.position.y);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
  line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
  line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
  pop()
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,15);
  ellipse(bob2.position.x,bob2.position.y,15);
  ellipse(bob3.position.x,bob3.position.y,15);
  ellipse(bob4.position.x,bob4.position.y,15);
  ellipse(bob5.position.x,bob5.position.y,15);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
 function keyPressed() 
    {if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45}); }
     }
                  