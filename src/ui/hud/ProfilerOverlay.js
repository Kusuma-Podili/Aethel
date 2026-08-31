export class ProfilerOverlay {
  constructor() {
    this.fps = 60;
    this.frameCount = 0;
    this.lastFpsUpdate = performance.now();
    this.drawCalls = 0;
    this.entityCount = 0;

    this.fpsDisplay = document.getElementById('fps-display');
    this.entityDisplay = document.getElementById('entity-count-display');
  }

  update(entityCount = 0, drawCalls = 0) {
    this.frameCount++;
    this.entityCount = entityCount;
    this.drawCalls = drawCalls;

    const now = performance.now();
    if (now - this.lastFpsUpdate >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      this.frameCount = 0;
      this.lastFpsUpdate = now;

      if (this.fpsDisplay) this.fpsDisplay.textContent = `FPS: ${this.fps}`;
      if (this.entityDisplay) this.entityDisplay.textContent = `Entities: ${this.entityCount}`;
    }
  }
}
