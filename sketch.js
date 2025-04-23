function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#725A51');
  circle(200, 200, 300);
  circle(150, 150, 60);
  circle(250, 150, 60);
  line(150, 270, 250, 235);
  triangle(200, 180, 170, 220, 220, 220);
  line(118,116,165,102)
  line(229,109,267,104)
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
function draw() {
  background('#FF5722');
  fill('#03A9F4');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300); // rosto
  fill('white');  
  stroke('#A3680D');
  strokeWeight(1);
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  stroke('red');  
  strokeWeight(4);
  line(150, 270, 250, 235); // boca
  fill('#C06B65');
  stroke('#332D2B');
  strokeWeight(1); 
  triangle(200, 180, 170, 220, 220, 220); // nariz
  strokeWeight(4);
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  stroke(0); 
  strokeWeight(1);
  circle(150, 150, 10); // pupila esquerda
  circle(250, 150, 10); // pupila direita
    
    if(mouseIsPressed){
        console.log(mouseX,mouseY);
    }
}

