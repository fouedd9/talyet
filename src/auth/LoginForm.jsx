import {
  Button,
  EyeIcon,
  EyeSlashIcon,
  Flex,
  Loader,
  Text,
  // Input,
} from "@fluentui/react-northstar";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "./api/Login";
import Alert from "../components/Alert";
import {
  Content,
  EmailBlock,
  HeaderText,
  IconPosition,
  Input,
  Label,
  LoginButton,
  PasswordBlock,
  SecondaryText,
  SignUpButton,
  SwitchText,
} from "./commun/css";
import { useForm } from "react-hook-form";

const LoginForm = ({ setSwitchUi }) => {
  const [displayAlert, SetDisplayAlert] = useState(false);
  /**
   * Here
   */

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm();

  /**
   * Here
   */
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => Auth(data),
  });

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      setStatus({ type: "error", message: "Please fill all the fields" });
      SetDisplayAlert(true);

      return;
    }
    return mutate(data, {
      onSuccess: (res) => {
        setStatus({ type: "success", message: res.message });
        // SetDisplayAlert(true);
        // navigate("/home", { state: { user: res.user } });
        localStorage.setItem("login", JSON.stringify(res));
        navigate("/dashboard");

        console.log("Login successful:", res);
      },
      onError: (error) => {
        setStatus({ type: "error", message: error.message });
        SetDisplayAlert(true);

        console.log("Login erro:", error);
        return;
      },
    });
  };
  return (
    <Flex hAlign="center" fill={true} column>
      <Flex gap="gap.smaller" hAlign="center" column>
        <HeaderText content="Welcome Back" />
        <SecondaryText content="Sign in to your account" />
      </Flex>
      {displayAlert && (
        <Alert
          SetDisplayAlert={SetDisplayAlert}
          status={status.type}
          content={status.message}
          dismissible={true}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Content fill>
          <EmailBlock>
            <Label>Email</Label>
            <Input
              label="larme"
              // type="email"
              {...register("email", { required: true })}
              placeholder="Entrez votre email"
            />
          </EmailBlock>
          <PasswordBlock>
            <Label>Password</Label>
            <Flex vAlign="center">
              <Input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre password"
                icon={<EyeIcon size="medium" />}
              />
              <IconPosition>
                {!showPassword ? (
                  <EyeIcon
                    onClick={() => {
                      showPasswordToggle();
                    }}
                    size="medium"
                  />
                ) : (
                  <EyeSlashIcon
                    onClick={() => {
                      showPasswordToggle();
                    }}
                    size="medium"
                  />
                )}
              </IconPosition>
            </Flex>
          </PasswordBlock>
        </Content>
        <Flex styles={{ paddingInline: "24px" }} fill>
          <LoginButton
            isValid={isValid}
            fluid
            onClick={() => {
              return handleSubmit(onSubmit);
            }}
            disabled={isPending || !isValid}
            loadingPosition="start"
            primary
          >
            <span>Login</span>
            <div style={{ position: "absolute", right: "10px" }}>
              {isPending && <Loader size="smallest" />}
            </div>
          </LoginButton>
        </Flex>
      </form>
      <Flex vAlign="center" styles={{ marginTop: "18px", gap: "0px" }}>
        <SwitchText content="Don't have an account ?" />
        <SignUpButton
          onClick={() => setSwitchUi("register")}
          content="Sign up"
        />
      </Flex>
    </Flex>
  );
};
export default LoginForm;
