import { useLocation, useNavigate } from "react-router-dom";
import { TabList, Tab, Tabs } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { ContextType } from "types";

import { Card } from "components/Card";
import { useGetContextType } from "components/Auth";
import { useCheckMobile } from "components/Layout";

import { useGetActiveTab } from "./useGetActiveTab";
import { navigationMessages } from "./messages";

export const MainNavigation = () => {
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();

  const contextType = useGetContextType();
  const tabIndex = useGetActiveTab(pathname, contextType!);
  const isMobile = useCheckMobile();

  if (isMobile) return null;

  if (contextType === ContextType.USER) {
    return (
      <Card maxW="200px" w="100%">
        <Tabs orientation="vertical" index={tabIndex}>
          <TabList alignItems="flex-start">
            <NavigationTab
              title={formatMessage(navigationMessages.items)}
              path="/sprzet"
            />
            <NavigationTab
              title={formatMessage(navigationMessages.userOrders)}
              path="/zgloszenia"
            />
            <NavigationTab
              title={formatMessage(navigationMessages.reservations)}
              path="/rezerwacje"
            />
          </TabList>
        </Tabs>
      </Card>
    );
  }

  return (
    <Card maxW="200px" w="100%">
      <Tabs orientation="vertical" index={tabIndex}>
        <TabList alignItems="flex-start">
          <NavigationTab
            title={formatMessage(navigationMessages.users)}
            path="/uzytkownicy"
          />
        </TabList>
      </Tabs>
    </Card>
  );
};

interface NavigationProps {
  path: string;
  title: string;
}

const NavigationTab = ({ path, title }: NavigationProps) => {
  const navigate = useNavigate();

  return <Tab onClick={() => navigate(path)}>{title}</Tab>;
};
