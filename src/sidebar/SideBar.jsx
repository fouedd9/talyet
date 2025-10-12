import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Flex } from "@fluentui/react-northstar";
import {
  Agents32Color,
  ArrowExit28Filled,
  ArrowExitFilled,
  PeopleTeam28Color,
  Person32Color,
  Poll32Color,
  ShareIos32Color,
} from "@fluentui/react-icons";
import { _api_logout } from "../auth/api/Logout";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "220px" : "70px")};
  background-color: #111827;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  z-index: 1000;
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  padding: 1rem;
  border-bottom: 1px solid #1f2937;
`;

const LogoText = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f9fafb;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  flex-grow: 1;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.isOpen ? "1rem" : "0")};
  padding: 12px 20px;
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;

  &.active {
    background-color: #1f2937;
    color: white;
  }

  &:hover {
    background-color: #1f2937;
    color: white;
  }

  svg {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  span {
    display: ${(props) => (props.isOpen ? "inline" : "none")};
    white-space: nowrap;
  }
`;

const BottomSection = styled.div`
  padding: 1rem;
  border-top: 1px solid #1f2937;
  text-align: ${(props) => (props.isOpen ? "left" : "center")};
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContainer isOpen={isOpen}>
      {/* Haut du sidebar */}
      <TopSection isOpen={isOpen}>
        <LogoText isOpen={isOpen}>MyApp</LogoText>
        <ToggleButton onClick={toggleSidebar}>
          {/* <DesignIdeas32Color /> */}
          <Agents32Color />
        </ToggleButton>
      </TopSection>

      {/* Menu principal */}
      <Menu>
        <MenuItem to="/dashboard" isOpen={isOpen}>
          {/* <Apps32Color /> */}
          <Poll32Color />
          <span>Dashboard</span>
        </MenuItem>
        <MenuItem to="/employees" isOpen={isOpen}>
          <PeopleTeam28Color />
          {/* <PeopleCommunity32Color /> */}
          <span>Employés</span>
        </MenuItem>
        <MenuItem to="/profile" isOpen={isOpen}>
          <Person32Color />
          {/* <PeopleCommunity32Color /> */}
          <span>Profile</span>
        </MenuItem>
      </Menu>

      {/* Bas du sidebar */}
      <BottomSection isOpen={isOpen}>
        <MenuItem to="/login" isOpen={isOpen} onClick={() => _api_logout()}>
          <Flex vAlign="center" fill space="between">
            <span>Logout</span>
            <div
              style={{
                padding: "6px ",
                background:
                  "linear-gradient(rgba(216, 210, 215, 0.95), rgba(165, 165, 165, 0.83))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowExit28Filled
                style={{
                  transform: "rotate(180deg)",
                  color: "rgba(204, 27, 133, 0.95)",
                }}
              />
            </div>
          </Flex>
        </MenuItem>
      </BottomSection>
    </SidebarContainer>
  );
};

export default SideBar;
