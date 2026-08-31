/**
 * @file Matrix3.js
 * @description 3x3 Matrix for 2D affine transformations, rotation, translation, scaling.
 */

export class Matrix3 {
  constructor() {
    this.elements = new Float32Array([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  identity() {
    const e = this.elements;
    e[0] = 1; e[1] = 0; e[2] = 0;
    e[3] = 0; e[4] = 1; e[5] = 0;
    e[6] = 0; e[7] = 0; e[8] = 1;
    return this;
  }

  copy(m) {
    this.elements.set(m.elements);
    return this;
  }

  clone() {
    const m = new Matrix3();
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

    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];

    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];

    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;

    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;

    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  makeTranslation(tx, ty) {
    this.identity();
    this.elements[6] = tx;
    this.elements[7] = ty;
    return this;
  }

  makeRotation(theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    this.identity();
    this.elements[0] = c;
    this.elements[3] = -s;
    this.elements[1] = s;
    this.elements[4] = c;
    return this;
  }

  makeScale(sx, sy) {
    this.identity();
    this.elements[0] = sx;
    this.elements[4] = sy;
    return this;
  }

  translate(tx, ty) {
    const m = new Matrix3().makeTranslation(tx, ty);
    return this.multiply(m);
  }

  rotate(theta) {
    const m = new Matrix3().makeRotation(theta);
    return this.multiply(m);
  }

  scale(sx, sy) {
    const m = new Matrix3().makeScale(sx, sy);
    return this.multiply(m);
  }

  invert() {
    const te = this.elements;
    const n11 = te[0], n21 = te[1], n31 = te[2];
    const n12 = te[3], n22 = te[4], n32 = te[5];
    const n13 = te[6], n23 = te[7], n33 = te[8];

    const t11 = n33 * n22 - n32 * n23;
    const t12 = n32 * n13 - n33 * n12;
    const t13 = n23 * n12 - n22 * n13;

    const det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.identity();

    const detInv = 1 / det;

    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;

    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;

    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;

    return this;
  }

  transformPoint(p, out = p) {
    const x = p.x, y = p.y;
    const e = this.elements;
    out.x = e[0] * x + e[3] * y + e[6];
    out.y = e[1] * x + e[4] * y + e[7];
    return out;
  }

  transformVector(v, out = v) {
    const x = v.x, y = v.y;
    const e = this.elements;
    out.x = e[0] * x + e[3] * y;
    out.y = e[1] * x + e[4] * y;
    return out;
  }
}
