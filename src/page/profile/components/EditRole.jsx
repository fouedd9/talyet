import {
  CheckmarkCircle32Color,
  DismissCircle32Color,
} from "@fluentui/react-icons";
import { Button, Dropdown, Flex } from "@fluentui/react-northstar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { _api_changeMyRole, _api_getAllRoles } from "../api";
import { useState } from "react";

export const EditRole = ({ userId }) => {
  const [role, setRole] = useState(null);

  const { data } = useQuery({
    queryKey: ["get_all_roles"],
    queryFn: () => _api_getAllRoles(),
  });

  const { mutate } = useMutation({
    mutationFn: (roleId) => _api_changeMyRole(roleId, userId),
  });

  const items = data?.map((el) => ({
    id: el.id,
    header: el.name,
  }));

  const validateNewRole = () => {
    return mutate(role);
  };

  return (
    <Flex column>
      <Dropdown
        checkable
        value={role}
        onChange={(e, item) => {
          setRole(item.value);
          return;
        }}
        fluid
        items={items}
      />
      <Flex hAlign="end">
        <Button iconOnly icon={<DismissCircle32Color />} />
        <Button
          onClick={() => validateNewRole(role)}
          iconOnly
          icon={<CheckmarkCircle32Color />}
        />
      </Flex>
    </Flex>
  );
};
