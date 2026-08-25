export class SpriteBatchRenderer {
  constructor(gl, maxSprites = 4096) {
    this.gl = gl;
    this.maxSprites = maxSprites;
    this.numSprites = 0;

    // 6 vertices per sprite (2 triangles), 8 floats per vertex: [x, y, u, v, r, g, b, a]
    this.floatsPerVertex = 8;
    this.vertexStride = this.floatsPerVertex * 4; // bytes
    this.vertices = new Float32Array(this.maxSprites * 6 * this.floatsPerVertex);

    this.vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices.byteLength, gl.DYNAMIC_DRAW);

    this.currentTexture = null;
  }

  begin(shader) {
    this.shader = shader;
    this.numSprites = 0;
    this.shader.use();
  }

  draw(texture, x, y, width, height, u0 = 0, v0 = 0, u1 = 1, v1 = 1, r = 1, g = 1, b = 1, a = 1) {
    if (this.currentTexture && this.currentTexture !== texture) {
      this.flush();
    }
    this.currentTexture = texture;

    if (this.numSprites >= this.maxSprites) {
      this.flush();
    }

    const idx = this.numSprites * 6 * this.floatsPerVertex;
    const x0 = x, y0 = y;
    const x1 = x + width, y1 = y + height;

    // Triangle 1 (Top-left, Top-right, Bottom-left)
    this._setVertex(idx + 0,  x0, y0, u0, v0, r, g, b, a);
    this._setVertex(idx + 8,  x1, y0, u1, v0, r, g, b, a);
    this._setVertex(idx + 16, x0, y1, u0, v1, r, g, b, a);

    // Triangle 2 (Top-right, Bottom-right, Bottom-left)
    this._setVertex(idx + 24, x1, y0, u1, v0, r, g, b, a);
    this._setVertex(idx + 32, x1, y1, u1, v1, r, g, b, a);
    this._setVertex(idx + 40, x0, y1, u0, v1, r, g, b, a);

    this.numSprites++;
  }

  _setVertex(offset, x, y, u, v, r, g, b, a) {
    const v = this.vertices;
    v[offset + 0] = x;
    v[offset + 1] = y;
    v[offset + 2] = u;
    v[offset + 3] = v;
    v[offset + 4] = r;
    v[offset + 5] = g;
    v[offset + 6] = b;
    v[offset + 7] = a;
  }

  flush() {
    if (this.numSprites === 0) return;

    const gl = this.gl;
    if (this.currentTexture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.currentTexture);
      this.shader.setInt('u_texture', 0);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices.subarray(0, this.numSprites * 6 * this.floatsPerVertex));

    // Configure vertex attributes
    // 0: position (vec2), 1: texCoord (vec2), 2: color (vec4)
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, this.vertexStride, 0);

    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, this.vertexStride, 2 * 4);

    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, this.vertexStride, 4 * 4);

    gl.drawArrays(gl.TRIANGLES, 0, this.numSprites * 6);

    this.numSprites = 0;
  }

  end() {
    this.flush();
  }
}
