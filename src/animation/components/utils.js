import { animate } from "animejs";

export const getAnimation = () => {
  const testRef = document.querySelector(".div3");

  animate([testRef], {
    // translateX: 500,
    // rotate: 360,
    width: 500,
    // scale: [1, 6, 0],
    loop: true,
    duration: 5000,
    perspective: 1000,
    easing: "easeInOutQuad",
  });
};
