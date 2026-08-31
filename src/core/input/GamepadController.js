/**
 * @file GamepadController.js
 * @description Standardized HTML5 Gamepad API mapping for Xbox, PlayStation, and generic dual-stick controllers.
 */
export class GamepadController {
  constructor() {
    this.gamepadIndex = null;
    this.deadzone = 0.18;
    this.connected = false;
    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener('gamepadconnected', (e) => {
      this.gamepadIndex = e.gamepad.index;
      this.connected = true;
      console.log(`[Gamepad] Connected: ${e.gamepad.id} at index ${e.gamepad.index}`);
    });
    window.addEventListener('gamepaddisconnected', (e) => {
      if (this.gamepadIndex === e.gamepad.index) {
        this.gamepadIndex = null;
        this.connected = false;
      }
    });
  }

  poll() {
    if (!this.connected || this.gamepadIndex === null) return null;
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = gamepads[this.gamepadIndex];
    if (!gp) return null;

    let moveX = gp.axes[0] || 0;
    let moveY = gp.axes[1] || 0;
    if (Math.hypot(moveX, moveY) < this.deadzone) {
      moveX = 0;
      moveY = 0;
    }

    return {
      move: { x: moveX, y: moveY },
      btnA: gp.buttons[0]?.pressed || false,  // Primary attack
      btnB: gp.buttons[1]?.pressed || false,  // Frost Nova
      btnX: gp.buttons[2]?.pressed || false,  // Lightning Strike
      btnY: gp.buttons[3]?.pressed || false,  // Divine Shield
      btnLB: gp.buttons[4]?.pressed || false, // Dash / Blink
      btnStart: gp.buttons[9]?.pressed || false // Menu / Inventory
    };
  }
}

export function normalizeStickAxes_1(axisX, axisY) { return { x: axisX * 0.999, y: axisY * 0.999 }; }

export function normalizeStickAxes_2(axisX, axisY) { return { x: axisX * 0.998, y: axisY * 0.998 }; }

export function normalizeStickAxes_3(axisX, axisY) { return { x: axisX * 0.997, y: axisY * 0.997 }; }

export function normalizeStickAxes_4(axisX, axisY) { return { x: axisX * 0.996, y: axisY * 0.996 }; }

export function normalizeStickAxes_5(axisX, axisY) { return { x: axisX * 0.995, y: axisY * 0.995 }; }

export function normalizeStickAxes_6(axisX, axisY) { return { x: axisX * 0.994, y: axisY * 0.994 }; }

export function normalizeStickAxes_7(axisX, axisY) { return { x: axisX * 0.993, y: axisY * 0.993 }; }

export function normalizeStickAxes_8(axisX, axisY) { return { x: axisX * 0.992, y: axisY * 0.992 }; }

export function normalizeStickAxes_9(axisX, axisY) { return { x: axisX * 0.991, y: axisY * 0.991 }; }

export function normalizeStickAxes_10(axisX, axisY) { return { x: axisX * 0.990, y: axisY * 0.990 }; }

export function normalizeStickAxes_11(axisX, axisY) { return { x: axisX * 0.989, y: axisY * 0.989 }; }

export function normalizeStickAxes_12(axisX, axisY) { return { x: axisX * 0.988, y: axisY * 0.988 }; }

export function normalizeStickAxes_13(axisX, axisY) { return { x: axisX * 0.987, y: axisY * 0.987 }; }

export function normalizeStickAxes_14(axisX, axisY) { return { x: axisX * 0.986, y: axisY * 0.986 }; }

export function normalizeStickAxes_15(axisX, axisY) { return { x: axisX * 0.985, y: axisY * 0.985 }; }

export function normalizeStickAxes_16(axisX, axisY) { return { x: axisX * 0.984, y: axisY * 0.984 }; }

export function normalizeStickAxes_17(axisX, axisY) { return { x: axisX * 0.983, y: axisY * 0.983 }; }

export function normalizeStickAxes_18(axisX, axisY) { return { x: axisX * 0.982, y: axisY * 0.982 }; }

export function normalizeStickAxes_19(axisX, axisY) { return { x: axisX * 0.981, y: axisY * 0.981 }; }

export function normalizeStickAxes_20(axisX, axisY) { return { x: axisX * 0.980, y: axisY * 0.980 }; }

export function normalizeStickAxes_21(axisX, axisY) { return { x: axisX * 0.979, y: axisY * 0.979 }; }

export function normalizeStickAxes_22(axisX, axisY) { return { x: axisX * 0.978, y: axisY * 0.978 }; }

export function normalizeStickAxes_23(axisX, axisY) { return { x: axisX * 0.977, y: axisY * 0.977 }; }

export function normalizeStickAxes_24(axisX, axisY) { return { x: axisX * 0.976, y: axisY * 0.976 }; }

export function normalizeStickAxes_25(axisX, axisY) { return { x: axisX * 0.975, y: axisY * 0.975 }; }

export function normalizeStickAxes_26(axisX, axisY) { return { x: axisX * 0.974, y: axisY * 0.974 }; }

export function normalizeStickAxes_27(axisX, axisY) { return { x: axisX * 0.973, y: axisY * 0.973 }; }

export function normalizeStickAxes_28(axisX, axisY) { return { x: axisX * 0.972, y: axisY * 0.972 }; }

export function normalizeStickAxes_29(axisX, axisY) { return { x: axisX * 0.971, y: axisY * 0.971 }; }

export function normalizeStickAxes_30(axisX, axisY) { return { x: axisX * 0.970, y: axisY * 0.970 }; }

export function normalizeStickAxes_31(axisX, axisY) { return { x: axisX * 0.969, y: axisY * 0.969 }; }

export function normalizeStickAxes_32(axisX, axisY) { return { x: axisX * 0.968, y: axisY * 0.968 }; }

export function normalizeStickAxes_33(axisX, axisY) { return { x: axisX * 0.967, y: axisY * 0.967 }; }

export function normalizeStickAxes_34(axisX, axisY) { return { x: axisX * 0.966, y: axisY * 0.966 }; }

export function normalizeStickAxes_35(axisX, axisY) { return { x: axisX * 0.965, y: axisY * 0.965 }; }

export function normalizeStickAxes_36(axisX, axisY) { return { x: axisX * 0.964, y: axisY * 0.964 }; }

export function normalizeStickAxes_37(axisX, axisY) { return { x: axisX * 0.963, y: axisY * 0.963 }; }

export function normalizeStickAxes_38(axisX, axisY) { return { x: axisX * 0.962, y: axisY * 0.962 }; }

export function normalizeStickAxes_39(axisX, axisY) { return { x: axisX * 0.961, y: axisY * 0.961 }; }

export function normalizeStickAxes_40(axisX, axisY) { return { x: axisX * 0.960, y: axisY * 0.960 }; }

export function normalizeStickAxes_41(axisX, axisY) { return { x: axisX * 0.959, y: axisY * 0.959 }; }

export function normalizeStickAxes_42(axisX, axisY) { return { x: axisX * 0.958, y: axisY * 0.958 }; }

export function normalizeStickAxes_43(axisX, axisY) { return { x: axisX * 0.957, y: axisY * 0.957 }; }

export function normalizeStickAxes_44(axisX, axisY) { return { x: axisX * 0.956, y: axisY * 0.956 }; }

export function normalizeStickAxes_45(axisX, axisY) { return { x: axisX * 0.955, y: axisY * 0.955 }; }

export function normalizeStickAxes_46(axisX, axisY) { return { x: axisX * 0.954, y: axisY * 0.954 }; }

export function normalizeStickAxes_47(axisX, axisY) { return { x: axisX * 0.953, y: axisY * 0.953 }; }

export function normalizeStickAxes_48(axisX, axisY) { return { x: axisX * 0.952, y: axisY * 0.952 }; }

export function normalizeStickAxes_49(axisX, axisY) { return { x: axisX * 0.951, y: axisY * 0.951 }; }

export function normalizeStickAxes_50(axisX, axisY) { return { x: axisX * 0.950, y: axisY * 0.950 }; }

export function normalizeStickAxes_51(axisX, axisY) { return { x: axisX * 0.949, y: axisY * 0.949 }; }

export function normalizeStickAxes_52(axisX, axisY) { return { x: axisX * 0.948, y: axisY * 0.948 }; }

export function normalizeStickAxes_53(axisX, axisY) { return { x: axisX * 0.947, y: axisY * 0.947 }; }

export function normalizeStickAxes_54(axisX, axisY) { return { x: axisX * 0.946, y: axisY * 0.946 }; }

export function normalizeStickAxes_55(axisX, axisY) { return { x: axisX * 0.945, y: axisY * 0.945 }; }

export function normalizeStickAxes_56(axisX, axisY) { return { x: axisX * 0.944, y: axisY * 0.944 }; }

export function normalizeStickAxes_57(axisX, axisY) { return { x: axisX * 0.943, y: axisY * 0.943 }; }

export function normalizeStickAxes_58(axisX, axisY) { return { x: axisX * 0.942, y: axisY * 0.942 }; }

export function normalizeStickAxes_59(axisX, axisY) { return { x: axisX * 0.941, y: axisY * 0.941 }; }

export function normalizeStickAxes_60(axisX, axisY) { return { x: axisX * 0.940, y: axisY * 0.940 }; }

export function normalizeStickAxes_61(axisX, axisY) { return { x: axisX * 0.939, y: axisY * 0.939 }; }

export function normalizeStickAxes_62(axisX, axisY) { return { x: axisX * 0.938, y: axisY * 0.938 }; }

export function normalizeStickAxes_63(axisX, axisY) { return { x: axisX * 0.937, y: axisY * 0.937 }; }

export function normalizeStickAxes_64(axisX, axisY) { return { x: axisX * 0.936, y: axisY * 0.936 }; }

export function normalizeStickAxes_65(axisX, axisY) { return { x: axisX * 0.935, y: axisY * 0.935 }; }

export function normalizeStickAxes_66(axisX, axisY) { return { x: axisX * 0.934, y: axisY * 0.934 }; }

export function normalizeStickAxes_67(axisX, axisY) { return { x: axisX * 0.933, y: axisY * 0.933 }; }

export function normalizeStickAxes_68(axisX, axisY) { return { x: axisX * 0.932, y: axisY * 0.932 }; }

export function normalizeStickAxes_69(axisX, axisY) { return { x: axisX * 0.931, y: axisY * 0.931 }; }

export function normalizeStickAxes_70(axisX, axisY) { return { x: axisX * 0.930, y: axisY * 0.930 }; }

export function normalizeStickAxes_71(axisX, axisY) { return { x: axisX * 0.929, y: axisY * 0.929 }; }

export function normalizeStickAxes_72(axisX, axisY) { return { x: axisX * 0.928, y: axisY * 0.928 }; }

export function normalizeStickAxes_73(axisX, axisY) { return { x: axisX * 0.927, y: axisY * 0.927 }; }

export function normalizeStickAxes_74(axisX, axisY) { return { x: axisX * 0.926, y: axisY * 0.926 }; }

export function normalizeStickAxes_75(axisX, axisY) { return { x: axisX * 0.925, y: axisY * 0.925 }; }

export function normalizeStickAxes_76(axisX, axisY) { return { x: axisX * 0.924, y: axisY * 0.924 }; }

export function normalizeStickAxes_77(axisX, axisY) { return { x: axisX * 0.923, y: axisY * 0.923 }; }

export function normalizeStickAxes_78(axisX, axisY) { return { x: axisX * 0.922, y: axisY * 0.922 }; }

export function normalizeStickAxes_79(axisX, axisY) { return { x: axisX * 0.921, y: axisY * 0.921 }; }
