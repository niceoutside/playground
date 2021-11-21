import { CoordinateTransformer } from "./CoordinateTransformer";
import { Degree } from "./Degree";
import { Drawer } from "./Drawer";
import { MenuDrawer } from "./MenuDrawer";
import { Point } from "./Point";

function handleClick({ clientX, clientY }: MouseEvent) {
  const pClicked = new Point(clientX, clientY);
  const transformer = CoordinateTransformer.forPoint(pClicked);
  const internalPoint = transformer.toInternal();

  const degree = new Degree(internalPoint).realDegree();

  const circleNode = document.getElementById("circleLane");
  if (!circleNode) throw Error("nix");

  const radiusRect = circleNode.getBoundingClientRect();
  const borderWidth =
    +`${circleNode.style.borderWidth}`.replace("px", "") * 0.5;
  const radius = radiusRect.width / 2 - borderWidth;
  const factor =
    radius / Math.sqrt(internalPoint.x ** 2 + internalPoint.y ** 2);
  const mega = internalPoint.multiply(factor);

  const newShit = CoordinateTransformer.forPoint(mega).toBrowser();

  const drawer = new Drawer();
  // drawer.drawPoint(newShit);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    console.log("DOMContentLoaded");
    const tableElement = document.getElementById("table");
    const rect = tableElement?.getBoundingClientRect();

    if (!rect) throw Error("nix");

    const drawer = new MenuDrawer(rect);
  }, 250);
});
