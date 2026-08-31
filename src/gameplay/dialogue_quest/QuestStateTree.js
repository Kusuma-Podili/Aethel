export const QuestStatus = {
  NOT_STARTED: 0,
  ACTIVE: 1,
  COMPLETED: 2,
  FAILED: 3
};

export const ObjectiveType = {
  KILL_MONSTER: 0,
  COLLECT_ITEM: 1,
  EXPLORE_ZONE: 2,
  TALK_NPC: 3
};

export class QuestObjective {
  constructor(id, description, type, targetId, requiredCount = 1) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.targetId = targetId; // monsterId, itemId, zoneId, npcId
    this.requiredCount = requiredCount;
    this.currentCount = 0;
    this.completed = false;
  }

  progress(amount = 1) {
    this.currentCount = Math.min(this.requiredCount, this.currentCount + amount);
    if (this.currentCount >= this.requiredCount) {
      this.completed = true;
    }
    return this.completed;
  }
}

export class Quest {
  constructor(options = {}) {
    this.id = options.id || 'quest_01';
    this.title = options.title || 'Untitled Quest';
    this.description = options.description || '';
    this.status = QuestStatus.NOT_STARTED;
    this.objectives = options.objectives || [];
    this.rewardExp = options.rewardExp || 100;
    this.rewardGold = options.rewardGold || 50;
    this.rewardItems = options.rewardItems || [];
  }

  addObjective(obj) {
    this.objectives.push(obj);
    return this;
  }

  isAllObjectivesComplete() {
    for (let i = 0; i < this.objectives.length; i++) {
      if (!this.objectives[i].completed) return false;
    }
    return true;
  }

  start() {
    this.status = QuestStatus.ACTIVE;
  }

  complete(player) {
    if (this.status !== QuestStatus.ACTIVE || !this.isAllObjectivesComplete()) return false;
    this.status = QuestStatus.COMPLETED;

    if (player) {
      player.addExp(this.rewardExp);
      player.addGold(this.rewardGold);
      for (const item of this.rewardItems) {
        player.inventory.addItem(item);
      }
    }
    return true;
  }
}

export class JournalSystem {
  constructor() {
    this.quests = new Map(); // id -> Quest
  }

  registerQuest(quest) {
    this.quests.set(quest.id, quest);
  }

  getQuest(id) {
    return this.quests.get(id);
  }

  getActiveQuests() {
    return Array.from(this.quests.values()).filter(q => q.status === QuestStatus.ACTIVE);
  }

  getCompletedQuests() {
    return Array.from(this.quests.values()).filter(q => q.status === QuestStatus.COMPLETED);
  }

  notifyKill(monsterId) {
    for (const q of this.getActiveQuests()) {
      for (const obj of q.objectives) {
        if (obj.type === ObjectiveType.KILL_MONSTER && obj.targetId === monsterId) {
          obj.progress(1);
        }
      }
    }
  }

  notifyItemCollected(itemId, count = 1) {
    for (const q of this.getActiveQuests()) {
      for (const obj of q.objectives) {
        if (obj.type === ObjectiveType.COLLECT_ITEM && obj.targetId === itemId) {
          obj.progress(count);
        }
      }
    }
  }
}
