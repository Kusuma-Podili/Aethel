import { Vector2 } from '../../core/math/Vector2.js';

export class ClientPrediction {
  constructor(player) {
    this.player = player;
    this.pendingInputs = [];
    this.sequenceNumber = 0;
  }

  addInput(inputVector, dt) {
    this.sequenceNumber++;
    const inputPayload = {
      sequenceNumber: this.sequenceNumber,
      inputX: inputVector.x,
      inputY: inputVector.y,
      dt: dt
    };

    this.pendingInputs.push(inputPayload);

    // Apply prediction immediately locally
    const speed = this.player.stats ? this.player.stats.getValue('moveSpeed') : 200;
    this.player.position.x += inputVector.x * speed * dt;
    this.player.position.y += inputVector.y * speed * dt;

    return inputPayload;
  }

  reconcile(serverState) {
    // serverState = { lastAckSequence: 124, position: { x: 100, y: 150 } }
    this.player.position.set(serverState.position.x, serverState.position.y);

    // Remove acknowledged inputs
    this.pendingInputs = this.pendingInputs.filter(i => i.sequenceNumber > serverState.lastAckSequence);

    // Replay remaining unacknowledged inputs on top of authoritative server state
    const speed = this.player.stats ? this.player.stats.getValue('moveSpeed') : 200;
    for (let i = 0; i < this.pendingInputs.length; i++) {
      const inp = this.pendingInputs[i];
      this.player.position.x += inp.inputX * speed * inp.dt;
      this.player.position.y += inp.inputY * speed * inp.dt;
    }
  }
}
