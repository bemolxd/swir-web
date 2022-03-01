import { withSuspense } from "components/RemoteData";

import { useItemDetailsQuery } from "modules/items/infrastructure";

interface IProps {
  itemId: string;
}

export const Content = withSuspense(({ itemId }: IProps) => {
  const itemDetails = useItemDetailsQuery(itemId);

  return <div>{itemDetails?.name}</div>;
});
