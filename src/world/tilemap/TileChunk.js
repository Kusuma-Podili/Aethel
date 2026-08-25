export const CHUNK_SIZE = 16;
export const TILE_PIXEL_SIZE = 32;

export class TileChunk {
  constructor(chunkX, chunkY) {
    this.chunkX = chunkX;
    this.chunkY = chunkY;
    this.worldX = chunkX * CHUNK_SIZE * TILE_PIXEL_SIZE;
    this.worldY = chunkY * CHUNK_SIZE * TILE_PIXEL_SIZE;

    this.groundLayer = new Uint16Array(CHUNK_SIZE * CHUNK_SIZE);
    this.objectLayer = new Uint16Array(CHUNK_SIZE * CHUNK_SIZE);
    this.collisionMap = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE); // 1 = solid
    this.dirty = true;
  }

  getTile(localX, localY, layer = 0) {
    const idx = localY * CHUNK_SIZE + localX;
    return layer === 0 ? this.groundLayer[idx] : this.objectLayer[idx];
  }

  setTile(localX, localY, tileId, layer = 0, solid = false) {
    const idx = localY * CHUNK_SIZE + localX;
    if (layer === 0) {
      this.groundLayer[idx] = tileId;
    } else {
      this.objectLayer[idx] = tileId;
    }
    if (solid) {
      this.collisionMap[idx] = 1;
    }
    this.dirty = true;
  }

  isSolid(localX, localY) {
    if (localX < 0 || localX >= CHUNK_SIZE || localY < 0 || localY >= CHUNK_SIZE) return false;
    return this.collisionMap[localY * CHUNK_SIZE + localX] === 1;
  }
}

export class AutoTilingEngine {
  /**
   * 4-bit auto-tiling mask (North=1, East=2, South=4, West=8)
   */
  static getTileBitmask(getTileFn, x, y, matchTileId) {
    let mask = 0;
    if (getTileFn(x, y - 1) === matchTileId) mask |= 1; // N
    if (getTileFn(x + 1, y) === matchTileId) mask |= 2; // E
    if (getTileFn(x, y + 1) === matchTileId) mask |= 4; // S
    if (getTileFn(x - 1, y) === matchTileId) mask |= 8; // W
    return mask;
  }
}
