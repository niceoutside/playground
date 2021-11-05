import { Point } from "./Point";

export class Degree {
  constructor(public point: Point) {}

  static forPoint(point: Point) {
    return new Degree(point);
  }

  atan() {
    const res = Math.atan2(this.point.y, this.point.x);

    return res;
  }

  realDegree() {
    const atan = this.atan();

    return ((atan * 180) / Math.PI + 360) % 360;
  }
}
