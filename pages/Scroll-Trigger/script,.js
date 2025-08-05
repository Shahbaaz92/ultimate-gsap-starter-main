//Todo - Learn ScrollTrigger()

//ScrollTrigger watches the scroll position
// It decides when and how your animations should run
// And it’s super flexible - you can make things pin, scrub, snap, or just reveal smoothly.

//? What Makes It So Powerful?
// Infinitely flexible: you can link animations to scroll progress or just trigger them when elements enter the viewport.
// Scrub: the animation can play along with the scroll, like a video timeline that follows your finger.
// Pin: you can freeze a section in place while everything else scrolls around it—think sticky hero sections or dramatic parallax reveals.
// Snap: you can make the scroll snap to certain points—like carousels or full-screen sections that click into place.
//Beyond animation: you’re not limited to tweens—ScrollTrigger can even fire callbacks, update classes, or run any JavaScript when scroll events happen.

import gsap from "gsap";

//! First, because ScrollTrigger is an extra plugin for GSAP, we need to register it.

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  rotate: 360,
  duration: 3,
  ease: "power2.out",
});
