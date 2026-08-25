export class FixedStepLoop {
  /**
   * @param {Function} updateFn Simulation update function(dt)
   * @param {Function} renderFn Render function(alpha)
   * @param {number} step Target time step in seconds (default 1/60s)
   */
  constructor(updateFn, renderFn, step = 1 / 60) {
    this.updateFn = updateFn;
    this.renderFn = renderFn;
    this.step = step;
    this.accumulator = 0;
    this.lastTime = 0;
    this.running = false;
    this.rafId = null;
    this.timeScale = 1.0;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this._tick = this._tick.bind(this);
    this.rafId = requestAnimationFrame(this._tick);
  }

  stop() {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  _tick(currentTime) {
    if (!this.running) return;

    let delta = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Clamp delta to prevent spiral of death on tab freeze
    if (delta > 0.25) delta = 0.25;

    this.accumulator += delta * this.timeScale;

    while (this.accumulator >= this.step) {
      this.updateFn(this.step);
      this.accumulator -= this.step;
    }

    const alpha = this.accumulator / this.step;
    this.renderFn(alpha);

    this.rafId = requestAnimationFrame(this._tick);
  }
}
