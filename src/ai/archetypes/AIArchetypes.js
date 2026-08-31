import { BTSelector, BTSequence, BTAction, BTCondition, BTStatus } from '../behavior_tree/BehaviorTree.js';
import { Vector2 } from '../../core/math/Vector2.js';

export class AIArchetypes {
  /**
   * Melee Aggressive AI: Patrol -> Detect Player -> Pathfind to Player -> Attack within Melee Range
   */
  static createMeleeTree() {
    const root = new BTSelector();

    // Sequence 1: Attack if within melee range (<= 40px)
    const attackSeq = new BTSequence();
    attackSeq.children.push(new BTCondition(bb => {
      const target = bb.get('target');
      const self = bb.get('self');
      if (!target || !self) return false;
      return Vector2.distance(self.position, target.position) <= 40;
    }));
    attackSeq.children.push(new BTAction(bb => {
      const self = bb.get('self');
      const target = bb.get('target');
      self.attack(target);
      return BTStatus.SUCCESS;
    }));

    // Sequence 2: Chase target if detected (< 300px)
    const chaseSeq = new BTSequence();
    chaseSeq.children.push(new BTCondition(bb => {
      const target = bb.get('target');
      const self = bb.get('self');
      if (!target || !self) return false;
      return Vector2.distance(self.position, target.position) <= 300;
    }));
    chaseSeq.children.push(new BTAction(bb => {
      const self = bb.get('self');
      const target = bb.get('target');
      self.moveTowards(target.position);
      return BTStatus.RUNNING;
    }));

    // Sequence 3: Idle / Wander
    const wanderAction = new BTAction(bb => {
      const self = bb.get('self');
      self.wander();
      return BTStatus.SUCCESS;
    });

    root.children.push(attackSeq);
    root.children.push(chaseSeq);
    root.children.push(wanderAction);

    return root;
  }
}
