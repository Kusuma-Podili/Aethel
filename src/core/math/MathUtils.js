export const MathUtils = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  TWO_PI: Math.PI * 2,
  HALF_PI: Math.PI * 0.5,

  clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  },

  lerp(a, b, t) {
    return a + (b - a) * t;
  },

  smoothstep(min, max, x) {
    const t = MathUtils.clamp((x - min) / (max - min), 0, 1);
    return t * t * (3 - 2 * t);
  },

  smootherstep(min, max, x) {
    const t = MathUtils.clamp((x - min) / (max - min), 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
  },

  randFloat(min, max) {
    return min + Math.random() * (max - min);
  },

  randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  },

  randChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  seededRandom(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }
};
