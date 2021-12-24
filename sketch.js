function setup() {
  createCanvas(800, 800);
  
  background(220);
  drawStreet();

  let lightBottom = new TrafficLight(455, 455);
  lightBottom.display();
  let lightRight = new TrafficLight(455, 325, "right");
  lightRight.display();
  let lightTop = new TrafficLight(325, 295, "top");
  lightTop.display();
  let lightLeft = new TrafficLight(295, 455, "left");
  lightLeft.display();

  var controller = new LightsController(lightBottom, lightRight, lightLeft, lightTop);
  controller.runDefaultControl();
}

var pos = 45;

function draw() {
  
}

function drawStreet() {
  fill(color(255, 255, 255));
  noStroke();
  rect(350, 150, 100, 500);
  rect(150, 350, 500, 100);

  // top to bottom
  strokeWeight(5);
  stroke(0);
  line(400, 155, 400, 185);
  line(400, 200, 400, 230);
  line(400, 245, 400, 275);
  line(400, 290, 400, 320);
  line(400, 470, 400, 500);
  line(400, 515, 400, 545);
  line(400, 560, 400, 590);
  line(400, 605, 400, 635);

  // left to right
  line(155, 400, 185, 400);
  line(200, 400, 230, 400);
  line(245, 400, 275, 400);
  line(290, 400, 320, 400);
  line(470, 400, 500, 400);
  line(515, 400, 545, 400);
  line(560, 400, 590, 400);
  line(605, 400, 635, 400);

  // stop lines

  line(350, 350, 400, 350);
  line(450, 350, 450, 400);
  line(400, 450, 450, 450);
  line(350, 450, 350, 400);
}