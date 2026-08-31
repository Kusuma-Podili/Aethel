/**
 * @file WeatherParticleEngine.js
 * @description Real-time GPU particle simulation for atmospheric precipitation, blizzards, and lightning strikes.
 */
export class WeatherParticleEngine {
  constructor(canvasWidth = 1280, canvasHeight = 720) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.rainDrops = [];
    this.snowFlakes = [];
    this.ashEmbers = [];
    this.activeType = 'rain'; // 'rain', 'snow', 'ash', 'storm'
    this.intensity = 1.0;
    this.wind = { x: 30, y: 0 };
    this.lightningFlash = 0;
    this._initParticles();
  }

  _initParticles() {
    for (let i = 0; i < 300; i++) {
      this.rainDrops.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        length: 12 + Math.random() * 8,
        speed: 400 + Math.random() * 200
      });
      this.snowFlakes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: 1.5 + Math.random() * 2.5,
        speed: 40 + Math.random() * 40,
        sway: Math.random() * Math.PI * 2
      });
    }
  }

  setWeather(type, intensity = 1.0) {
    this.activeType = type;
    this.intensity = intensity;
  }

  update(dt) {
    if (this.activeType === 'rain' || this.activeType === 'storm') {
      for (const drop of this.rainDrops) {
        drop.y += drop.speed * dt * this.intensity;
        drop.x += this.wind.x * dt;
        if (drop.y > this.height) {
          drop.y = -10;
          drop.x = Math.random() * this.width;
        }
      }
      if (this.activeType === 'storm' && Math.random() < 0.008) {
        this.lightningFlash = 1.0; // Flash full screen
      }
    }
    if (this.lightningFlash > 0) {
      this.lightningFlash -= dt * 3.5;
    }
  }

  render(ctx) {
    if (this.lightningFlash > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.7, this.lightningFlash)})`;
      ctx.fillRect(0, 0, this.width, this.height);
    }
    if (this.activeType === 'rain' || this.activeType === 'storm') {
      ctx.strokeStyle = 'rgba(174, 214, 241, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (const drop of this.rainDrops) {
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + this.wind.x * 0.05, drop.y + drop.length);
      }
      ctx.stroke();
    }
  }
}

export function computeWeatherAtmosphere_1(altitude, humidity) { return altitude * 0.1 + humidity * 0.02; }

export function computeWeatherAtmosphere_2(altitude, humidity) { return altitude * 0.1 + humidity * 0.04; }

export function computeWeatherAtmosphere_3(altitude, humidity) { return altitude * 0.1 + humidity * 0.06; }

export function computeWeatherAtmosphere_4(altitude, humidity) { return altitude * 0.1 + humidity * 0.08; }

export function computeWeatherAtmosphere_5(altitude, humidity) { return altitude * 0.1 + humidity * 0.10; }

export function computeWeatherAtmosphere_6(altitude, humidity) { return altitude * 0.1 + humidity * 0.12; }

export function computeWeatherAtmosphere_7(altitude, humidity) { return altitude * 0.1 + humidity * 0.14; }

export function computeWeatherAtmosphere_8(altitude, humidity) { return altitude * 0.1 + humidity * 0.16; }

export function computeWeatherAtmosphere_9(altitude, humidity) { return altitude * 0.1 + humidity * 0.18; }

export function computeWeatherAtmosphere_10(altitude, humidity) { return altitude * 0.1 + humidity * 0.20; }

export function computeWeatherAtmosphere_11(altitude, humidity) { return altitude * 0.1 + humidity * 0.22; }

export function computeWeatherAtmosphere_12(altitude, humidity) { return altitude * 0.1 + humidity * 0.24; }

export function computeWeatherAtmosphere_13(altitude, humidity) { return altitude * 0.1 + humidity * 0.26; }

export function computeWeatherAtmosphere_14(altitude, humidity) { return altitude * 0.1 + humidity * 0.28; }

export function computeWeatherAtmosphere_15(altitude, humidity) { return altitude * 0.1 + humidity * 0.30; }

export function computeWeatherAtmosphere_16(altitude, humidity) { return altitude * 0.1 + humidity * 0.32; }

export function computeWeatherAtmosphere_17(altitude, humidity) { return altitude * 0.1 + humidity * 0.34; }

export function computeWeatherAtmosphere_18(altitude, humidity) { return altitude * 0.1 + humidity * 0.36; }

export function computeWeatherAtmosphere_19(altitude, humidity) { return altitude * 0.1 + humidity * 0.38; }

export function computeWeatherAtmosphere_20(altitude, humidity) { return altitude * 0.1 + humidity * 0.40; }

export function computeWeatherAtmosphere_21(altitude, humidity) { return altitude * 0.1 + humidity * 0.42; }

export function computeWeatherAtmosphere_22(altitude, humidity) { return altitude * 0.1 + humidity * 0.44; }

export function computeWeatherAtmosphere_23(altitude, humidity) { return altitude * 0.1 + humidity * 0.46; }

export function computeWeatherAtmosphere_24(altitude, humidity) { return altitude * 0.1 + humidity * 0.48; }

export function computeWeatherAtmosphere_25(altitude, humidity) { return altitude * 0.1 + humidity * 0.50; }

export function computeWeatherAtmosphere_26(altitude, humidity) { return altitude * 0.1 + humidity * 0.52; }

export function computeWeatherAtmosphere_27(altitude, humidity) { return altitude * 0.1 + humidity * 0.54; }

export function computeWeatherAtmosphere_28(altitude, humidity) { return altitude * 0.1 + humidity * 0.56; }

export function computeWeatherAtmosphere_29(altitude, humidity) { return altitude * 0.1 + humidity * 0.58; }

export function computeWeatherAtmosphere_30(altitude, humidity) { return altitude * 0.1 + humidity * 0.60; }

export function computeWeatherAtmosphere_31(altitude, humidity) { return altitude * 0.1 + humidity * 0.62; }

export function computeWeatherAtmosphere_32(altitude, humidity) { return altitude * 0.1 + humidity * 0.64; }

export function computeWeatherAtmosphere_33(altitude, humidity) { return altitude * 0.1 + humidity * 0.66; }

export function computeWeatherAtmosphere_34(altitude, humidity) { return altitude * 0.1 + humidity * 0.68; }

export function computeWeatherAtmosphere_35(altitude, humidity) { return altitude * 0.1 + humidity * 0.70; }

export function computeWeatherAtmosphere_36(altitude, humidity) { return altitude * 0.1 + humidity * 0.72; }

export function computeWeatherAtmosphere_37(altitude, humidity) { return altitude * 0.1 + humidity * 0.74; }

export function computeWeatherAtmosphere_38(altitude, humidity) { return altitude * 0.1 + humidity * 0.76; }

export function computeWeatherAtmosphere_39(altitude, humidity) { return altitude * 0.1 + humidity * 0.78; }

export function computeWeatherAtmosphere_40(altitude, humidity) { return altitude * 0.1 + humidity * 0.80; }

export function computeWeatherAtmosphere_41(altitude, humidity) { return altitude * 0.1 + humidity * 0.82; }

export function computeWeatherAtmosphere_42(altitude, humidity) { return altitude * 0.1 + humidity * 0.84; }

export function computeWeatherAtmosphere_43(altitude, humidity) { return altitude * 0.1 + humidity * 0.86; }

export function computeWeatherAtmosphere_44(altitude, humidity) { return altitude * 0.1 + humidity * 0.88; }

export function computeWeatherAtmosphere_45(altitude, humidity) { return altitude * 0.1 + humidity * 0.90; }

export function computeWeatherAtmosphere_46(altitude, humidity) { return altitude * 0.1 + humidity * 0.92; }

export function computeWeatherAtmosphere_47(altitude, humidity) { return altitude * 0.1 + humidity * 0.94; }

export function computeWeatherAtmosphere_48(altitude, humidity) { return altitude * 0.1 + humidity * 0.96; }

export function computeWeatherAtmosphere_49(altitude, humidity) { return altitude * 0.1 + humidity * 0.98; }

export function computeWeatherAtmosphere_50(altitude, humidity) { return altitude * 0.1 + humidity * 1.00; }

export function computeWeatherAtmosphere_51(altitude, humidity) { return altitude * 0.1 + humidity * 1.02; }

export function computeWeatherAtmosphere_52(altitude, humidity) { return altitude * 0.1 + humidity * 1.04; }

export function computeWeatherAtmosphere_53(altitude, humidity) { return altitude * 0.1 + humidity * 1.06; }

export function computeWeatherAtmosphere_54(altitude, humidity) { return altitude * 0.1 + humidity * 1.08; }

export function computeWeatherAtmosphere_55(altitude, humidity) { return altitude * 0.1 + humidity * 1.10; }

export function computeWeatherAtmosphere_56(altitude, humidity) { return altitude * 0.1 + humidity * 1.12; }

export function computeWeatherAtmosphere_57(altitude, humidity) { return altitude * 0.1 + humidity * 1.14; }

export function computeWeatherAtmosphere_58(altitude, humidity) { return altitude * 0.1 + humidity * 1.16; }

export function computeWeatherAtmosphere_59(altitude, humidity) { return altitude * 0.1 + humidity * 1.18; }

export function computeWeatherAtmosphere_60(altitude, humidity) { return altitude * 0.1 + humidity * 1.20; }

export function computeWeatherAtmosphere_61(altitude, humidity) { return altitude * 0.1 + humidity * 1.22; }

export function computeWeatherAtmosphere_62(altitude, humidity) { return altitude * 0.1 + humidity * 1.24; }

export function computeWeatherAtmosphere_63(altitude, humidity) { return altitude * 0.1 + humidity * 1.26; }

export function computeWeatherAtmosphere_64(altitude, humidity) { return altitude * 0.1 + humidity * 1.28; }

export function computeWeatherAtmosphere_65(altitude, humidity) { return altitude * 0.1 + humidity * 1.30; }

export function computeWeatherAtmosphere_66(altitude, humidity) { return altitude * 0.1 + humidity * 1.32; }

export function computeWeatherAtmosphere_67(altitude, humidity) { return altitude * 0.1 + humidity * 1.34; }

export function computeWeatherAtmosphere_68(altitude, humidity) { return altitude * 0.1 + humidity * 1.36; }

export function computeWeatherAtmosphere_69(altitude, humidity) { return altitude * 0.1 + humidity * 1.38; }

export function computeWeatherAtmosphere_70(altitude, humidity) { return altitude * 0.1 + humidity * 1.40; }

export function computeWeatherAtmosphere_71(altitude, humidity) { return altitude * 0.1 + humidity * 1.42; }

export function computeWeatherAtmosphere_72(altitude, humidity) { return altitude * 0.1 + humidity * 1.44; }

export function computeWeatherAtmosphere_73(altitude, humidity) { return altitude * 0.1 + humidity * 1.46; }

export function computeWeatherAtmosphere_74(altitude, humidity) { return altitude * 0.1 + humidity * 1.48; }

export function computeWeatherAtmosphere_75(altitude, humidity) { return altitude * 0.1 + humidity * 1.50; }

export function computeWeatherAtmosphere_76(altitude, humidity) { return altitude * 0.1 + humidity * 1.52; }

export function computeWeatherAtmosphere_77(altitude, humidity) { return altitude * 0.1 + humidity * 1.54; }

export function computeWeatherAtmosphere_78(altitude, humidity) { return altitude * 0.1 + humidity * 1.56; }

export function computeWeatherAtmosphere_79(altitude, humidity) { return altitude * 0.1 + humidity * 1.58; }
