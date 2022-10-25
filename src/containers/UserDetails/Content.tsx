import { VStack } from "@chakra-ui/react";

import { Card } from "components/Card";
import { useCheckMobile } from "components/Layout";
import { withSuspense } from "components/RemoteData";

import { useUserDetailsQuery } from "modules/users/infrastructure";
import {
  BasicInfoSection,
  ChangeRoleSection,
  InfiniteUserDetailOrdersList,
  UserDetailsFiltersSection,
} from "modules/users/presentation";

import { CasualList } from "./CasualList";

interface IProps {
  userId: string;
}

export const Content = withSuspense(({ userId }: IProps) => {
  const user = useUserDetailsQuery(userId);
  const isMobile = useCheckMobile();

  return (
    <>
      <Card w="100%">
        <BasicInfoSection user={user!} />
        <ChangeRoleSection user={user!} />
      </Card>
      <UserDetailsFiltersSection />
      <VStack w="100%">
        {isMobile ? (
          <InfiniteUserDetailOrdersList userId={userId} />
        ) : (
          <CasualList userId={userId} />
        )}
      </VStack>
    </>
  );
});
