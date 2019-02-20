//Nelson Ononivu (c)


let r = 250;
let total = 0;
let circle = 0;
let pi = 0;
let count = 0;




function setup() {

  createCanvas(500, 500);
  background(0);

  //Circle
  strokeWeight(2);
  noFill();
  stroke(255);
  ellipse(250, 250, r * 2, r * 2);


  //Square
  strokeWeight(2);
  noFill();
  rectMode(CENTER);
  stroke(255);
  rect(250, 250, 500, 500);



}

function draw() {

  count ++;


  strokeWeight(0.1);
  for (var i = 0; i < 50000; i++) {

    let x = random(0, 500);
    let y = random(0, 500);
    total++;

    //find the between the centre of the circle and the new point.
    let d = dist(250, 250, x, y);


    // if the point dist, d is less than the radius it is within the circle.
    if (d <= r) {
      circle++;
      stroke(255, 0, 0);
    } else if (d >= r) {
      stroke(0, 0, 255);
    }
    point(x, y);


  }


  //derived from the relationship between the area of a square and area of a circle.
  pi = (circle / total) * 4;
  //check the console for the value of pi.
  console.log(pi);

  if(count % 20 == 0){

    window.alert(pi);

  }


}
