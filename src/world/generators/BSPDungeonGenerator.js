export class BSPRoom {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.centerX = Math.floor(x + width / 2);
    this.centerY = Math.floor(y + height / 2);
  }
}

export class BSPNode {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = null;
    this.right = null;
    this.room = null;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }

  split(minSize = 8) {
    if (!this.isLeaf()) return false;

    const splitH = Math.random() > 0.5;
    if (splitH) {
      if (this.height < minSize * 2) return false;
      const splitPos = Math.floor(minSize + Math.random() * (this.height - minSize * 2));
      this.left = new BSPNode(this.x, this.y, this.width, splitPos);
      this.right = new BSPNode(this.x, this.y + splitPos, this.width, this.height - splitPos);
    } else {
      if (this.width < minSize * 2) return false;
      const splitPos = Math.floor(minSize + Math.random() * (this.width - minSize * 2));
      this.left = new BSPNode(this.x, this.y, splitPos, this.height);
      this.right = new BSPNode(this.x + splitPos, this.y, this.width - splitPos, this.height);
    }
    return true;
  }

  createRooms(minRoomSize = 6, padding = 1) {
    if (!this.isLeaf()) {
      if (this.left) this.left.createRooms(minRoomSize, padding);
      if (this.right) this.right.createRooms(minRoomSize, padding);
      return;
    }

    const roomW = Math.max(minRoomSize, Math.floor(this.width - padding * 2 - Math.random() * 2));
    const roomH = Math.max(minRoomSize, Math.floor(this.height - padding * 2 - Math.random() * 2));
    const roomX = this.x + padding;
    const roomY = this.y + padding;

    this.room = new BSPRoom(roomX, roomY, roomW, roomH);
  }
}

export class BSPDungeonGenerator {
  constructor(width = 64, height = 64) {
    this.width = width;
    this.height = height;
    this.tiles = new Uint8Array(width * height).fill(1); // 1 = Wall, 0 = Floor
    this.rooms = [];
    this.corridors = [];
  }

  generate(depth = 4, minSize = 10) {
    const root = new BSPNode(1, 1, this.width - 2, this.height - 2);
    this._splitRecursive(root, depth, minSize);
    root.createRooms(6, 2);

    this.rooms = [];
    this._collectRooms(root, this.rooms);

    // Carve rooms
    for (const room of this.rooms) {
      for (let y = room.y; y < room.y + room.height; y++) {
        for (let x = room.x; x < room.x + room.width; x++) {
          this.tiles[y * this.width + x] = 0;
        }
      }
    }

    // Connect rooms with corridors
    this._connectNodes(root);

    return {
      width: this.width,
      height: this.height,
      tiles: this.tiles,
      rooms: this.rooms
    };
  }

  _splitRecursive(node, depth, minSize) {
    if (depth <= 0) return;
    if (node.split(minSize)) {
      this._splitRecursive(node.left, depth - 1, minSize);
      this._splitRecursive(node.right, depth - 1, minSize);
    }
  }

  _collectRooms(node, list) {
    if (node.isLeaf()) {
      if (node.room) list.push(node.room);
      return;
    }
    if (node.left) this._collectRooms(node.left, list);
    if (node.right) this._collectRooms(node.right, list);
  }

  _connectNodes(node) {
    if (node.isLeaf() || !node.left || !node.right) return;

    const leftRoom = this._getAnyRoom(node.left);
    const rightRoom = this._getAnyRoom(node.right);

    if (leftRoom && rightRoom) {
      this._carveCorridor(leftRoom.centerX, leftRoom.centerY, rightRoom.centerX, rightRoom.centerY);
    }

    this._connectNodes(node.left);
    this._connectNodes(node.right);
  }

  _getAnyRoom(node) {
    if (node.room) return node.room;
    if (node.left) {
      const r = this._getAnyRoom(node.left);
      if (r) return r;
    }
    if (node.right) return this._getAnyRoom(node.right);
    return null;
  }

  _carveCorridor(x1, y1, x2, y2) {
    let cx = x1;
    let cy = y1;

    while (cx !== x2) {
      this.tiles[cy * this.width + cx] = 0;
      cx += cx < x2 ? 1 : -1;
    }
    while (cy !== y2) {
      this.tiles[cy * this.width + cx] = 0;
      cy += cy < y2 ? 1 : -1;
    }
  }
}
