export class ShaderProgram {
  constructor(gl, vertexSource, fragmentSource) {
    this.gl = gl;
    this.program = this._compileProgram(vertexSource, fragmentSource);
    this.uniformLocations = new Map();
    this.attribLocations = new Map();
  }

  use() {
    this.gl.useProgram(this.program);
  }

  getUniformLocation(name) {
    if (!this.uniformLocations.has(name)) {
      const loc = this.gl.getUniformLocation(this.program, name);
      this.uniformLocations.set(name, loc);
    }
    return this.uniformLocations.get(name);
  }

  getAttribLocation(name) {
    if (!this.attribLocations.has(name)) {
      const loc = this.gl.getAttribLocation(this.program, name);
      this.attribLocations.set(name, loc);
    }
    return this.attribLocations.get(name);
  }

  setMat4(name, mat4) {
    this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, mat4.elements || mat4);
  }

  setVec2(name, x, y) {
    this.gl.uniform2f(this.getUniformLocation(name), x, y);
  }

  setVec3(name, x, y, z) {
    this.gl.uniform3f(this.getUniformLocation(name), x, y, z);
  }

  setVec4(name, x, y, z, w) {
    this.gl.uniform4f(this.getUniformLocation(name), x, y, z, w);
  }

  setFloat(name, val) {
    this.gl.uniform1f(this.getUniformLocation(name), val);
  }

  setInt(name, val) {
    this.gl.uniform1i(this.getUniformLocation(name), val);
  }

  _compileShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source.trim());
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader compile error (${type === gl.VERTEX_SHADER ? 'VERTEX' : 'FRAGMENT'}): ${info}`);
    }
    return shader;
  }

  _compileProgram(vSource, fSource) {
    const gl = this.gl;
    const vShader = this._compileShader(gl.VERTEX_SHADER, vSource);
    const fShader = this._compileShader(gl.FRAGMENT_SHADER, fSource);

    const prog = gl.createProgram();
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(prog);
      gl.deleteProgram(prog);
      throw new Error(`Program link error: ${info}`);
    }

    gl.deleteShader(vShader);
    gl.deleteShader(fShader);
    return prog;
  }
}
