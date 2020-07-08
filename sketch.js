

// Main video link https://www.youtube.com/watch?v=RUSvMxxm_Jo&t=483s
function preload()
{
	
}
var databse
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var drawing = [];
var currentPath = [];

function setup() {
	canvas = createCanvas(200, 200);
	canvas.mousePressed(startPath);
	//canvas.mouseReleased(endPath);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function startPath(){
	currentPath = []
	drawing.push(currentPath)
}

//function endPath(){
	//drawing.push(currentPath); 
//}

function draw() {
  rectMode(CENTER);
  background(0);

  if (mouseIsPressed){ 
	  var point = {
		  x: mouseX,
		  y:mouseY
	  }
	currentPath.push(point); 
  }

stroke(255);
strokeWeight(4);
noFill();
  for ( var i = 0; i < drawing.length; i++){
	  var path = drawing [i];
	  beginShape();
	for ( var j = 0; j < path.length; j++){
	  vertex(path[j].x,path[j].y)
	}
	endShape();
  }
  

  //console.log(drawing)
  
  


  
 
}



