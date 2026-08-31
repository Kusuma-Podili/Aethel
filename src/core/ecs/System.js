export class System {
  constructor(priority = 0) {
    this.priority = priority;
    this.enabled = true;
    this.world = null;
  }

  init(world) {
    this.world = world;
  }

  update(dt) {}

  render(dt) {}

  destroy() {}
}
