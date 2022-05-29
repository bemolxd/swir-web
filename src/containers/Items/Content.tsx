import { useCheckMobile } from "components/Layout";

import { InfiniteItemsList } from "modules/items/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  if (isMobile) return <InfiniteItemsList />;

  return <CasualList />;
};
