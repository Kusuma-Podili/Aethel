export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(event, handler, priority = 0) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    const handlers = this.listeners.get(event);
    handlers.push({ handler, priority });
    handlers.sort((a, b) => b.priority - a.priority);
    return () => this.off(event, handler);
  }

  off(event, handler) {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    const idx = handlers.findIndex(h => h.handler === handler);
    if (idx !== -1) {
      handlers.splice(idx, 1);
    }
  }

  emit(event, data) {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      handlers[i].handler(data);
    }
  }

  clear() {
    this.listeners.clear();
  }
}

export const GlobalEvents = new EventBus();
