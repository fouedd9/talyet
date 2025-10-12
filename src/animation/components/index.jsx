import styled from "styled-components";
import { useEffect } from "react";
// import { getAnimation } from "./utils";
import { animate } from "animejs";
const AnimationComponents = () => {
  useEffect(() => {
    // getAnimation();
    animate([".div1", ".div2", ".div3"], {
      translateX: 500,
      rotate: 360,
      width: 500,
      // scale: [1, 6, 0],
      loop: true,
      duration: 5000,
      perspective: 1000,
      easing: "easeInOutQuad",
    });
  });

  return (
    <Header>
      <Carreau1 className="div1"></Carreau1>
      <Carreau2 className="div2"></Carreau2>
      <Carreau3 className="div3"></Carreau3>
    </Header>
  );
};

export default AnimationComponents;

const Header = styled.div`
  display: flex;
  padding: 32px;
  height: 100vh;
  flex-direction: column;
`;

const Carreau1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 10%;
`;

const Carreau2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 10%;
`;

const Carreau3 = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 10%;
`;
