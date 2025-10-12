import { Button, Flex, Text } from "@fluentui/react-northstar";
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
} from "@fluentui/react-icons";
export const MyProfile = () => {
  return (
    <Profile fill>
      <ProfileContainer column>
        <DashboardHeaderCard space="between" vAlign="center">
          <Flex column gap="gap.small">
            <ProfileTitle content="Mon profil" />
            <DescriptionText content="Gérez vos informations personnelles" />
          </Flex>
          <Flex gap="gap.large">
            <Button content={"Modifier mon profil"} />
            <Logout />
          </Flex>
        </DashboardHeaderCard>
        <DashboardContent column>
          <Flex gap="gap.medium">
            <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/TimDeboer.jpg" />
            <Flex gap="gap.smaller" column>
              <UserName content="Sarrah Johnson" />
              <JobTitle content="Senior Product Designer" />
            </Flex>
          </Flex>
          <Divider />
          <Flex gap="gap.small" column>
            <BioTitle content="A propos" />
            <BioDescription content="Passionate product designer with 5+ years of experience creating user-centered digital experiences. I love turning complex problems into simple, beautiful solutions." />
          </Flex>
        </DashboardContent>
        {/* contact section */}
        <Footer gap="gap.large">
          <ContactCard column fill>
            <ContactHeader vAlign="center" gap="gap.small">
              <ContactCard32Color />
              <ContactTitle content="Contact" />
            </ContactHeader>
            <Divider />
            <Flex column vAlign="center" gap="gap.large">
              <Flex vAlign="center" gap="gap.large">
                <Mail32Color />
                <Flex column>
                  <EmailLabel content="Email" />
                  <EmailText content="sarah.johnson@example.com" />
                </Flex>
              </Flex>
              <Flex vAlign="center" gap="gap.large">
                <Phone32Color />

                <Flex column>
                  <EmailLabel content="Téléphon" />
                  <EmailText content="+1 (555) 123-4567" />
                </Flex>
              </Flex>
            </Flex>
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
                  <EmailText content="123 Main Street, Apt 4B" />
                </Flex>
              </Flex>
              <Flex vAlign="center" gap="gap.large">
                <Agents32Color />

                <Flex column>
                  <EmailLabel content="Ville" />
                  <EmailText content="New York, United States" />
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
                  <EmailText content="28 ans" />
                </Flex>
              </Flex>
              <Flex vAlign="center" gap="gap.large">
                <SlideTextSparkle32Color />

                <Flex column>
                  <EmailLabel content="#Id" />
                  <EmailText content="#1" />
                </Flex>
              </Flex>
            </Flex>
          </ContactCard>
        </Footer>
      </ProfileContainer>
    </Profile>
  );
};

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

const Image = styled.img`
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
  margin-bottom: 20px;
  margin: 0;
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
  padding: 40px;
  backdrop-filter: blur(10px);
  /* width: 1020px; */
  margin-bottom: 24px;
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
