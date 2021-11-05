import { Point } from "./Point";

export class CoordinateTransformer {
  private point: Point;

  constructor(point: Point) {
    this.point = point;
  }

  static forPoint(point: Point) {
    return new CoordinateTransformer(point);
  }

  toInternal(): Point {
    return new Point(
      this.point.x - window.innerWidth * 0.5,
      window.innerHeight * 0.5 - this.point.y
    );
  }

  toBrowser() {
    return new Point(
      this.point.x + window.innerWidth * 0.5,
      this.point.y * -1 + window.innerHeight * 0.5
    );
  }
}
