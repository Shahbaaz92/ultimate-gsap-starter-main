//TODO -  .set() method

//The .set method is used to define the initial state of an element for animations.
// It can set properties such as opacity, scale, and positional values (X, Y) without any animation effect.
// Use gsap.set to position elements off-screen, preparing them for their animated entrance.
// You can define the direction from which an element enters the viewport by manipulating its initial position values.
// .set is akin to placing an object on a stage, making it invisible to the audience until the animation occurs.

import gsap from "gsap";

gsap.set(".gsap-box", { opacity: 0, scale: 0.5, y: 500, x: -500 });

gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  duration: 2,
  ease: "expo.out",
});
