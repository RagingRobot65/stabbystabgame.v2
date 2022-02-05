//Canvas
let posX = 150;
let xSpeed = 4;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background("goldenrod");
  //Other
  strokeWeight(4);
  fill("navy");
  square(550, 150, 100);
  fill("red");
  square(560, 160, 30);
  square(610, 160, 30);
  //Player
  fill("navy");
  square(posX, 150, 100, 25);
  fill("yellowgreen");
  square(posX + 10, 160, 30, 10);
  square(posX + 60, 160, 30, 10);
  noFill();
  healthBoxes();
}

function healthBoxes() {
  fill(0);
  rect(100, 50, 200, 30);
  fill(255, 0, 0);
  rect(100, 50, playerHealth, 30);
  fill(255);
  textSize(20);
  strokeWeight(40);
  text(playerHealth, 185, 70);
  strokeWeight(3);
  fill(0);
  rect(500, 50, 200, 30);
  fill(255, 0, 0);
  rect(500, 50, enemyHealth*.74, 30);
  fill(255);
  text(enemyHealth, 585, 70);
}
/*
function drawJoe(x, y, r) {
  circle(x, y, r);
  fill(168, 218, 247);
  circle(x + 20, y, r / 3.5);
  circle(x - 20, y, r / 3.5);
  noFill();
  arc(x, y + 20, 30, 20, 0, PI);
  line(x, y + 40, x, y + 180);
  line(x, y + 50, x + 50, y + 130);
  line(x, y + 50, x - 50, y + 130);
  line(x, y + 180, x + 30, y + 275);
  line(x, y + 180, x - 30, y + 275);
}

function plEnter() {
  posX = posX + xSpeed;
  if (posX > 400) {
    plSword();
    setTimeout(plExit, 1300);
  }
}

function plSword() {
  xSpeed = 0;
  strokeWeight(13);
  line(480, 215, 600, 205);
  strokeWeight(7);
  line(500, 200, 505, 227);
}

function plExit() {
  xSpeed = -4;
  if (posX < 151) {
    xSpeed = 0;
  }
}
*/
