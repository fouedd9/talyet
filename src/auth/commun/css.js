import { Button, Flex, Text } from "@fluentui/react-northstar";
import styled from "styled-components";

export const HeaderText = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
`;
export const SecondaryText = styled(Text)`
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;
export const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 350px;

  padding: 16px 16px 16px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  transition: all 0.2s ease;
  outline: none;
  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;
export const Content = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 24px;
`;
export const EmailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px;
`;

export const PasswordBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ConfirmPasswordBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  padding: 16px;
  /* background: ; */
  background: ${({ isValid }) =>
    isValid
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "linear-gradient(135deg, #eff0f3ff 0%, #bebbc1ff 100%)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};
  transition: all 0.01s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  margin-top: 8px;
  &:hover {
    background: ${({ isValid }) =>
      isValid && "linear-gradient(135deg, #6d83e8ff 0%, #7b53a4ff 100%)"};
    color: white;
    font-size: ${({ isValid }) => (isValid ? "17px" : "16px")};
    font-weight: ${({ isValid }) => (isValid ? "600" : "500")};
  }
`;

export const IconPosition = styled(Flex)`
  position: absolute;
  right: 80px;
  z-index: 50;
  margin-left: 12px;
  background-color: transparent;
  padding: 8px;
`;

export const SignUpButton = styled(Text)`
  background: none;
  border: none;
  color: #667eea;
  width: fit-content;
  margin: 0px;
  padding-inline-start: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 14px;
  &:hover {
    color: #5a67d8;
  }
`;

export const SwitchText = styled(Text)`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  /* margin-top: 8px; */
`;
