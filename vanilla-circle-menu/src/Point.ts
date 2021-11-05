export class Point {
  constructor(public x: number, public y: number) {}

  // fromBrowser(browserX: number, browserY: number) {
  //   return {
  //     x: browserX - window.innerWidth * 0.5,
  //     y: window.innerHeight * 0.5 - browserY,
  //   };
  // }

  // toBrowser() {
  //   return {
  //     x: this.x + window.innerWidth * 0.5,
  //     // y: window.innerHeight * 0.5 + this.y,
  //     y: window.innerHeight * 0.5 + this.y,
  //   };
  // }

  multiply(factor: number) {
    return new Point(this.x * factor, this.y * factor);
  }
}
