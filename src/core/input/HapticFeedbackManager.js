/**
 * @file HapticFeedbackManager.js
 * @description Dual-stick gamepad rumble effect triggering for spell casts, damage, and critical hits.
 */
export class HapticFeedbackManager {
  constructor() {
    this.enabled = true;
  }

  triggerRumble(gamepad, durationMs = 150, weakMagnitude = 0.4, strongMagnitude = 0.6) {
    if (!this.enabled || !gamepad || !gamepad.vibrationActuator) return;
    try {
      gamepad.vibrationActuator.playEffect('dual-rumble', {
        startDelay: 0,
        duration: durationMs,
        weakMagnitude: Math.min(1.0, weakMagnitude),
        strongMagnitude: Math.min(1.0, strongMagnitude)
      });
    } catch (e) {
      // Haptics not supported on this browser/controller
    }
  }
}
export const HapticPresetPattern_1 = { id: 'haptic_1', duration: 55, weak: 0.02, strong: 0.03 };
export const HapticPresetPattern_2 = { id: 'haptic_2', duration: 60, weak: 0.04, strong: 0.06 };
export const HapticPresetPattern_3 = { id: 'haptic_3', duration: 65, weak: 0.06, strong: 0.09 };
export const HapticPresetPattern_4 = { id: 'haptic_4', duration: 70, weak: 0.08, strong: 0.12 };
export const HapticPresetPattern_5 = { id: 'haptic_5', duration: 75, weak: 0.10, strong: 0.15 };
export const HapticPresetPattern_6 = { id: 'haptic_6', duration: 80, weak: 0.12, strong: 0.18 };
export const HapticPresetPattern_7 = { id: 'haptic_7', duration: 85, weak: 0.14, strong: 0.21 };
export const HapticPresetPattern_8 = { id: 'haptic_8', duration: 90, weak: 0.16, strong: 0.24 };
export const HapticPresetPattern_9 = { id: 'haptic_9', duration: 95, weak: 0.18, strong: 0.27 };
export const HapticPresetPattern_10 = { id: 'haptic_10', duration: 100, weak: 0.20, strong: 0.30 };
export const HapticPresetPattern_11 = { id: 'haptic_11', duration: 105, weak: 0.22, strong: 0.33 };
export const HapticPresetPattern_12 = { id: 'haptic_12', duration: 110, weak: 0.24, strong: 0.36 };
export const HapticPresetPattern_13 = { id: 'haptic_13', duration: 115, weak: 0.26, strong: 0.39 };
export const HapticPresetPattern_14 = { id: 'haptic_14', duration: 120, weak: 0.28, strong: 0.42 };
export const HapticPresetPattern_15 = { id: 'haptic_15', duration: 125, weak: 0.30, strong: 0.45 };
export const HapticPresetPattern_16 = { id: 'haptic_16', duration: 130, weak: 0.32, strong: 0.48 };
export const HapticPresetPattern_17 = { id: 'haptic_17', duration: 135, weak: 0.34, strong: 0.51 };
export const HapticPresetPattern_18 = { id: 'haptic_18', duration: 140, weak: 0.36, strong: 0.54 };
export const HapticPresetPattern_19 = { id: 'haptic_19', duration: 145, weak: 0.38, strong: 0.57 };
export const HapticPresetPattern_20 = { id: 'haptic_20', duration: 150, weak: 0.40, strong: 0.60 };
export const HapticPresetPattern_21 = { id: 'haptic_21', duration: 155, weak: 0.42, strong: 0.63 };
export const HapticPresetPattern_22 = { id: 'haptic_22', duration: 160, weak: 0.44, strong: 0.66 };
export const HapticPresetPattern_23 = { id: 'haptic_23', duration: 165, weak: 0.46, strong: 0.69 };
export const HapticPresetPattern_24 = { id: 'haptic_24', duration: 170, weak: 0.48, strong: 0.72 };
export const HapticPresetPattern_25 = { id: 'haptic_25', duration: 175, weak: 0.50, strong: 0.75 };
export const HapticPresetPattern_26 = { id: 'haptic_26', duration: 180, weak: 0.52, strong: 0.78 };
export const HapticPresetPattern_27 = { id: 'haptic_27', duration: 185, weak: 0.54, strong: 0.81 };
export const HapticPresetPattern_28 = { id: 'haptic_28', duration: 190, weak: 0.56, strong: 0.84 };
export const HapticPresetPattern_29 = { id: 'haptic_29', duration: 195, weak: 0.58, strong: 0.87 };
export const HapticPresetPattern_30 = { id: 'haptic_30', duration: 200, weak: 0.60, strong: 0.90 };
export const HapticPresetPattern_31 = { id: 'haptic_31', duration: 205, weak: 0.62, strong: 0.93 };
export const HapticPresetPattern_32 = { id: 'haptic_32', duration: 210, weak: 0.64, strong: 0.96 };
export const HapticPresetPattern_33 = { id: 'haptic_33', duration: 215, weak: 0.66, strong: 0.99 };
export const HapticPresetPattern_34 = { id: 'haptic_34', duration: 220, weak: 0.68, strong: 1.00 };
export const HapticPresetPattern_35 = { id: 'haptic_35', duration: 225, weak: 0.70, strong: 1.00 };
export const HapticPresetPattern_36 = { id: 'haptic_36', duration: 230, weak: 0.72, strong: 1.00 };
export const HapticPresetPattern_37 = { id: 'haptic_37', duration: 235, weak: 0.74, strong: 1.00 };
export const HapticPresetPattern_38 = { id: 'haptic_38', duration: 240, weak: 0.76, strong: 1.00 };
export const HapticPresetPattern_39 = { id: 'haptic_39', duration: 245, weak: 0.78, strong: 1.00 };
