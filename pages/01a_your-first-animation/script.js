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
