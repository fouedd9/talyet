import { CloseIcon } from "@fluentui/react-northstar";
import React from "react";
import styled from "styled-components";

export default function Alert({
  status,
  content,
  SetDisplayAlert,
  dismissible = false,
}) {
  console.log("Status in Alert:", status);
  dismissible &&
    setTimeout(() => {
      SetDisplayAlert(false);
    }, 3000);
  return (
    <AlertContent status={status}>
      <TextAlert>{content}</TextAlert>
      <CloseIconStyle status={status} onClick={() => SetDisplayAlert(false)} />
    </AlertContent>
  );
}
const CloseIconStyle = styled(CloseIcon)`
  color: ${({ status }) => (status ? "#669d73ff" : "#c21d2bff")};
  cursor: pointer;
`;
const AlertContent = styled.div`
  padding: 4px;
  background-color: ${({ status }) => (status ? "#d4edda" : "#f8d7da")};
  border-radius: 4px;
  text-align: center;
  outline: 2px solid ${({ status }) => (status ? "#d4edda" : "#f8d7da")};
  color: ${({ status }) => (status ? "#669d73ff" : "#c21d2bff")};
  padding-inline: 32px 16px;
  display: flex;
  gap: 34px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 100px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;

const TextAlert = styled.p`
  margin: 0;

  font-size: 14px;
  padding-left: 24px;
  font-weight: 600;
`;
