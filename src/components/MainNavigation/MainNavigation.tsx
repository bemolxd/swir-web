import { useLocation, useNavigate } from "react-router-dom";
import { TabList, Tab, Tabs, HStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { ReactElement } from "react";
import {
  MdDevicesOther,
  MdOutlineAllInbox,
  MdOutlineDescription,
  MdOutlineManageAccounts,
} from "react-icons/md";

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
              icon={<MdDevicesOther />}
            />
            <NavigationTab
              title={formatMessage(navigationMessages.userOrders)}
              path="/zgloszenia"
              icon={<MdOutlineDescription />}
            />
            <NavigationTab
              title={formatMessage(navigationMessages.archive)}
              path="/archiwum"
              icon={<MdOutlineAllInbox />}
            />
          </TabList>
        </Tabs>
      </Card>
    );
  }

  // ContextType.GLOBAL
  return (
    <Card maxW="200px" w="100%">
      <Tabs orientation="vertical" index={tabIndex}>
        <TabList alignItems="flex-start">
          <NavigationTab
            title={formatMessage(navigationMessages.items)}
            path="/sprzet"
            icon={<MdDevicesOther />}
          />
          <NavigationTab
            title={formatMessage(navigationMessages.userOrders)}
            path="/zgloszenia"
            icon={<MdOutlineDescription />}
          />
          <NavigationTab
            title={formatMessage(navigationMessages.archive)}
            path="/archiwum"
            icon={<MdOutlineAllInbox />}
          />
          <NavigationTab
            title={formatMessage(navigationMessages.users)}
            path="/uzytkownicy"
            icon={<MdOutlineManageAccounts />}
          />
        </TabList>
      </Tabs>
    </Card>
  );
};

interface NavigationProps {
  path: string;
  title: string;
  icon: ReactElement;
}

const NavigationTab = ({ path, title, icon }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <Tab onClick={() => navigate(path)}>
      <HStack>
        <span>{icon}</span>
        <span>{title}</span>
      </HStack>
    </Tab>
  );
};
