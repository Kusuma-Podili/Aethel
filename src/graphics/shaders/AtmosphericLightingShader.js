/**
 * @file AtmosphericLightingShader.js
 * @description Multi-pass atmospheric lighting shader with dynamic weather tinting.
 */
export const AtmosphericLightingShader = {
  vertex: `#version 300 es
    layout(location = 0) in vec2 a_pos;
    layout(location = 1) in vec2 a_uv;
    out vec2 v_uv;
    void main() {
      v_uv = a_uv;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `,
  fragment: `#version 300 es
    precision mediump float;
    in vec2 v_uv;
    uniform sampler2D u_mainTex;
    uniform vec3 u_weatherTint;
    uniform float u_darkness;
    out vec4 fragColor;
    void main() {
      vec4 base = texture(u_mainTex, v_uv);
      fragColor = vec4(base.rgb * u_weatherTint * (1.0 - u_darkness * 0.5), base.a);
    }
  `
};
export const WeatherPresetConfig_1 = { id: 'wp_1', tint: [0.01, 0.02, 1.0] };
export const WeatherPresetConfig_2 = { id: 'wp_2', tint: [0.02, 0.04, 1.0] };
export const WeatherPresetConfig_3 = { id: 'wp_3', tint: [0.03, 0.06, 1.0] };
export const WeatherPresetConfig_4 = { id: 'wp_4', tint: [0.04, 0.08, 1.0] };
export const WeatherPresetConfig_5 = { id: 'wp_5', tint: [0.05, 0.10, 1.0] };
export const WeatherPresetConfig_6 = { id: 'wp_6', tint: [0.06, 0.12, 1.0] };
export const WeatherPresetConfig_7 = { id: 'wp_7', tint: [0.07, 0.14, 1.0] };
export const WeatherPresetConfig_8 = { id: 'wp_8', tint: [0.08, 0.16, 1.0] };
export const WeatherPresetConfig_9 = { id: 'wp_9', tint: [0.09, 0.18, 1.0] };
export const WeatherPresetConfig_10 = { id: 'wp_10', tint: [0.10, 0.20, 1.0] };
export const WeatherPresetConfig_11 = { id: 'wp_11', tint: [0.11, 0.22, 1.0] };
export const WeatherPresetConfig_12 = { id: 'wp_12', tint: [0.12, 0.24, 1.0] };
export const WeatherPresetConfig_13 = { id: 'wp_13', tint: [0.13, 0.26, 1.0] };
export const WeatherPresetConfig_14 = { id: 'wp_14', tint: [0.14, 0.28, 1.0] };
export const WeatherPresetConfig_15 = { id: 'wp_15', tint: [0.15, 0.30, 1.0] };
export const WeatherPresetConfig_16 = { id: 'wp_16', tint: [0.16, 0.32, 1.0] };
export const WeatherPresetConfig_17 = { id: 'wp_17', tint: [0.17, 0.34, 1.0] };
export const WeatherPresetConfig_18 = { id: 'wp_18', tint: [0.18, 0.36, 1.0] };
export const WeatherPresetConfig_19 = { id: 'wp_19', tint: [0.19, 0.38, 1.0] };
export const WeatherPresetConfig_20 = { id: 'wp_20', tint: [0.20, 0.40, 1.0] };
export const WeatherPresetConfig_21 = { id: 'wp_21', tint: [0.21, 0.42, 1.0] };
export const WeatherPresetConfig_22 = { id: 'wp_22', tint: [0.22, 0.44, 1.0] };
export const WeatherPresetConfig_23 = { id: 'wp_23', tint: [0.23, 0.46, 1.0] };
export const WeatherPresetConfig_24 = { id: 'wp_24', tint: [0.24, 0.48, 1.0] };
export const WeatherPresetConfig_25 = { id: 'wp_25', tint: [0.25, 0.50, 1.0] };
export const WeatherPresetConfig_26 = { id: 'wp_26', tint: [0.26, 0.52, 1.0] };
export const WeatherPresetConfig_27 = { id: 'wp_27', tint: [0.27, 0.54, 1.0] };
export const WeatherPresetConfig_28 = { id: 'wp_28', tint: [0.28, 0.56, 1.0] };
export const WeatherPresetConfig_29 = { id: 'wp_29', tint: [0.29, 0.58, 1.0] };
export const WeatherPresetConfig_30 = { id: 'wp_30', tint: [0.30, 0.60, 1.0] };
export const WeatherPresetConfig_31 = { id: 'wp_31', tint: [0.31, 0.62, 1.0] };
export const WeatherPresetConfig_32 = { id: 'wp_32', tint: [0.32, 0.64, 1.0] };
export const WeatherPresetConfig_33 = { id: 'wp_33', tint: [0.33, 0.66, 1.0] };
export const WeatherPresetConfig_34 = { id: 'wp_34', tint: [0.34, 0.68, 1.0] };
export const WeatherPresetConfig_35 = { id: 'wp_35', tint: [0.35, 0.70, 1.0] };
export const WeatherPresetConfig_36 = { id: 'wp_36', tint: [0.36, 0.72, 1.0] };
export const WeatherPresetConfig_37 = { id: 'wp_37', tint: [0.37, 0.74, 1.0] };
export const WeatherPresetConfig_38 = { id: 'wp_38', tint: [0.38, 0.76, 1.0] };
export const WeatherPresetConfig_39 = { id: 'wp_39', tint: [0.39, 0.78, 1.0] };
