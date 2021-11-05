import { Point } from "./Point";

export class Drawer {
  drawPoint(point: Point) {
    const { x, y } = point;

    const newElement = document.createElement("div");
    newElement.classList.add(
      "w-16",
      "h-16",
      "bg-green-300",
      "absolute",
      "rounded-full"
    );

    newElement.style.top = y - 32 + "px";
    newElement.style.left = x - 32 + "px";

    document.body.appendChild(newElement);
  }
}
