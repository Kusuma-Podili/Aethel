export class BinaryBuffer {
  constructor(initialSize = 1024) {
    this.buffer = new ArrayBuffer(initialSize);
    this.view = new DataView(this.buffer);
    this.offset = 0;
  }

  _ensureCapacity(bytesNeeded) {
    if (this.offset + bytesNeeded > this.buffer.byteLength) {
      const newBuffer = new ArrayBuffer(Math.max(this.buffer.byteLength * 2, this.offset + bytesNeeded));
      new Uint8Array(newBuffer).set(new Uint8Array(this.buffer));
      this.buffer = newBuffer;
      this.view = new DataView(this.buffer);
    }
  }

  writeUint8(val) {
    this._ensureCapacity(1);
    this.view.setUint8(this.offset, val);
    this.offset += 1;
  }

  writeUint16(val) {
    this._ensureCapacity(2);
    this.view.setUint16(this.offset, val, true);
    this.offset += 2;
  }

  writeUint32(val) {
    this._ensureCapacity(4);
    this.view.setUint32(this.offset, val, true);
    this.offset += 4;
  }

  writeFloat32(val) {
    this._ensureCapacity(4);
    this.view.setFloat32(this.offset, val, true);
    this.offset += 4;
  }

  writeString(str) {
    const encoder = new TextEncoder();
    const encoded = encoder.encode(str);
    this.writeUint16(encoded.length);
    this._ensureCapacity(encoded.length);
    new Uint8Array(this.buffer).set(encoded, this.offset);
    this.offset += encoded.length;
  }

  getUint8Array() {
    return new Uint8Array(this.buffer, 0, this.offset);
  }
}

export class BinaryReader {
  constructor(arrayBuffer) {
    this.buffer = arrayBuffer;
    this.view = new DataView(this.buffer);
    this.offset = 0;
  }

  readUint8() {
    const val = this.view.getUint8(this.offset);
    this.offset += 1;
    return val;
  }

  readUint16() {
    const val = this.view.getUint16(this.offset, true);
    this.offset += 2;
    return val;
  }

  readUint32() {
    const val = this.view.getUint32(this.offset, true);
    this.offset += 4;
    return val;
  }

  readFloat32() {
    const val = this.view.getFloat32(this.offset, true);
    this.offset += 4;
    return val;
  }

  readString() {
    const len = this.readUint16();
    const bytes = new Uint8Array(this.buffer, this.offset, len);
    this.offset += len;
    return new TextDecoder().decode(bytes);
  }
}
