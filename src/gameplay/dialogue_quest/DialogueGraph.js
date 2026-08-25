export class DialogueOption {
  constructor(text, nextNodeId, conditionFn = null, onSelectFn = null) {
    this.text = text;
    this.nextNodeId = nextNodeId;
    this.conditionFn = conditionFn;
    this.onSelectFn = onSelectFn;
  }

  isAvailable(playerState) {
    return this.conditionFn ? this.conditionFn(playerState) : true;
  }
}

export class DialogueNode {
  constructor(id, speaker, text, options = []) {
    this.id = id;
    this.speaker = speaker;
    this.text = text;
    this.options = options;
  }

  addOption(text, nextNodeId, conditionFn = null, onSelectFn = null) {
    this.options.push(new DialogueOption(text, nextNodeId, conditionFn, onSelectFn));
    return this;
  }
}

export class DialogueGraph {
  constructor() {
    this.nodes = new Map();
    this.startNodeId = null;
  }

  addNode(node) {
    this.nodes.set(node.id, node);
    if (!this.startNodeId) {
      this.startNodeId = node.id;
    }
    return this;
  }

  getNode(nodeId) {
    return this.nodes.get(nodeId);
  }
}
