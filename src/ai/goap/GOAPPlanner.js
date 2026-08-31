export class GOAPAction {
  constructor(name, cost = 1) {
    this.name = name;
    this.cost = cost;
    this.preconditions = new Map();
    this.effects = new Map();
  }

  addPrecondition(key, val) {
    this.preconditions.set(key, val);
    return this;
  }

  addEffect(key, val) {
    this.effects.set(key, val);
    return this;
  }

  checkPreconditions(state) {
    for (const [k, v] of this.preconditions) {
      if (state.get(k) !== v) return false;
    }
    return true;
  }

  applyEffects(state) {
    const nextState = new Map(state);
    for (const [k, v] of this.effects) {
      nextState.set(k, v);
    }
    return nextState;
  }
}

export class GOAPPlanner {
  constructor(actions = []) {
    this.actions = actions;
  }

  plan(currentState, goalState) {
    const rootNode = {
      state: new Map(currentState),
      action: null,
      parent: null,
      cost: 0
    };

    const queue = [rootNode];
    let bestPlan = null;
    let lowestCost = Infinity;

    while (queue.length > 0) {
      const curr = queue.shift();

      if (this._satisfiesGoal(curr.state, goalState)) {
        if (curr.cost < lowestCost) {
          lowestCost = curr.cost;
          bestPlan = this._reconstructPlan(curr);
        }
        continue;
      }

      for (let i = 0; i < this.actions.length; i++) {
        const act = this.actions[i];
        if (act.checkPreconditions(curr.state)) {
          const nextState = act.applyEffects(curr.state);
          queue.push({
            state: nextState,
            action: act,
            parent: curr,
            cost: curr.cost + act.cost
          });
        }
      }
    }

    return bestPlan || [];
  }

  _satisfiesGoal(state, goal) {
    for (const [k, v] of goal) {
      if (state.get(k) !== v) return false;
    }
    return true;
  }

  _reconstructPlan(node) {
    const plan = [];
    let curr = node;
    while (curr && curr.action) {
      plan.push(curr.action);
      curr = curr.parent;
    }
    plan.reverse();
    return plan;
  }
}
