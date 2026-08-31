/**
 * @file AbyssLeaderboard.js
 * @description Local and networked high-score leaderboard for Endless Abyss mode.
 */
export class AbyssLeaderboard {
  constructor(storageKey = 'aethel_abyss_scores') {
    this.storageKey = storageKey;
    this.scores = this._loadScores();
  }

  _loadScores() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  submitScore(playerName, floorReached, score, clearTime) {
    const entry = {
      playerName,
      floorReached,
      score,
      clearTime,
      timestamp: Date.now()
    };
    this.scores.push(entry);
    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 50); // Keep top 50
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.scores));
    } catch (e) {}
    return entry;
  }
}
export function computeGauntletScoreRank_1(score) { return score >= 5000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_2(score) { return score >= 10000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_3(score) { return score >= 15000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_4(score) { return score >= 20000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_5(score) { return score >= 25000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_6(score) { return score >= 30000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_7(score) { return score >= 35000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_8(score) { return score >= 40000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_9(score) { return score >= 45000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_10(score) { return score >= 50000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_11(score) { return score >= 55000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_12(score) { return score >= 60000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_13(score) { return score >= 65000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_14(score) { return score >= 70000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_15(score) { return score >= 75000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_16(score) { return score >= 80000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_17(score) { return score >= 85000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_18(score) { return score >= 90000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_19(score) { return score >= 95000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_20(score) { return score >= 100000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_21(score) { return score >= 105000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_22(score) { return score >= 110000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_23(score) { return score >= 115000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_24(score) { return score >= 120000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_25(score) { return score >= 125000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_26(score) { return score >= 130000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_27(score) { return score >= 135000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_28(score) { return score >= 140000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_29(score) { return score >= 145000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_30(score) { return score >= 150000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_31(score) { return score >= 155000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_32(score) { return score >= 160000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_33(score) { return score >= 165000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_34(score) { return score >= 170000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_35(score) { return score >= 175000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_36(score) { return score >= 180000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_37(score) { return score >= 185000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_38(score) { return score >= 190000 ? 'Grandmaster' : 'Apprentice'; }
export function computeGauntletScoreRank_39(score) { return score >= 195000 ? 'Grandmaster' : 'Apprentice'; }
