/**
 * @file WeatherShaders.js
 * @description GLSL shader fragments for atmospheric refraction and screen water ripples.
 */
export const RainDistortionShader = {
  vertex: `#version 300 es
    layout(location = 0) in vec2 a_position;
    layout(location = 1) in vec2 a_texCoord;
    out vec2 v_uv;
    void main() {
      v_uv = a_texCoord;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,
  fragment: `#version 300 es
    precision mediump float;
    in vec2 v_uv;
    uniform sampler2D u_screenTexture;
    uniform float u_time;
    uniform float u_rainIntensity;
    out vec4 fragColor;

    void main() {
      vec2 uv = v_uv;
      float ripple = sin(uv.y * 40.0 + u_time * 5.0) * 0.003 * u_rainIntensity;
      uv.x += ripple;
      fragColor = texture(u_screenTexture, uv);
    }
  `
};

export const CustomShaderPreset_1 = { id: 'shader_1', intensity: 0.10 };

export const CustomShaderPreset_2 = { id: 'shader_2', intensity: 0.20 };

export const CustomShaderPreset_3 = { id: 'shader_3', intensity: 0.30 };

export const CustomShaderPreset_4 = { id: 'shader_4', intensity: 0.40 };

export const CustomShaderPreset_5 = { id: 'shader_5', intensity: 0.50 };

export const CustomShaderPreset_6 = { id: 'shader_6', intensity: 0.60 };

export const CustomShaderPreset_7 = { id: 'shader_7', intensity: 0.70 };

export const CustomShaderPreset_8 = { id: 'shader_8', intensity: 0.80 };

export const CustomShaderPreset_9 = { id: 'shader_9', intensity: 0.90 };

export const CustomShaderPreset_10 = { id: 'shader_10', intensity: 1.00 };

export const CustomShaderPreset_11 = { id: 'shader_11', intensity: 1.10 };

export const CustomShaderPreset_12 = { id: 'shader_12', intensity: 1.20 };

export const CustomShaderPreset_13 = { id: 'shader_13', intensity: 1.30 };

export const CustomShaderPreset_14 = { id: 'shader_14', intensity: 1.40 };

export const CustomShaderPreset_15 = { id: 'shader_15', intensity: 1.50 };

export const CustomShaderPreset_16 = { id: 'shader_16', intensity: 1.60 };

export const CustomShaderPreset_17 = { id: 'shader_17', intensity: 1.70 };

export const CustomShaderPreset_18 = { id: 'shader_18', intensity: 1.80 };

export const CustomShaderPreset_19 = { id: 'shader_19', intensity: 1.90 };

export const CustomShaderPreset_20 = { id: 'shader_20', intensity: 2.00 };

export const CustomShaderPreset_21 = { id: 'shader_21', intensity: 2.10 };

export const CustomShaderPreset_22 = { id: 'shader_22', intensity: 2.20 };

export const CustomShaderPreset_23 = { id: 'shader_23', intensity: 2.30 };

export const CustomShaderPreset_24 = { id: 'shader_24', intensity: 2.40 };

export const CustomShaderPreset_25 = { id: 'shader_25', intensity: 2.50 };

export const CustomShaderPreset_26 = { id: 'shader_26', intensity: 2.60 };

export const CustomShaderPreset_27 = { id: 'shader_27', intensity: 2.70 };

export const CustomShaderPreset_28 = { id: 'shader_28', intensity: 2.80 };

export const CustomShaderPreset_29 = { id: 'shader_29', intensity: 2.90 };

export const CustomShaderPreset_30 = { id: 'shader_30', intensity: 3.00 };

export const CustomShaderPreset_31 = { id: 'shader_31', intensity: 3.10 };

export const CustomShaderPreset_32 = { id: 'shader_32', intensity: 3.20 };

export const CustomShaderPreset_33 = { id: 'shader_33', intensity: 3.30 };

export const CustomShaderPreset_34 = { id: 'shader_34', intensity: 3.40 };

export const CustomShaderPreset_35 = { id: 'shader_35', intensity: 3.50 };

export const CustomShaderPreset_36 = { id: 'shader_36', intensity: 3.60 };

export const CustomShaderPreset_37 = { id: 'shader_37', intensity: 3.70 };

export const CustomShaderPreset_38 = { id: 'shader_38', intensity: 3.80 };

export const CustomShaderPreset_39 = { id: 'shader_39', intensity: 3.90 };

export const CustomShaderPreset_40 = { id: 'shader_40', intensity: 4.00 };

export const CustomShaderPreset_41 = { id: 'shader_41', intensity: 4.10 };

export const CustomShaderPreset_42 = { id: 'shader_42', intensity: 4.20 };

export const CustomShaderPreset_43 = { id: 'shader_43', intensity: 4.30 };

export const CustomShaderPreset_44 = { id: 'shader_44', intensity: 4.40 };

export const CustomShaderPreset_45 = { id: 'shader_45', intensity: 4.50 };

export const CustomShaderPreset_46 = { id: 'shader_46', intensity: 4.60 };

export const CustomShaderPreset_47 = { id: 'shader_47', intensity: 4.70 };

export const CustomShaderPreset_48 = { id: 'shader_48', intensity: 4.80 };

export const CustomShaderPreset_49 = { id: 'shader_49', intensity: 4.90 };

export const CustomShaderPreset_50 = { id: 'shader_50', intensity: 5.00 };

export const CustomShaderPreset_51 = { id: 'shader_51', intensity: 5.10 };

export const CustomShaderPreset_52 = { id: 'shader_52', intensity: 5.20 };

export const CustomShaderPreset_53 = { id: 'shader_53', intensity: 5.30 };

export const CustomShaderPreset_54 = { id: 'shader_54', intensity: 5.40 };

export const CustomShaderPreset_55 = { id: 'shader_55', intensity: 5.50 };

export const CustomShaderPreset_56 = { id: 'shader_56', intensity: 5.60 };

export const CustomShaderPreset_57 = { id: 'shader_57', intensity: 5.70 };

export const CustomShaderPreset_58 = { id: 'shader_58', intensity: 5.80 };

export const CustomShaderPreset_59 = { id: 'shader_59', intensity: 5.90 };

export const CustomShaderPreset_60 = { id: 'shader_60', intensity: 6.00 };

export const CustomShaderPreset_61 = { id: 'shader_61', intensity: 6.10 };

export const CustomShaderPreset_62 = { id: 'shader_62', intensity: 6.20 };

export const CustomShaderPreset_63 = { id: 'shader_63', intensity: 6.30 };

export const CustomShaderPreset_64 = { id: 'shader_64', intensity: 6.40 };

export const CustomShaderPreset_65 = { id: 'shader_65', intensity: 6.50 };

export const CustomShaderPreset_66 = { id: 'shader_66', intensity: 6.60 };

export const CustomShaderPreset_67 = { id: 'shader_67', intensity: 6.70 };

export const CustomShaderPreset_68 = { id: 'shader_68', intensity: 6.80 };

export const CustomShaderPreset_69 = { id: 'shader_69', intensity: 6.90 };

export const CustomShaderPreset_70 = { id: 'shader_70', intensity: 7.00 };

export const CustomShaderPreset_71 = { id: 'shader_71', intensity: 7.10 };

export const CustomShaderPreset_72 = { id: 'shader_72', intensity: 7.20 };

export const CustomShaderPreset_73 = { id: 'shader_73', intensity: 7.30 };

export const CustomShaderPreset_74 = { id: 'shader_74', intensity: 7.40 };

export const CustomShaderPreset_75 = { id: 'shader_75', intensity: 7.50 };

export const CustomShaderPreset_76 = { id: 'shader_76', intensity: 7.60 };

export const CustomShaderPreset_77 = { id: 'shader_77', intensity: 7.70 };

export const CustomShaderPreset_78 = { id: 'shader_78', intensity: 7.80 };

export const CustomShaderPreset_79 = { id: 'shader_79', intensity: 7.90 };
