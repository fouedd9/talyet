import { Button, Dialog, Flex } from "@fluentui/react-northstar";
import React from "react";
import { Input, Label } from "../../auth/commun/css";

export const EditProfile = () => {
  return (
    <Dialog
      styles={{ width: "800px" }}
      fluid
      header={"Modifier mon profil"}
      content={<Content />}
      trigger={<Button content={"Modifier mon profil"} />}
    />
  );
};

const Content = () => {
  return (
    <Flex space="between" fill>
      <Flex fluid column>
        <Label>Email</Label>
        <Input placeholder="name" />
      </Flex>
      <Flex fluid column>
        <Label>Email</Label>
        <Input placeholder="name" />
      </Flex>
    </Flex>
  );
};
