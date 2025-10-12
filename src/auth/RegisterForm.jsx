import { EyeIcon, EyeSlashIcon, Flex, Text } from "@fluentui/react-northstar";
import React, { useState } from "react";
import {
  Content,
  EmailBlock,
  HeaderText,
  Input,
  Label,
  NameBlock,
  PasswordBlock,
  SecondaryText,
  IconPosition,
  ConfirmPasswordBlock,
  LoginButton,
  SignUpButton,
  SwitchText,
} from "./commun/css";
import { useForm } from "react-hook-form";
import Alert from "../components/Alert";
import { useMutation } from "@tanstack/react-query";
import { _api_Register } from "./api/Register";
const RegisterForm = ({ setSwitchUi }) => {
  const [showPassword, SetshowPassword] = useState(false);
  const [showConfirmPassword, SetshowConfirmPassword] = useState(false);
  const [displayAlert, SetDisplayAlert] = useState(false);
  const [alertMessage, SetAlertMessage] = useState("");

  const { mutate } = useMutation({
    mutationFn: (data) => _api_Register(data),
    onSuccess: () => {
      SetDisplayAlert(true);
      SetAlertMessage("Succeful creation");
      setSwitchUi("login");
    },
    onError: (err) => {
      console.log(err);
      SetAlertMessage(err.message);
      SetDisplayAlert(true);
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm();
  const onSubmit = (data) => {
    if (data.confirmPassword !== data.password) {
      SetAlertMessage("les 2 mots de passe ne sont pas identiques");
      return SetDisplayAlert(true);
    }
    if (isValid) {
      const { confirmPassword: _, ...cleanData } = data;
      return mutate(cleanData);
    }
    // return console.log(data);
  };

  const showPasswordToggle = () => {
    SetshowPassword(!showPassword);
  };
  const showConfirmPasswordToggle = () => {
    SetshowConfirmPassword(!showConfirmPassword);
  };

  const Password = watch("password");
  const ConfirmPassword = watch("ConfirmPassword");
  Password === ConfirmPassword ? console.log(true) : console.log(false);

  return (
    <div>
      {displayAlert && (
        <Alert
          dismissible={true}
          SetDisplayAlert={SetDisplayAlert}
          // content={"Attention les deux mots de passe ne sont pas identiques"}
          content={alertMessage}
        />
      )}
      <Flex column>
        <Flex column gap="gap.smaller" hAlign="center">
          <HeaderText content="Create account" />
          <SecondaryText content="Join us today and get started" />
        </Flex>
        <Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap="gap.medium" column>
              <NameBlock>
                <Label>Full Name</Label>
                <Input
                  {...register("name", { required: true, minLength: 4 })}
                  type="text"
                  placeholder="Add your name"
                />
              </NameBlock>
              <EmailBlock>
                <Label>Email</Label>
                <Input
                  type="email"
                  {...register("email")}
                  // value={login.email}
                  placeholder="Entrez votre email"
                />
              </EmailBlock>
              <PasswordBlock>
                <Label>Password</Label>
                <Flex vAlign="center">
                  <Input
                    {...register("password", {
                      required: true,
                      minLength: 4,
                    })}
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
              <ConfirmPasswordBlock>
                <Label>Confirm Password</Label>
                <Flex vAlign="center">
                  <Input
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 4,
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Entrez votre password"
                    icon={<EyeIcon size="medium" />}
                  />
                  <IconPosition>
                    {!showConfirmPassword ? (
                      <EyeIcon
                        onClick={() => {
                          showConfirmPasswordToggle();
                        }}
                        size="medium"
                      />
                    ) : (
                      <EyeSlashIcon
                        onClick={() => {
                          showConfirmPasswordToggle();
                        }}
                        size="medium"
                      />
                    )}
                  </IconPosition>
                </Flex>
              </ConfirmPasswordBlock>
              <Flex fill>
                <LoginButton
                  fluid
                  isValid={isValid}
                  onClick={() => handleSubmit(onSubmit)}
                >
                  Create account
                </LoginButton>
              </Flex>
            </Flex>
          </form>
          <Flex
            hAlign="center"
            vAlign="center"
            styles={{ marginTop: "18px", gap: "0px" }}
          >
            <SwitchText content="Already have an account ?" />
            <SignUpButton
              onClick={() => setSwitchUi("login")}
              content="Sign in"
            />
          </Flex>
        </Content>
      </Flex>
    </div>
  );
};

export default RegisterForm;
