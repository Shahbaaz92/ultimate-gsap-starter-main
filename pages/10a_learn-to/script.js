//TODO - gsap.to()

//The gsap.to() method is used to animate elements from their current state to a new state.

//The gsap.to() method is similar to the gsap.from() method, but the difference is that the gsap.to() method animates elements from their current state to a new state, while the gsap.from() method animates elements from a new state to their current state.

//? Why .to() Is So Powerful
//You don’t need to know where your element starts — GSAP figures it out automatically!
//You can animate multiple properties at once (like x, y, opacity, scale...).
//You can chain .to() animations together for complex motion!

//*🧠 Some Key Notes
// Not limited to CSS — you can animate any numeric or color property!
// CamelCase — when animating things like backgroundColor, use camelCase (not CSS hyphens).
// Callbacks — you can hook into events like when animation starts, updates, or completes.

import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -20,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",

    //gsap.to() has methods like onComplete, onStop, onStart, onUpdate, onRepeat etc.

    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power.in",
        onComplete: () => {
          setTimeout(showToastLoop, 2500);
        },
      });
    },
  });
};

showToastLoop();
