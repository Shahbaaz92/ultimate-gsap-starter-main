//TODO - Sine Easing

//It is a subtle, wave-like easing group, perfect for small UI transitions that should feel smooth but not dramatic.

//ease: "sine.in"     // slow start, then speeds up (like a sine wave rising)
//ease: "sine.out"    // starts fast, then slows down softly
//ease: "sine.inOut"  // smooth ease in and out, very natural flow

//*When to use?
// Use sine easings when you want the animation to support the interface and not steal attention.

// You can use it for modals, side panels or drawers, tabs, carousels, hover transitions, or any subtle looping effect.

//? Power or Sine ease : Sine is more gentle. It has no hard acceleration or deceleration. Whereas, Power gives you more control over “curve intensity” (with levels from 1 to 4), so you can dial in how aggressive or subtle you want things to be.

import gsap from "gsap";

const scrollTopBtn = document.querySelector(".scroll-to-top");
let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("show");

    if (!isFloating) {
      gsap.to(scrollTopBtn, {
        y: -100,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      });
      isFloating = true;
    }
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("mouseenter", () => {
  gsap.to(scrollTopBtn, { scale: 1.1, duration: 0.2 });
});

scrollTopBtn.addEventListener("mouseleave", () => {
  gsap.to(scrollTopBtn, { scale: 1, duration: 0.2 });
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
