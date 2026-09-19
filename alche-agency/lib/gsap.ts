"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let registered = false;

export function ensureGSAP() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}
