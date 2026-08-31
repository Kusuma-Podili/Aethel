/**
 * @file BitSet.js
 * @description Fast bitset representation for component masks and archetype matching.
 */

export class BitSet {
  constructor(size = 128) {
    this.words = new Uint32Array(Math.ceil(size / 32));
  }

  set(bitIndex) {
    const wordIndex = bitIndex >> 5;
    if (wordIndex >= this.words.length) {
      this._grow(wordIndex + 1);
    }
    this.words[wordIndex] |= (1 << (bitIndex & 31));
    return this;
  }

  unset(bitIndex) {
    const wordIndex = bitIndex >> 5;
    if (wordIndex < this.words.length) {
      this.words[wordIndex] &= ~(1 << (bitIndex & 31));
    }
    return this;
  }

  get(bitIndex) {
    const wordIndex = bitIndex >> 5;
    if (wordIndex >= this.words.length) return false;
    return (this.words[wordIndex] & (1 << (bitIndex & 31))) !== 0;
  }

  clear() {
    this.words.fill(0);
    return this;
  }

  copy(other) {
    if (this.words.length !== other.words.length) {
      this.words = new Uint32Array(other.words.length);
    }
    this.words.set(other.words);
    return this;
  }

  clone() {
    const bs = new BitSet(this.words.length * 32);
    bs.words.set(this.words);
    return bs;
  }

  containsAll(other) {
    const len = Math.min(this.words.length, other.words.length);
    for (let i = 0; i < len; i++) {
      if ((this.words[i] & other.words[i]) !== other.words[i]) {
        return false;
      }
    }
    // If other has words beyond this, those words must be 0
    for (let i = len; i < other.words.length; i++) {
      if (other.words[i] !== 0) return false;
    }
    return true;
  }

  containsAny(other) {
    const len = Math.min(this.words.length, other.words.length);
    for (let i = 0; i < len; i++) {
      if ((this.words[i] & other.words[i]) !== 0) {
        return true;
      }
    }
    return false;
  }

  containsNone(other) {
    return !this.containsAny(other);
  }

  equals(other) {
    const maxLen = Math.max(this.words.length, other.words.length);
    for (let i = 0; i < maxLen; i++) {
      const a = i < this.words.length ? this.words[i] : 0;
      const b = i < other.words.length ? other.words[i] : 0;
      if (a !== b) return false;
    }
    return true;
  }

  getHashKey() {
    let key = '';
    for (let i = 0; i < this.words.length; i++) {
      key += this.words[i].toString(16) + '_';
    }
    return key;
  }

  _grow(newWordLength) {
    const newWords = new Uint32Array(Math.max(newWordLength, this.words.length * 2));
    newWords.set(this.words);
    this.words = newWords;
  }
}
