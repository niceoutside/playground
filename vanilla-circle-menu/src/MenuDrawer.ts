interface MenuDrawerProps {
  sizeFactor: number;
  laneFactor: number;
}

const defaultProps: MenuDrawerProps = {
  sizeFactor: 4,
  laneFactor: 5,
};

export class MenuDrawer {
  private radius: number;
  private offset: number;
  private factor: number;
  private laneWidth: number;
  private refContainer: HTMLElement;

  constructor(private rect: DOMRect, options: Partial<MenuDrawerProps> = {}) {
    const mergedProps = { ...defaultProps, ...options };
    this.factor = mergedProps.sizeFactor;
    this.radius = rect.width * this.factor;
    this.offset = (this.radius - rect.width) * 0.5;
    this.laneWidth = this.factor * mergedProps.laneFactor;
    this.refContainer = this.createContainer();
  }

  private createContainer() {
    const element = document.createElement("div");
    element.style.position = "absolute";
    element.style.top = `${this.rect.top - this.offset}px`;
    element.style.left = `${this.rect.left - this.offset}px`;
    element.style.width = `${this.radius}px`;
    element.style.height = `${this.radius}px`;
    document.body.appendChild(element);

    return element;
  }

  public drawLane() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100 100");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", `50`);
    circle.setAttribute("cy", `50`);
    circle.setAttribute("r", `${50 - this.laneWidth * 0.5}`);
    circle.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
    circle.setAttribute("stroke-width", `${this.laneWidth}px`);
    circle.setAttribute("fill", "none");
    svg.appendChild(circle);

    this.refContainer.appendChild(svg);
  }

  getLaneWidth() {
    return this.laneWidth;
  }
}
