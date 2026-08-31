export class Component {
  constructor() {
    this._typeId = -1;
  }

  static get typeId() {
    if (this._assignedTypeId === undefined) {
      this._assignedTypeId = ComponentRegistry.register(this);
    }
    return this._assignedTypeId;
  }
}

export class ComponentRegistry {
  static _counter = 0;
  static _components = new Map();
  static _names = new Map();

  static register(componentClass) {
    const id = this._counter++;
    this._components.set(id, componentClass);
    this._names.set(componentClass.name, id);
    return id;
  }

  static getId(componentClassOrName) {
    if (typeof componentClassOrName === 'string') {
      return this._names.get(componentClassOrName);
    }
    return componentClassOrName.typeId;
  }

  static getClass(id) {
    return this._components.get(id);
  }
}
