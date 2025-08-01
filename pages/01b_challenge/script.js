import gsap from "gsap";

gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 3,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  },
});

gsap.to(".card", {
  boxShadow: "0 20px 80px rgba(29, 209, 161, 0.5)",
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut",
});

//Example of selecting elements
//*<div class="circle"></div>
//*<div id="square"></div>
//*<div class="triangle"></div>

//TODO - Your challenge is to practice different ways to select elements using GSAP.

//?Target all three shapes at once
//*gsap.to('.circle, #square, .triangle',{})

//?Target each shape individually and write separate GSAP calls for circle, square, and triangle.
//*gsap.to('.circle',{})
//*gsap.to('#square',{})
//*gsap.to('.triangle',{})

//?Target nested elements
//*gsap.to(".card .title", {});
//*gsap.to(".card .description", {});
