//TODO - Learn GsapFrom
// The gsap.from() method is used to animate elements from a new state to their current state.

// The gsap.from() method is similar to the gsap.to() method, but the difference is that the gsap.from() method animates elements from a new state to their current state, while the gsap.to() method animates elements from their current state to a new state.

import gsap from "gsap";

// gsap.from(".card-1", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 1,
//   delay: 0.3,
//   ease: "power4.out",
// });
// gsap.from(".card-2", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 1,
//   delay: 0.6,
//   ease: "power4.out",
// });
// gsap.from(".card-3", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 1,
//   delay: 0.9,
//   ease: "power4.out",
// });

const repeat = document.querySelector(".repeat");

//you can name your animation and then restart it whenever you want.
const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 1,
  delay: 0.3,
  ease: "power4.out",
  stagger: 0.2, //Stagger property
});

repeat.addEventListener("click", () => {
  animation.restart();
});
