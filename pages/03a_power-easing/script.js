//TODO - Power Easing

import gsap from "gsap";
gsap.to(".box", {
  x: 300,
  duration: 1,
  ease: "none",
});

//These are your bread-and-butter easings. They describe how quickly the animation accelerates or decelerates.

//! They come in four variations:
// power1 (gentle)
// power2 (medium)
// power3 (strong)
// power4 (aggressive)

//! And they each come in 3 directions:
//ease: "power2.in"    // starts slow, ends fast
//ease: "power2.out"   // starts fast, ends slow
//ease: "power2.inOut" // slow → fast → slow

//The higher the number, the more intense the curve. You can almost hear the motion in these names.

//* So, in ramps in. out eases out. inOut glides through.

//! When to Use?
// Use them when you want natural motion but still controlled and UI-friendly.

// They’re usually great for button hover effects, modals sliding in, cards or panels entering the screen, toasts, and notifications.

//! TIPS
//If something needs quick feedback → Use power1 or power2
// If it’s a main UI element entering → Use power3 or power4
// For balanced, natural flows → Use power2.inOut
