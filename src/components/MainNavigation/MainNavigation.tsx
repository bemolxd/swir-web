import { useLocation, useNavigate } from "react-router-dom";
import { TabList, Tab, Tabs, HStack, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { ReactElement } from "react";
import {
  MdDevicesOther,
  MdOutlineAllInbox,
  MdOutlineDescription,
  MdOutlineManageAccounts,
} from "react-icons/md";

import { IChildrenProp } from "types";

import { Card } from "components/Card";
import { useGetContextType } from "components/Auth";
import { useCheckMobile } from "components/Layout";

import { useGetActiveTab } from "./useGetActiveTab";
import { navigationMessages } from "./messages";
import { UsefulLinks } from "./UsefulLinks";

export const MainNavigation = () => {
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();

  const { isUser } = useGetContextType();
  const tabIndex = useGetActiveTab(pathname);
  const isMobile = useCheckMobile();

  if (isMobile) return null;

  if (isUser) {
    return (
      <MainNavigationContainer>
        <Card w="100%">
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
      </MainNavigationContainer>
    );
  }

  // ContextType.GLOBAL
  return (
    <MainNavigationContainer>
      <Card w="100%">
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
    </MainNavigationContainer>
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

const MainNavigationContainer = ({ children }: IChildrenProp) => {
  return (
    <VStack maxW="200px" width="100%" spacing={1}>
      {children}
      <UsefulLinks />
    </VStack>
  );
};
