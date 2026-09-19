precision highp float;

uniform sampler2D uTex;
uniform float uTime;
uniform vec2 uMouse;     // 0..1 within plane
uniform float uHover;    // 0..1
varying vec2 vUv;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

void main(){
  vec2 uv = vUv;

  vec2 m = uMouse - 0.5;
  float d = length((uv - 0.5) - m);

  float ripple = sin((d * 18.0 - uTime * 3.0)) * 0.015 * uHover;
  float grain = (hash(uv + uTime) - 0.5) * 0.02;

  // chromatic shift
  float ab = 0.006 * uHover;
  vec2 duv = uv + normalize((uv - 0.5) + m * 0.35) * ripple;

  vec3 c;
  c.r = texture2D(uTex, duv + vec2( ab, 0.0)).r;
  c.g = texture2D(uTex, duv).g;
  c.b = texture2D(uTex, duv + vec2(-ab, 0.0)).b;

  c += grain * uHover;

  gl_FragColor = vec4(c, 1.0);
}
