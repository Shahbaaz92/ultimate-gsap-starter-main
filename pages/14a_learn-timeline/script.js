//TODO - GSAP TIMELINE

//* The gsap.timeline() method is used to create a timeline instance that sequences multiple animations in a controlled and synchronized manner.

//* A timeline allows developers to chain animations using methods such as .to(), .from(), and .fromTo(), enabling precise control over the order and timing of each animation step.

//! Tip -When you start thinking of animations as a story — not just single effects — timelines become your best friend. They’re the tool that helps you orchestrate everything!

import gsap from "gsap";

//*  const tl = gsap.timeline(); //syntax
//* tl.to(".box", { x: 200, duration: 1 });
//* tl.to(".circle", { y: 100, duration: 1 });

//! By default, the timeline plays automatically. Each new animation waits for the previous one to finish.

//* You’re not limited to .to() — you can also use .from() and .fromTo()! Everything still plays in sequence — no need to juggle delays or timing.

//! Assign your timeline to a variable (like tl) so you can later pause, play, reverse, or loop the entire sequence.

//Todo - Playback control
//* Unlike standalone GSAP animations, which run independently, a timeline groups animations together, allowing for centralized playback control using methods like .play(), .pause(), .reverse(), and .restart().

// Example

// This will be our Html structure, we will add different buttons for different options

// <button class="play-btn">Play</button>
// <button class="pause-btn">Pause</button>
// <button class="reverse-btn">Reverse</button>
// <button class="restart-btn">Restart</button>
// Update your code:

//  Create the timeline
// const tl = gsap.timeline({ paused: true }); // *Start in paused mode!
// tl.fromTo(".box", { x: -300 }, { x: 300, duration: 5 });

//* Button triggers
// The Play button triggers the timeline to start playing
//* document.querySelector(".play-btn").addEventListener("click", () => tl.play());
// The Pause button stops the animation right where it is:
//* document.querySelector(".pause-btn").addEventListener("click", () => tl.pause());
// The Reverse button plays the timeline backwards from the current position:
//* document.querySelector(".reverse-btn").addEventListener("click", () => tl.reverse());
// And the Restart button takes the timeline back to the start and plays it from the beginning:
//* document.querySelector(".restart-btn").addEventListener("click", () => tl.restart());

//Todo - Positioning Timeline

//*Timelines also support features such as relative positioning, overlapping animations using time offsets, labels for navigation, and nesting of other timelines, making them ideal for complex animation sequences.

//*Position Parameter?
// The position parameter is used to tell GSAP:
// Start this animation at this exact time on the timeline.
// It works with .to(), .from(), .fromTo(), and more.
// It’s incredibly flexible - letting you set exact start times, create gaps, overlap tweens, or even use labels!

//* Absolute vs Relative Timings
// In a GSAP timeline, every animation (tween) you add has a start time. By default, tweens are added one after another (sequentially).But you can also control exactly when they start, using absolute or relative timings.

//* Absolute timing : Setting the exact timestamp for when a tween starts in the timeline.
//const tl = gsap.timeline();
// tl.to(".box", { x: 300, duration: 1 }, 0); // starts at 0s
// tl.to(".circle", { y: 300, duration: 1 }, 2); // starts at 2s
//The third parameter (like 0 or 2 above) is the absolute time (in seconds).

//*  Relative Timings
//Instead of setting an exact time, you can tell GSAP to start a tween relative to the end of the previous tween.

// const tl = gsap.timeline();

// tl
// .to(".box", { x: 300, duration: 1 })
// .to(
//   ".circle",
//   { y: 300, duration: 1 },
//   "+=3"
// ); // starts 3s after .box finishes

//+=3 means start 3 seconds later.
//You can also use -=3 to start 3 seconds earlier.

//* Negative Relative Position
// A negative relative value like -=0.5 tells GSAP:
// Start this tween before the previous one ends, to get a seamless overlaps that makes animations feel polished and professional.

//const tl = gsap.timeline();
// tl.to(".box", { x: 300, duration: 2 }) // .box moves to the right in 2s
//   .to(".circle", { y: 300, duration: 1 }, "-=0.5"); // .circle moves down, starts 0.5s before .box ends

//*Relative to Others – Precise Timeline Control
//Sometimes you want to anchor an animation directly to another - no guesswork, no math.
//That’s where the Relative to Others position parameter comes in!

//In GSAP, "<" and ">" are special symbols that reference the previous tween in the timeline:
//* "<" -	Start at the start of the previous tween.
//const tl = gsap.timeline();
// tl.to(".box", { x: 300, duration: 2 }) // box animates for 2s
//   .to(".circle", { y: 300, duration: 1 }, "<"); // circle starts at same time as box

//">"	- Start at the end of the previous tween.
//const tl = gsap.timeline();

//tl.to(".box", { x: 300, duration: 2 }) // box animates for 2s
//.to(".circle", { y: 300, duration: 1 }, ">"); // circle starts when box ends

//*Fine-tuning with Offsets
// What if you want an animation to start a bit after or a bit before the start or end of the previous tween? You can add offsets to these relative pointers.

// Example: "<+=0.5" - Starts 0.5 Seconds After Previous Start
//const tl = gsap.timeline();
//tl.to(".box", { x: 300, duration: 2 })
//  .to(".circle", { y: 300, duration: 1 }, "<+=0.5"); // starts 0.5s after box starts

//*Percentage-based values
// You can use percentages in your position parameter to base offsets on the total duration of the tween being inserted or the previous tween.

//const tl = gsap.timeline();
//tl.to(".box", { x: 300, duration: 2 })
//  .to(".circle", { y: 300, duration: 1 }, "-=25%"); // starts 25% of circle's duration before box ends, we can also use offsets "<", ">".

//Todo - Stagger in Timelines
//When you use stagger within a timeline, it acts the same way it does in a single tween - adding those nice delays to each item’s animation. But because you’re in a timeline, everything else stays in perfect sync.
