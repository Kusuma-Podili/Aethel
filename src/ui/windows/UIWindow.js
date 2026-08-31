export class UIWindow {
  constructor(id, title, width = 360, height = 450) {
    this.id = id;
    this.title = title;
    this.width = width;
    this.height = height;
    this.visible = false;
    this.element = null;

    this._buildDOM();
  }

  _buildDOM() {
    this.element = document.createElement('div');
    this.element.id = `window-${this.id}`;
    this.element.className = 'game-window modal-hidden';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.innerHTML = `
      <div class="window-header">
        <span class="window-title">${this.title}</span>
        <button class="window-close-btn">&times;</button>
      </div>
      <div class="window-body" id="window-body-${this.id}"></div>
    `;

    this.element.querySelector('.window-close-btn').addEventListener('click', () => {
      this.hide();
    });

    document.getElementById('window-container')?.appendChild(this.element);
  }

  toggle() {
    if (this.visible) this.hide();
    else this.show();
  }

  show() {
    this.visible = true;
    this.element.classList.remove('modal-hidden');
    this.renderContent();
  }

  hide() {
    this.visible = false;
    this.element.classList.add('modal-hidden');
  }

  renderContent() {
    // Override in derived classes
  }
}
