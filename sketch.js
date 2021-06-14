var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");

	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(300, 580, 20, 20);
	fairy.addAnimation("fairyLabel", fairyImg);
	fairy.scale = 0.4;

	star = createSprite(650,30);
	star.addImage("starLabel", starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
	
  keyPressed();
  console.log(star.y);

  //write code to stop star in the hand of fairy
	if (star.y > 535 && starBody.position.y > 535){
		Matter.Body.setStatic(starBody, true);
	}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 5;
	}

	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 5;
	}
}