var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,red1,red2,red3;
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

	red1=createSprite(width/2, 200,100,20);
	red1.scale=0.6

	red2=createSprite(width/2, 200, 20,200);
	red2.scale=0.6

	red3=createSprite(width/2, 200, 100,20);
	red3.scale=0.6



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 10, {isStatic:true} );
	 World.add(world, ground);
	 
	 red1 = Bodies.rectangle(width/2 , 250 ,20, height100 , {isStatic:true} );
	 World.add(world, red1);
	 
	 red2 = Bodies.rectangle(width/2 , 350 ,200, height20 , {isStatic:true} );
	 World.add(world, red2);
	 
	 red3 = Bodies.rectangle(width/2 , 500 ,20, height100, {isStatic:true} );
 	World.add(world, red3);

	 keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    package_options ={
		isStatic: false
  }
}
}


