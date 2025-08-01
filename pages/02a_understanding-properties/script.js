import gsap from "gsap";
gsap.to(".box", {
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  duration: 5,
  delay: 1,
  scale: 0.95,
  x: 200,
  y: -100,
  ease: "power1.inOut",
});
