import { Pagination } from "components/Pagination";
import { withSuspense } from "components/RemoteData";

import { OrdersList } from "modules/userOrders/presentation";
import { useUserDetailOrdersQuery } from "modules/users/infrastructure";

interface IProps {
  userId: string;
}

export const CasualList = withSuspense(({ userId }: IProps) => {
  const orders = useUserDetailOrdersQuery(userId);

  return (
    <>
      <OrdersList orders={orders?.collection!} />
      <Pagination meta={orders?.meta} />
    </>
  );
});
