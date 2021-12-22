class TrafficLight {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  display() {
    strokeWeight(2);
    fill(color(100, 100 , 100));
    rect(this.x, this.y, 20, 50);

    const red = new Lamp("red", this.x + 10, this.y + 10)
    red.display();

    const yellow = new Lamp("yellow", this.x + 10, this.y + 25)
    yellow.display();

    const green = new Lamp("green", this.x + 10, this.y + 40)
    green.display();
  }

  turnRed() {

  }

  turnGreen() {

  }
}