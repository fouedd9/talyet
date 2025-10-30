// import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "./api";
import Logout from "../../auth/Logout";
import { Button, Flex } from "@fluentui/react-northstar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
export default function Dashboard() {
  const state = JSON.parse(localStorage.getItem("login"));
  const { user } = useAuthStore();

  console.log({ user1992: user.id });
  const navigate = useNavigate();
  const { isLoading, data, isFetching, error } = useQuery({
    queryKey: ["fetchUserData", user.id],
    queryFn: () => {
      return fetchUserData(state);
    },
    enabled: !!state,
    // retry: false,
    // 💡 Add a safety check: don't run the query if 'state' is null
  });

  if (isLoading || isFetching) {
    console.log("fetching ");
  }
  if (error) {
    console.log("error", error);
  }
  if (data) {
    console.log({ data22: data });
  }

  const ProfileRedirection = () => {
    navigate("/profile");
  };
  return (
    <DashboardContainer vAlign="center" fill space="between">
      <Flex column>
        <h1>Welcome to the Home Page {data?.user?.name}</h1>
        <Button primary onClick={ProfileRedirection} content={"Profile"} />
      </Flex>
      <Logout />
    </DashboardContainer>
  );
}

const DashboardContainer = styled(Flex)`
  padding: 48px;
  max-width: 1440px;
  margin: 0 auto;
`;
