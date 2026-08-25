export const BTStatus = {
  SUCCESS: 0,
  FAILURE: 1,
  RUNNING: 2
};

export class Blackboard {
  constructor() {
    this.data = new Map();
  }
  set(key, val) { this.data.set(key, val); }
  get(key) { return this.data.get(key); }
  has(key) { return this.data.has(key); }
  delete(key) { this.data.delete(key); }
  clear() { this.data.clear(); }
}

export class BTNode {
  constructor() {
    this.children = [];
  }
  tick(bb) {
    return BTStatus.SUCCESS;
  }
}

export class BTSelector extends BTNode {
  tick(bb) {
    for (let i = 0; i < this.children.length; i++) {
      const status = this.children[i].tick(bb);
      if (status !== BTStatus.FAILURE) {
        return status;
      }
    }
    return BTStatus.FAILURE;
  }
}

export class BTSequence extends BTNode {
  tick(bb) {
    for (let i = 0; i < this.children.length; i++) {
      const status = this.children[i].tick(bb);
      if (status !== BTStatus.SUCCESS) {
        return status;
      }
    }
    return BTStatus.SUCCESS;
  }
}

export class BTInverter extends BTNode {
  constructor(child) {
    super();
    this.children = [child];
  }
  tick(bb) {
    const status = this.children[0].tick(bb);
    if (status === BTStatus.SUCCESS) return BTStatus.FAILURE;
    if (status === BTStatus.FAILURE) return BTStatus.SUCCESS;
    return BTStatus.RUNNING;
  }
}

export class BTAction extends BTNode {
  constructor(actionFn) {
    super();
    this.actionFn = actionFn;
  }
  tick(bb) {
    return this.actionFn(bb);
  }
}

export class BTCondition extends BTNode {
  constructor(conditionFn) {
    super();
    this.conditionFn = conditionFn;
  }
  tick(bb) {
    return this.conditionFn(bb) ? BTStatus.SUCCESS : BTStatus.FAILURE;
  }
}
