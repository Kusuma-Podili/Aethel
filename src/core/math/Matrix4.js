/**
 * @file Matrix4.js
 * @description 4x4 Matrix for 3D/Isometric projections, WebGL model-view-projection shaders.
 */

export class Matrix4 {
  constructor() {
    this.elements = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
  }

  identity() {
    const e = this.elements;
    e.fill(0);
    e[0] = 1; e[5] = 1; e[10] = 1; e[15] = 1;
    return this;
  }

  copy(m) {
    this.elements.set(m.elements);
    return this;
  }

  clone() {
    const m = new Matrix4();
    m.copy(this);
    return m;
  }

  multiply(m) {
    return this.multiplyMatrices(this, m);
  }

  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;

    for (let i = 0; i < 4; i++) {
      const a0 = ae[i], a1 = ae[i + 4], a2 = ae[i + 8], a3 = ae[i + 12];
      te[i]      = a0 * be[0] + a1 * be[1] + a2 * be[2] + a3 * be[3];
      te[i + 4]  = a0 * be[4] + a1 * be[5] + a2 * be[6] + a3 * be[7];
      te[i + 8]  = a0 * be[8] + a1 * be[9] + a2 * be[10] + a3 * be[11];
      te[i + 12] = a0 * be[12] + a1 * be[13] + a2 * be[14] + a3 * be[15];
    }
    return this;
  }

  makeOrthographic(left, right, top, bottom, near, far) {
    const te = this.elements;
    const w = 1.0 / (right - left);
    const h = 1.0 / (top - bottom);
    const p = 1.0 / (far - near);

    const x = (right + left) * w;
    const y = (top + bottom) * h;
    const z = (far + near) * p;

    te[0] = 2 * w;  te[4] = 0;      te[8] = 0;       te[12] = -x;
    te[1] = 0;      te[5] = 2 * h;  te[9] = 0;       te[13] = -y;
    te[2] = 0;      te[6] = 0;      te[10] = -2 * p; te[14] = -z;
    te[3] = 0;      te[7] = 0;      te[11] = 0;      te[15] = 1;

    return this;
  }

  makePerspective(fovYRadians, aspect, near, far) {
    const te = this.elements;
    const f = 1.0 / Math.tan(fovYRadians / 2);
    const rangeInv = 1.0 / (near - far);

    te[0] = f / aspect; te[4] = 0;  te[8] = 0;                          te[12] = 0;
    te[1] = 0;          te[5] = f;  te[9] = 0;                          te[13] = 0;
    te[2] = 0;          te[6] = 0;  te[10] = (far + near) * rangeInv;   te[14] = 2 * far * near * rangeInv;
    te[3] = 0;          te[7] = 0;  te[11] = -1;                        te[15] = 0;

    return this;
  }

  makeTranslation(x, y, z) {
    this.identity();
    this.elements[12] = x;
    this.elements[13] = y;
    this.elements[14] = z;
    return this;
  }

  makeScale(x, y, z) {
    this.identity();
    this.elements[0] = x;
    this.elements[5] = y;
    this.elements[10] = z;
    return this;
  }
}
