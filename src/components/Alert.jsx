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
    <AlertContent type={status}>
      <TextAlert>{content}</TextAlert>
      <CloseIcon
        styles={{ color: "rgba(176, 81, 97, 0.9)", cursor: "pointer" }}
        onClick={() => SetDisplayAlert(false)}
      />
    </AlertContent>
  );
}

const AlertContent = styled.div`
  padding: 4px;
  background-color: ${(type) => (type === "success" ? "#d4edda" : " #f8d7da")};
  border-radius: 4px;
  margin-top: 12px;
  color: white;
  text-align: center;
  outline: 2px solid rgba(176, 81, 97, 0.9);
  padding-inline: 32px 16px;
  display: flex;
  gap: 34px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TextAlert = styled.p`
  margin: 0;
  color: rgba(176, 81, 97, 0.9);
  font-size: 14px;
  padding-left: 24px;
  font-weight: 600;
`;

const Close = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  color: black;
  outline: 1px solid #b6b3b3ff;
  padding: 4px 8px;
  border-radius: 50%;
  background-color: #dedede;
  &:hover {
    background-color: #c4c4c4;
  }
`;
