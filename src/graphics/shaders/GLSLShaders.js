export const BasicShader = {
  vertex: `#version 300 es
    layout(location = 0) in vec2 a_position;
    layout(location = 1) in vec2 a_texCoord;
    layout(location = 2) in vec4 a_color;

    uniform mat4 u_projection;
    uniform mat4 u_view;

    out vec2 v_texCoord;
    out vec4 v_color;

    void main() {
      v_texCoord = a_texCoord;
      v_color = a_color;
      gl_Position = u_projection * u_view * vec4(a_position, 0.0, 1.0);
    }
  `,
  fragment: `#version 300 es
    precision mediump float;

    in vec2 v_texCoord;
    in vec4 v_color;

    uniform sampler2D u_texture;
    out vec4 fragColor;

    void main() {
      vec4 texColor = texture(u_texture, v_texCoord);
      fragColor = texColor * v_color;
    }
  `
};

export const DynamicLightingShader = {
  vertex: `#version 300 es
    layout(location = 0) in vec2 a_position;
    layout(location = 1) in vec2 a_texCoord;
    layout(location = 2) in vec4 a_color;

    uniform mat4 u_projection;
    uniform mat4 u_view;

    out vec2 v_texCoord;
    out vec4 v_color;
    out vec2 v_worldPos;

    void main() {
      v_texCoord = a_texCoord;
      v_color = a_color;
      v_worldPos = a_position;
      gl_Position = u_projection * u_view * vec4(a_position, 0.0, 1.0);
    }
  `,
  fragment: `#version 300 es
    precision mediump float;

    in vec2 v_texCoord;
    in vec4 v_color;
    in vec2 v_worldPos;

    uniform sampler2D u_texture;
    uniform vec3 u_ambientLight;
    
    // Support up to 8 dynamic point lights
    #define MAX_LIGHTS 8
    uniform int u_numLights;
    uniform vec2 u_lightPos[MAX_LIGHTS];
    uniform vec3 u_lightColor[MAX_LIGHTS];
    uniform float u_lightRadius[MAX_LIGHTS];
    uniform float u_lightIntensity[MAX_LIGHTS];

    out vec4 fragColor;

    void main() {
      vec4 baseColor = texture(u_texture, v_texCoord) * v_color;
      vec3 lightAccum = u_ambientLight;

      for (int i = 0; i < MAX_LIGHTS; i++) {
        if (i >= u_numLights) break;
        float dist = distance(v_worldPos, u_lightPos[i]);
        if (dist < u_lightRadius[i]) {
          float atten = 1.0 - smoothstep(0.0, u_lightRadius[i], dist);
          lightAccum += u_lightColor[i] * (atten * u_lightIntensity[i]);
        }
      }

      fragColor = vec4(baseColor.rgb * lightAccum, baseColor.a);
    }
  `
};
