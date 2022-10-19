import { Divider } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { User } from "modules/users/application";

import { InfoContent } from "./InfoContent";
import { MobileInfoContent } from "./MobileInfoContent";

interface IProps {
  user: User;
}

export const BasicInfoSection = ({ user }: IProps) => {
  const isMobile = useCheckMobile();

  return (
    <>
      {isMobile ? (
        <MobileInfoContent
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ) : (
        <InfoContent
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      )}
      <Divider />
    </>
  );
};
