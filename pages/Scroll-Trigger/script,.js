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

//* ⬆️ This tells GSAP, Hey, we’re using ScrollTrigger in this project , make it available!

gsap.to(".box", {
  x: 500,
  rotate: 360,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box", //We’re telling ScrollTrigger, ‘Watch the .box element to decide when to start the animation.’
    start: "top center", //Means, ‘When the top of the .box hits the center of the viewport, that’s the moment to begin the animation.’
    end: "bottom 20%", // Similar to start
    markers: true, //This shows little start and end markers right on the screen, so you can see exactly where your trigger points are. Super helpful for debugging!
    // scrub: true, // This is the magic!
    scrub: 1.5, //Giving smoothing effect
  },
});

//* Understanding the start and end Properties
//Two of the most important properties in ScrollTrigger are start and end. These define exactly when your animation begins and ends in relation to the viewport and the trigger element.

//* start Property
// This defines when the animation should begin. It’s written as a string like "top center", "bottom top", etc., and combines two parts:
// First part : relates to the trigger element (top, center, bottom).
// Second part : relates to the viewport (top, center, bottom).

//* end Property
//It follows the same structure as start. If you don’t set end.
//Example :  end: "bottom 20%" means “end the animation when the bottom of the trigger element hits 20% from the top of the viewport.”

//! For simple one-time animations (like our .to() example), start is often enough. But for scroll-synced effects or pinning, you’ll want to define both start and end to fine-tune exactly when things should happen.

//*Scrubbing the Animation
//How it works:
// As you scroll down, the .box smoothly moves to the right and spins around.
// As you scroll up, it smoothly goes back to its starting position and rotation.
// It’s perfectly in sync with your scroll - no lag, no delay.

//* If you want to make the scrub feel even smoother, you can set it to a number, like scrub: 1.5. This tells GSAP to add a 1.5-second smoothing effect to the scroll, giving you an ultra-polished feel!

//! Important Note:
// When using scrub, you always need to define an end value for ScrollTrigger. Without an end, there’s no scroll distance for GSAP to scrub along, so the animation wouldn’t have that smooth, tied-to-scroll feel we’re going for!
