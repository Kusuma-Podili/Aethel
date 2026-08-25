import { GameEngine } from './game/GameEngine.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log('⚔️ Bootstrapping Chronicles of Aethelgard Game Engine...');
  const canvas = document.getElementById('game-canvas');
  if (canvas) {
    const engine = new GameEngine(canvas);
    engine.init();
    window.__AETHELGARD_ENGINE__ = engine;
    console.log('⚔️ Game Engine initialized and running at 60 FPS!');
  }
});
