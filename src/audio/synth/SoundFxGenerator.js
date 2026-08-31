import { GlobalAudio } from './WebAudioContext.js';

export class SoundFxGenerator {
  static playSwing() {
    if (!GlobalAudio.ctx || GlobalAudio.isMuted) return;
    const ctx = GlobalAudio.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(GlobalAudio.sfxGain);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  }

  static playFireball() {
    if (!GlobalAudio.ctx || GlobalAudio.isMuted) return;
    const ctx = GlobalAudio.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(GlobalAudio.sfxGain);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  }

  static playExplosion() {
    if (!GlobalAudio.ctx || GlobalAudio.isMuted) return;
    const ctx = GlobalAudio.ctx;

    // White noise buffer for explosion
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.4);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.6, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(GlobalAudio.sfxGain);

    noise.start(ctx.currentTime);
  }

  static playLevelUp() {
    if (!GlobalAudio.ctx || GlobalAudio.isMuted) return;
    const ctx = GlobalAudio.ctx;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.1;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

      osc.connect(gain);
      gain.connect(GlobalAudio.sfxGain);

      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }
}
