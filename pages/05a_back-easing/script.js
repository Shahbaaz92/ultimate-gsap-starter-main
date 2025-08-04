//TODO - Back Easing

//Back easing adds a bit of rebound to the motion. It feels like the animated element overreaches its target, then gently corrects itself.

//! Types
//ease: "back.in"      // pulls backward first, then moves forward
//ease: "back.out"     // moves past the destination, then comes back
//ease: "back.inOut"   // combines both: pulls back, overshoots, settles

//*You can also customize how much it should overshoot,
//ease: "back.out(2.5)" // higher number = more dramatic bounce

//? When to use?
// You can use back easing when something is entering with flair (modals, cards, tooltips), snapping to position (like tabs or buttons reacting), or reacting to an interaction (press, hover, focus).

import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active"));
