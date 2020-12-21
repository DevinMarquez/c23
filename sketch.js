var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1S,wall2S,wall3S;
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1S = createSprite(width/2-100,height-90,20,100);
	wall1S.shapeColor = color(255,0,0);

	wall2S = createSprite(width/2,height-50,200,20);
	wall2S.shapeColor = color(255,0,0);

	wall3S = createSprite(width/2+100,height-90,20,100);
	wall3S.shapeColor = color(255,0,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	wall1 = Bodies.rectangle(width/2-100,height-90,20,100,{isStatic:true} );
	World.add(world, wall1);
	 
	wall2 = Bodies.rectangle(width/2,height-50,200,20,{isStatic:true} );
	World.add(world, wall2);

	wall3 = Bodies.rectangle(width/2+100,height-90,20,100,{isStatic:true} );
	World.add(world, wall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false); 
  }
}



