export class LevelEditor {
  constructor(worldMap, gameCanvas) {
    this.worldMap = worldMap;
    this.canvas = gameCanvas;
    this.enabled = false;
    this.currentTileId = 0; // 0 = Floor, 1 = Wall, 2 = Water, 3 = Lava
    this.brushSize = 1;
    this.isPainting = false;

    this.palette = [
      { id: 0, name: 'Floor / Grass', color: '#27ae60' },
      { id: 1, name: 'Stone Wall', color: '#7f8c8d' },
      { id: 2, name: 'Water', color: '#2980b9' },
      { id: 3, name: 'Lava', color: '#c0392b' },
      { id: 4, name: 'Monster Spawn', color: '#8e44ad' }
    ];

    this._initEditorUI();
    this._bindEvents();
  }

  _initEditorUI() {
    this.panel = document.createElement('div');
    this.panel.id = 'editor-panel';
    this.panel.className = 'modal-hidden';
    this.panel.innerHTML = `
      <div class="editor-header">🛠️ Level Editor</div>
      <div class="editor-tools">
        <label>Tile Palette:</label>
        <div class="palette-options" id="palette-options"></div>
        <div class="editor-actions">
          <button id="btn-export-map" class="game-btn btn-sm">Export JSON</button>
          <button id="btn-import-map" class="game-btn btn-sm">Import JSON</button>
          <button id="btn-clear-map" class="game-btn btn-sm">Clear Grid</button>
        </div>
      </div>
    `;

    document.getElementById('ui-layer')?.appendChild(this.panel);

    const paletteContainer = this.panel.querySelector('#palette-options');
    this.palette.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn game-btn btn-sm';
      btn.textContent = p.name;
      btn.style.borderColor = p.color;
      btn.addEventListener('click', () => {
        this.currentTileId = p.id;
      });
      paletteContainer.appendChild(btn);
    });

    this.panel.querySelector('#btn-export-map').addEventListener('click', () => this.exportMapJSON());
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.panel.classList.remove('modal-hidden');
    } else {
      this.panel.classList.add('modal-hidden');
    }
  }

  _bindEvents() {
    this.canvas.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      this.isPainting = true;
      this._paintAt(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      this.isPainting = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (!this.enabled || !this.isPainting) return;
      this._paintAt(e.clientX, e.clientY);
    });
  }

  _paintAt(clientX, clientY) {
    if (!this.worldMap) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = Math.floor((clientX - rect.left) / 32);
    const y = Math.floor((clientY - rect.top) / 32);

    if (x >= 0 && x < this.worldMap.width && y >= 0 && y < this.worldMap.height) {
      this.worldMap.tiles[y * this.worldMap.width + x] = this.currentTileId;
    }
  }

  exportMapJSON() {
    if (!this.worldMap) return;
    const data = {
      width: this.worldMap.width,
      height: this.worldMap.height,
      tiles: Array.from(this.worldMap.tiles)
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aethelgard_map_${Date.now()}.json`;
    a.click();
  }
}
