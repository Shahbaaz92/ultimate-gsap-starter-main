//* Pinning the Animaation
// Pinning an element means it stays fixed in the viewport while you scroll past it.
// It’s like it’s anchored temporarily before letting the page continue.

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pin-container",
  start: "top center",
  end: "+=500",
  pin: ".box", // the element to be pinned
  markers: true,
});
