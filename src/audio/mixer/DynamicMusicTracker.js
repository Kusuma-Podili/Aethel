import { GlobalAudio } from '../synth/WebAudioContext.js';

export class DynamicMusicTracker {
  constructor() {
    this.isPlaying = false;
    this.timerId = null;
    this.chordIndex = 0;

    // Ambient mysterious progression (Am - F - C - G)
    this.chords = [
      [220.00, 261.63, 329.63], // Am
      [174.61, 220.00, 261.63], // F
      [130.81, 164.81, 196.00], // C
      [196.00, 246.94, 293.66]  // G
    ];
  }

  start() {
    if (this.isPlaying || !GlobalAudio.ctx) return;
    this.isPlaying = true;
    this._playNextChord();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  _playNextChord() {
    if (!this.isPlaying || GlobalAudio.isMuted) return;

    const ctx = GlobalAudio.ctx;
    const chord = this.chords[this.chordIndex];
    this.chordIndex = (this.chordIndex + 1) % this.chords.length;

    chord.forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Slow ambient swell
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.0);

      osc.connect(gain);
      gain.connect(GlobalAudio.musicGain);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 4.0);
    });

    this.timerId = setTimeout(() => this._playNextChord(), 3500);
  }
}
