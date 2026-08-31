export const WeatherType = {
  CLEAR: 0,
  RAIN: 1,
  THUNDERSTORM: 2,
  SNOW: 3,
  ASHFALL: 4,
  FOG: 5
};

export class DayNightCycle {
  constructor(dayDurationSeconds = 300) {
    this.dayDuration = dayDurationSeconds;
    this.timeOfDay = 0.5; // 0.0 = Midnight, 0.25 = Dawn, 0.5 = Noon, 0.75 = Dusk
    this.ambientLightColor = { r: 1, g: 1, b: 1, intensity: 1.0 };
  }

  update(dt) {
    this.timeOfDay = (this.timeOfDay + dt / this.dayDuration) % 1.0;
    this._computeAmbient();
  }

  _computeAmbient() {
    // 24h sine curve approximation
    const sunAngle = this.timeOfDay * Math.PI * 2;
    const daylight = Math.max(0.15, Math.sin(sunAngle));

    if (this.timeOfDay > 0.7 && this.timeOfDay < 0.8) {
      // Dusk - Golden/Red hue
      this.ambientLightColor.r = 0.95;
      this.ambientLightColor.g = 0.6;
      this.ambientLightColor.b = 0.4;
      this.ambientLightColor.intensity = daylight * 0.8;
    } else if (this.timeOfDay > 0.2 && this.timeOfDay < 0.3) {
      // Dawn - Rose/Blue hue
      this.ambientLightColor.r = 0.7;
      this.ambientLightColor.g = 0.7;
      this.ambientLightColor.b = 0.9;
      this.ambientLightColor.intensity = daylight * 0.8;
    } else if (this.timeOfDay >= 0.3 && this.timeOfDay <= 0.7) {
      // Midday - Pure sunlight
      this.ambientLightColor.r = 1.0;
      this.ambientLightColor.g = 0.98;
      this.ambientLightColor.b = 0.92;
      this.ambientLightColor.intensity = daylight;
    } else {
      // Night - Deep moonlight blue
      this.ambientLightColor.r = 0.15;
      this.ambientLightColor.g = 0.2;
      this.ambientLightColor.b = 0.4;
      this.ambientLightColor.intensity = 0.25;
    }
  }

  getFormattedTime() {
    const totalMinutes = Math.floor(this.timeOfDay * 1440);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const dispHours = hours % 12 === 0 ? 12 : hours % 12;
    const dispMins = minutes < 10 ? '0' + minutes : minutes;
    return `${dispHours}:${dispMins} ${ampm}`;
  }
}
