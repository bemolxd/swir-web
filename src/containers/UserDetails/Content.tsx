import { Card } from "components/Card";
import { withSuspense } from "components/RemoteData";

import { OrdersList } from "modules/userOrders/presentation";
import {
  useUserDetailOrdersQuery,
  useUserDetailsQuery,
} from "modules/users/infrastructure";
import {
  BasicInfoSection,
  ChangeRoleSection,
  UserDetailsFiltersSection,
} from "modules/users/presentation";

interface IProps {
  userId: string;
}

export const Content = withSuspense(({ userId }: IProps) => {
  const user = useUserDetailsQuery(userId);
  const orders = useUserDetailOrdersQuery(userId);

  return (
    <>
      <Card w="100%">
        <BasicInfoSection user={user!} />
        <ChangeRoleSection user={user!} />
      </Card>
      <UserDetailsFiltersSection />
      <OrdersList orders={orders?.collection!} />
    </>
  );
});
