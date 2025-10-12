import { useEffect, useState } from "react";
import styled from "styled-components";

import { Flex } from "@fluentui/react-northstar";
import { Navigate } from "react-router-dom";
import LoginForm from "../../auth/LoginForm";
import RegisterForm from "../../auth/RegisterForm";

const Authentification = () => {
  const [switchUi, setSwitchUi] = useState("login");

  // verify if is user login if yes redirect to dashbboard
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("login"));
    const token = storage?.accessToken;
    console.log({ storage });
    if (token) {
      // Optionnel : vérifier côté backend que le token est valide
      fetch("/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include", // pour envoyer le cookie refresh
      }).then((res) => {
        if (res.ok) {
          Navigate("/dashboard");
        }
      });
    }
  });

  return (
    <Container fill style={{ padding: "48px", gap: "12px" }}>
      <MainCard hAlign="center" column>
        {switchUi === "login" ? (
          <LoginForm setSwitchUi={setSwitchUi} />
        ) : (
          <RegisterForm setSwitchUi={setSwitchUi} />
        )}
      </MainCard>
    </Container>
  );
};
export default Authentification;

const MainCard = styled(Flex)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideUp 0.6s ease-out;
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
