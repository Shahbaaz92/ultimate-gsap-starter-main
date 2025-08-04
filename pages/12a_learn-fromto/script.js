//TODO - Learn GsapFrom
// The gsap.fromTo() method is used to animate elements from a new state to a new state.

// The gsap.fromTo() method is similar to the gsap.from() and gsap.to() methods, but the difference is that the gsap.fromTo() method animates elements from a new state to a new state, while the gsap.from() method animates elements from a new state to their current state, and the gsap.to() method animates elements from their current state to a new state.

import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.6,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.1,
    }
  );
});
