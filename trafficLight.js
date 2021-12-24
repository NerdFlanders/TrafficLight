class TrafficLight {
  isRed = false;
  isYellow = false;
  isGreen = false;

  red = undefined;
  yellow = undefined;
  green = undefined;

  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  display() {
    strokeWeight(2);
    fill(color(100, 100 , 100));
    let posRedX;
    let posRedY;
    let posYellowX;
    let posYellowY;
    let posGreenX;
    let posGreenY;

    if (this.orientation === "right") {
      rect(this.x, this.y, 50, 20);
      posRedX = this.x + 10;
      posRedY = this.y + 10;
      posYellowX = this.x + 25;
      posYellowY = this.y + 10;
      posGreenX = this.x + 40;
      posGreenY = this.y + 10;
    } else if (this.orientation === "top") {
      rect(this.x, this.y, 20, 50);
      posRedX = this.x + 10;
      posRedY = this.y + 40;
      posYellowX = this.x + 10;
      posYellowY = this.y + 25;
      posGreenX = this.x + 10;
      posGreenY = this.y + 10;
    } else if (this.orientation === "left") {
      rect(this.x, this.y, 50, 20);
      posRedX = this.x + 40;
      posRedY = this.y + 10;
      posYellowX = this.x + 25;
      posYellowY = this.y + 10;
      posGreenX = this.x + 10;
      posGreenY = this.y + 10;
    } else {
      // default
      rect(this.x, this.y, 20, 50);
      posRedX = this.x + 10;
      posRedY = this.y + 10;
      posYellowX = this.x + 10;
      posYellowY = this.y + 25;
      posGreenX = this.x + 10;
      posGreenY = this.y + 40;
    }

    this.red = new Lamp("red", posRedX, posRedY);
    this.yellow = new Lamp("yellow", posYellowX, posYellowY);
    this.green = new Lamp("green", posGreenX, posGreenY);
    this.red.turnOn();
    this.yellow.turnOff();
    this.green.turnOff();
  }

  turnOnRed() {
    this.red.turnOn();
  }

  turnOffRed() {
    this.red.turnOff();
  }

  turnOnYellow() {
    this.yellow.turnOn();
  }

  turnOffYellow() {
    this.yellow.turnOff();
  }

  turnOnGreen() {
    this.green.turnOn();
  }

  turnOffGreen() {
    this.green.turnOff();
  }

  getState() {
    return this.isGreen ? "green" : "red";
  }

  sleep(millisecondsDuration)
  {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecondsDuration);
    })
  }
}