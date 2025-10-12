import { ArrowEnterFilled } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-northstar";
import { useMutation } from "@tanstack/react-query";
import { _api_logout } from "./api/Logout";
export default function Logout() {
  const { isLoading, mutate } = useMutation({
    mutationFn: _api_logout,
  });

  return (
    <Button
      loading={isLoading}
      onClick={mutate}
      primary
      content={"Déconnexion"}
      icon={<ArrowEnterFilled />}
    />
  );
}
