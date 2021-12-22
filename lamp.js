class Lamp {
  constructor(col, x, y) {
    if (col === "red") {
      this.color = color(255, 0, 0);
    } else if (col === "yellow") {
      this.color = color(255, 255, 0);
    } else if (col === "green") {
      this.color = color(0, 255, 0);
    } else {
      throw Error("error");
    }

    this.x = x;
    this.y = y;
  }

  display() {
    strokeWeight(1);
    fill(this.color);
    ellipse(this.x, this.y , 12, 12);
  }
}