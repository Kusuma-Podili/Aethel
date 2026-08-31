export class ObjectPool {
  /**
   * @param {Function} factory Function to construct new instance
   * @param {Function} reset Function to reset instance for reuse
   * @param {number} initialSize
   */
  constructor(factory, reset = (obj) => obj, initialSize = 32) {
    this.factory = factory;
    this.reset = reset;
    this.pool = [];

    for (let i = 0; i < initialSize; i++) {
      this.pool.push(this.factory());
    }
  }

  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.factory();
  }

  release(obj) {
    this.reset(obj);
    this.pool.push(obj);
  }

  get available() {
    return this.pool.length;
  }
}
