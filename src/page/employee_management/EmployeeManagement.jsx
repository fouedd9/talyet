import { Flex, Text } from "@fluentui/react-northstar";
import React from "react";
import styled from "styled-components";
import { PeopleCommunity28Color } from "@fluentui/react-icons";
export const EmployeeManagement = () => {
  return (
    <Container fill>
      <Content fill>
        <Header fill space="between">
          <Flex column>
            <Title>Gestion des Utilisateurs</Title>
            <Subtitle>
              Gérez et visualisez tous les utilisateurs de votre organisation
            </Subtitle>
          </Flex>
          <UsersFlex hAlign="center" column>
            <PeopleCommunity28Color />
            <UserLength>16</UserLength>
            <TextStyle>Utilisateurs</TextStyle>
          </UsersFlex>
        </Header>
      </Content>
    </Container>
  );
};

const TextStyle = styled(Text)`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

const UserLength = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
`;

const UsersFlex = styled(Flex)`
  gap: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const Content = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
`;
const Container = styled(Flex)`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`;

const Header = styled(Flex)`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Title = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 4px 0 0 0;
  line-height: 1.5;
`;
