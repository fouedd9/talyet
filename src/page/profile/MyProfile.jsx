import {
  Avatar,
  Button,
  Dialog,
  EditIcon,
  Flex,
  Input,
  Loader,
  Text,
  TextArea,
} from "@fluentui/react-northstar";
import styled from "styled-components";
import Logout from "../../auth/Logout";
import {
  ContactCard32Color,
  BuildingHome32Color,
  Mail32Color,
  Phone32Color,
  PeopleHome32Color,
  Agents32Color,
  Person32Color,
  PersonHeart32Color,
  SlideTextSparkle32Color,
  CheckmarkCircle32Color,
  DismissCircle32Color,
} from "@fluentui/react-icons";
import { useAuthStore } from "../../store/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  _api_Validate_new_bio,
  _api_Validate_new_Phone,
  getMyProfileData,
} from "./api";
import { _getRole } from "./components/Badge.jsx";
import { EditProfile } from "./EditProfile.jsx";
import { useEffect, useState } from "react";
import Alert from "../../components/Alert.jsx";

export const MyProfile = () => {
  const { user } = useAuthStore();
  const { data, refetch } = useQuery({
    queryKey: ["profile_data", user.id],
    queryFn: () => getMyProfileData(user.id),
  });
  // const userConnected = data.userConnected;
  const {
    role,
    id,
    country,
    city,
    address,
    phone,
    email,
    name,
    job_title,
    profile_picture,
    bio,
    age,
  } = data?.userConnected || {};
  const NotFound = (
    <Text
      styles={{ color: "rgba(231, 24, 62, 0.52)" }}
      content="Non renseigné"
    />
  );

  /**
   * USE STATE for Edit profil
   */

  const [phoneNum, SetPhone] = useState(phone ?? null);
  const [displayAlert, SetDisplayAlert] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [showInput, setShowInput] = useState(false);
  const [showEditBio, setShowEditBio] = useState(false);
  const [NewBio, SetNewBio] = useState(bio);
  /**
   * For default Value Input
   */
  useEffect(() => {
    if (phone) {
      SetPhone(phone);
    }
  }, [phone]);

  /**
   * MUTATION FUNCTION EDIT Phone number
   */
  const { mutate: mutateNewPhone } = useMutation({
    mutationFn: (newphone) => _api_Validate_new_Phone(newphone, user.id),
  });
  /**
   * MUTATION FUNCTION
   */

  /**
   * MUTATION NEW BIO
   */
  const { mutate: mutateNewBio } = useMutation({
    mutationFn: () => _api_Validate_new_bio(NewBio, user.id),
    onSuccess: () => {
      setShowEditBio(false);
      refetch();
      return;
    },
  });
  /**
   * MUTATION NEW BIO
   */

  const validateEditPhone = (newPhone) => {
    return mutateNewPhone(newPhone, {
      onSuccess: (data) => {
        console.log({ datae: data });
        setStatus({ type: data.success, message: data.message });
        setShowInput(false);

        SetDisplayAlert(true);
        refetch();
        return;
      },
    });
  };

  const ValidateNewBio = () => {
    return mutateNewBio();
  };

  return (
    <Profile fill>
      <ProfileContainer column>
        {displayAlert && (
          <Alert
            SetDisplayAlert={SetDisplayAlert}
            content={status.message}
            status={status.type}
            dismissible={true}
          />
        )}
        <DashboardHeaderCard space="between" vAlign="center">
          <Flex column gap="gap.small">
            <ProfileTitle content="Mon profil" />
            <DescriptionText content="Gérez vos informations personnelles" />
          </Flex>
          <Flex gap="gap.large">
            <EditProfile />
            <Logout />
          </Flex>
        </DashboardHeaderCard>
        <DashboardContent column>
          <Flex space="between" fill>
            <Flex gap="gap.medium">
              {/* <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/TimDeboer.jpg" /> */}
              <Image size="largest" name={name} image={profile_picture} />
              <Flex gap="gap.smaller" column>
                <UserName content={name} />
                <JobTitle content={job_title ?? NotFound} />
              </Flex>
            </Flex>
            <Flex vAlign="center" gap="gap.small">
              <Text content={_getRole(role)} />
            </Flex>
          </Flex>
          <Divider />
          <Flex gap="gap.small" column>
            <Flex space="between" fill>
              <BioTitle content={"A propos"} />
              <Button
                flat
                iconOnly
                icon={<EditIcon onClick={() => setShowEditBio(true)} outline />}
              />
            </Flex>
            <BioDescription content={bio ?? NotFound} />
            {showEditBio && (
              <Flex fill column>
                <TextAreaStyle
                  defaultValue={bio}
                  onChange={(e) => SetNewBio(e.target.value)}
                  fluid
                  maxLength={150}
                  placeholder="Type here your bio in 150 caracteres"
                />
                <Flex hAlign="end">
                  <Button
                    onClick={() => setShowEditBio(false)}
                    flat
                    icon={<DismissCircle32Color />}
                    content={"Annuler"}
                  />
                  <Button
                    disabled={bio === NewBio}
                    onClick={() => ValidateNewBio()}
                    flat
                    iconPosition="after"
                    icon={<CheckmarkCircle32Color />}
                    content={"Valider"}
                  />
                </Flex>
              </Flex>
            )}
          </Flex>
        </DashboardContent>
        {/* contact section */}
        <Footer gap="gap.large">
          {/* contact  */}
          <ContactCard column gap="gap.large">
            <Flex column fill>
              <Flex space="between">
                <ContactHeader vAlign="center" gap="gap.small">
                  <ContactCard32Color />
                  <ContactTitle content="Contact" />
                </ContactHeader>
                <Button
                  flat
                  iconOnly
                  icon={<EditIcon onClick={() => setShowInput(true)} outline />}
                />
              </Flex>
              <Divider />
              <Flex column vAlign="center" gap="gap.large">
                <Flex vAlign="center" gap="gap.large">
                  <Mail32Color />
                  <Flex column>
                    <EmailLabel content="Email" />
                    <EmailText content={email ?? NotFound} />
                  </Flex>
                </Flex>
                <Flex vAlign="center" gap="gap.large">
                  <Phone32Color />

                  <Flex column>
                    <EmailLabel content="Téléphon" />
                    {!showInput ? (
                      <EmailText content={phone ?? NotFound} />
                    ) : (
                      <Input
                        onChange={(e) => SetPhone(e.target.value)}
                        defaultValue={phoneNum}
                        type="number"
                        // placeholder={"+33 . . . ."}
                      />
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/* buttons  */}
            {showInput && (
              <Flex gap="gap.small" hAlign="center">
                <Button
                  onClick={() => setShowInput(false)}
                  flat
                  iconPosition="after"
                  content={"Annuler"}
                  icon={<DismissCircle32Color />}
                />
                <Button
                  onClick={() => validateEditPhone(phoneNum)}
                  primary
                  flat
                  disabled={phoneNum === phone}
                  iconPosition="after"
                  content={"Valider"}
                  icon={<CheckmarkCircle32Color />}
                />
              </Flex>
            )}
          </ContactCard>
          {/* location  */}
          <ContactCard column fill>
            <ContactHeader vAlign="center" gap="gap.small">
              <BuildingHome32Color />
              <ContactTitle content="Localisation" />
            </ContactHeader>
            <Divider />
            <Flex column vAlign="center" gap="gap.large">
              <Flex vAlign="center" gap="gap.large">
                <PeopleHome32Color />
                <Flex column>
                  <EmailLabel content="Adresse" />
                  <EmailText content={address ?? NotFound} />
                </Flex>
              </Flex>
              <Flex vAlign="center" gap="gap.large">
                <Agents32Color />

                <Flex column>
                  <EmailLabel content="Pays" />
                  <Flex gap="gap.smaller">
                    {city ? (
                      <EmailText content={`${city}`} />
                    ) : (
                      <EmailText content={NotFound} />
                    )}
                    {country ? (
                      <EmailText content={`${country}`} />
                    ) : (
                      <EmailText content={NotFound} />
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ContactCard>
          {/* Personal info */}
          <ContactCard column fill>
            <ContactHeader vAlign="center" gap="gap.small">
              <Person32Color />
              <ContactTitle content="Informations personnelles" />
            </ContactHeader>
            <Divider />
            <Flex column vAlign="center" gap="gap.large">
              <Flex vAlign="center" gap="gap.large">
                <PersonHeart32Color />
                <Flex column>
                  <EmailLabel content="Age" />
                  <EmailText content={age ?? NotFound} />
                </Flex>
              </Flex>
              <Flex vAlign="center" gap="gap.large">
                <SlideTextSparkle32Color />

                <Flex column>
                  <EmailLabel content="#Id" />
                  <EmailText content={id} />
                </Flex>
              </Flex>
            </Flex>
          </ContactCard>
        </Footer>
      </ProfileContainer>
    </Profile>
  );
};

const TextAreaStyle = styled(TextArea)`
  height: 100px;
`;

const ProfileContainer = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
`;

const Profile = styled(Flex)`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`;

const DashboardHeaderCard = styled(Flex)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  /* width: 1020px; */
  margin-bottom: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const DescriptionText = styled(Text)`
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

const DashboardContent = styled(Flex)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  /* width: 1020px; */
  margin-bottom: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Image = styled(Avatar)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid whitesmoke;
`;

const UserName = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.5px;
`;

const JobTitle = styled(Text)`
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  font-weight: 600;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
  margin-block: 32px;
  /* opacity: 0.3; */
`;

const BioTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  /* margin-bottom: 20px; */
  /* margin: 0; */
`;

const BioDescription = styled(Text)`
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
  font-size: 15px;
`;

const ProfileTitle = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.5px;
`;

const Footer = styled(Flex)``;
const ContactCard = styled(Flex)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px 40px 40px 40px;
  backdrop-filter: blur(10px);
  max-width: 1020px;
  width: 380px;
  margin-bottom: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
const ContactHeader = styled(Flex)``;
const ContactTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`;

const EmailLabel = styled(Text)`
  color: #6b7280;
  line-height: 1.6;
  font-size: 15px;
  text-transform: uppercase;
`;
const EmailText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`;
