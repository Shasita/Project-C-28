//global variables
var treeImage, ground, boyImage;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(110, 450, 50, 50 );

	mango1 = new Mango(720, 70, 60, 60);
	//mango2 = new Mango();
	//mango3 = new Mango();
	//mango4 = new Mango();
	//mango5 = new Mango();
	//mango6 = new Mango();
	//mango7 = new Mango();
	//mango8 = new Mango();
	//mango9 = new Mango();
	//mango10 = new Mango();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("tan");
  

  image (boyImage, 50, 300, 400, 500);
  image (treeImage, 700, 50, 500, 600);

  stone1.display();

  mango1.display();
  //mango2.display();
  //mango3.display();
  //mango4.display();
  //mango5.display();
  //mango6.display();
  //mango7.display();
  //mango8.display();
  //mango9.display();
  //mango10.display();

  drawSprites();
 
}



