import { Vector2 } from '../../core/math/Vector2.js';
import { Matrix4 } from '../../core/math/Matrix4.js';
import { BoundingBox2D } from '../../core/math/BoundingBox2D.js';

export class Camera2D {
  constructor(viewportWidth = 1280, viewportHeight = 720) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.position = new Vector2(0, 0);
    this.target = null;
    this.zoom = 1.0;
    this.rotation = 0;

    this.projectionMatrix = new Matrix4();
    this.viewMatrix = new Matrix4();
    this.viewBounds = new BoundingBox2D();

    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeOffset = new Vector2();
    this.smoothSpeed = 5.0; // Lerp factor

    this.updateProjection();
  }

  updateProjection() {
    const hw = (this.viewportWidth / 2) / this.zoom;
    const hh = (this.viewportHeight / 2) / this.zoom;
    this.projectionMatrix.makeOrthographic(-hw, hw, hh, -hh, -1000, 1000);
  }

  setZoom(zoom) {
    this.zoom = Math.max(0.2, Math.min(5.0, zoom));
    this.updateProjection();
  }

  shake(intensity = 10, duration = 0.3) {
    this.shakeIntensity = intensity;
    this.shakeDuration = duration;
  }

  update(dt) {
    // Follow target smoothly
    if (this.target) {
      const targetPos = this.target.position || this.target;
      this.position.lerp(targetPos, Math.min(1.0, this.smoothSpeed * dt));
    }

    // Process screen shake
    if (this.shakeDuration > 0) {
      this.shakeDuration -= dt;
      const factor = this.shakeDuration > 0 ? this.shakeIntensity : 0;
      this.shakeOffset.x = (Math.random() * 2 - 1) * factor;
      this.shakeOffset.y = (Math.random() * 2 - 1) * factor;
    } else {
      this.shakeOffset.set(0, 0);
    }

    const effectivePos = this.position.clone().add(this.shakeOffset);

    // Update view matrix
    this.viewMatrix.identity();
    this.viewMatrix.makeTranslation(-effectivePos.x, -effectivePos.y, 0);

    // Update view bounds for frustum culling
    const hw = (this.viewportWidth / 2) / this.zoom;
    const hh = (this.viewportHeight / 2) / this.zoom;
    this.viewBounds.set(
      effectivePos.x - hw,
      effectivePos.y - hh,
      effectivePos.x + hw,
      effectivePos.y + hh
    );
  }

  screenToWorld(screenX, screenY, out = new Vector2()) {
    const nx = (screenX / this.viewportWidth) * 2 - 1;
    const ny = -(screenY / this.viewportHeight) * 2 + 1;

    const hw = (this.viewportWidth / 2) / this.zoom;
    const hh = (this.viewportHeight / 2) / this.zoom;

    out.x = this.position.x + nx * hw;
    out.y = this.position.y - ny * hh;
    return out;
  }

  worldToScreen(worldX, worldY, out = new Vector2()) {
    const hw = (this.viewportWidth / 2) / this.zoom;
    const hh = (this.viewportHeight / 2) / this.zoom;

    const relX = worldX - this.position.x;
    const relY = worldY - this.position.y;

    out.x = (relX / hw + 1) * 0.5 * this.viewportWidth;
    out.y = (1 - relY / hh) * 0.5 * this.viewportHeight;
    return out;
  }

  isVisible(box) {
    return this.viewBounds.intersectsBox(box);
  }
}
