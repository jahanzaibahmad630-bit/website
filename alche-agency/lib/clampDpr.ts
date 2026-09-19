export function clampDpr(dpr: number, min = 1, max = 1.75) {
  return Math.min(max, Math.max(min, dpr));
}
