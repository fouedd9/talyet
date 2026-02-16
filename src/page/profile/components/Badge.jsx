import { Text } from "@fluentui/react-northstar";
import styled from "styled-components";

const Badge = styled(Text)`
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: ${({ $color }) => $color};
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
`;

export const _getRole = (role) => {
  switch (role) {
    case 4:
      return (
        <Badge $bgcolor={"#C3C4f8"} $color="#1417c5ff">
          Ressource humaine
        </Badge>
      );
    case 1:
      return (
        <Badge $bgcolor={"rgb(156, 202, 20)"} $color="#0c411fff">
          admin
        </Badge>
      );
    case 3:
      return (
        <Badge $bgcolor={"#99d6afff"} $color="#0c411fff">
          Manager
        </Badge>
      );
    case 2:
      return (
        <Badge $bgcolor={"#7ed9deff"} $color="#083e41ff">
          Collaborateur
        </Badge>
      );
    case 6:
      return (
        <Badge $bgcolor={"#bb4d70ff"} $color="#fafafaff">
          Admin
        </Badge>
      );
    default:
      return <Badge>Inconnu</Badge>;
  }
};
