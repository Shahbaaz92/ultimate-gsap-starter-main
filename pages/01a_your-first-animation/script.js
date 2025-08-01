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
      repeat: 3,
      onComplete: () => {
        gsap.to(".card", {
          y: 0,
          x: -30,
          repeat: -1,
          yoyo: true,
          duration: 0.3,
        });
      },
    });
  },
});
