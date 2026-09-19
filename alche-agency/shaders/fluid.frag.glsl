precision highp float;

uniform float uTime;
uniform vec2 uMouse;       // 0..1
uniform vec2 uResolution;  // px
uniform float uScroll;     // 0..1
uniform float uVelocity;   // scroll delta

varying vec2 vUv;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
}

float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for(int i=0; i<5; i++){
    v += a * noise(p);
    p *= 2.03;
    a *= 0.52;
  }
  return v;
}

vec3 palette(float t){
  vec3 a = vec3(0.50, 0.50, 0.52);
  vec3 b = vec3(0.50, 0.48, 0.45);
  vec3 c = vec3(1.00, 1.00, 1.00);
  vec3 d = vec3(0.10, 0.35, 0.70);
  return a + b*cos(6.28318*(c*t+d));
}

void main(){
  vec2 uv = vUv;

  // aspect correction for nicer flow
  float aspect = uResolution.x / max(1.0, uResolution.y);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0);
  float vel = clamp(abs(uVelocity) * 0.002, 0.0, 1.0);

  // Flow field: scroll influences direction, mouse influences pressure
  float t = uTime * 0.25 + uScroll * 1.25;
  float n1 = fbm(p * 2.2 + vec2(0.0, t));
  float n2 = fbm(p * 3.1 - vec2(t, 0.0));

  vec2 flow = vec2(n1 - 0.5, n2 - 0.5);
  flow += (p - m) * 0.18; // subtle “lens” pull around cursor

  float strength = 0.10 + 0.22 * vel;
  vec2 duv = uv + flow * strength;

  // Chromatic aberration: sample “palette” with slightly shifted coordinates
  float ab = 0.012 + 0.03 * vel;
  float kR = fbm((duv + vec2( ab, 0.0) - 0.5) * vec2(aspect,1.0) * 3.0 + t);
  float kG = fbm((duv + vec2( 0.0, 0.0) - 0.5) * vec2(aspect,1.0) * 3.0 + t);
  float kB = fbm((duv + vec2(-ab, 0.0) - 0.5) * vec2(aspect,1.0) * 3.0 + t);

  float ir = 0.55 + 0.45 * sin((p.x + p.y) * 2.0 + uTime*0.6);
  vec3 colR = palette(kR + ir + uScroll * 0.15);
  vec3 colG = palette(kG + ir + 0.12);
  vec3 colB = palette(kB + ir + 0.24);

  vec3 col = vec3(colR.r, colG.g, colB.b);

  // vignette + “OLED ink” clamp
  float vig = smoothstep(1.15, 0.25, length(p));
  col *= 0.22 + 0.95 * vig;

  // subtle grain
  float g = hash(uv * (uResolution.xy * 0.35) + uTime) - 0.5;
  col += g * 0.03;

  // keep it dark, holographic
  col = mix(vec3(0.0), col, 0.95);

  gl_FragColor = vec4(col, 1.0);
}
