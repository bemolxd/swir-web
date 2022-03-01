import { useLocation, useNavigate } from "react-router-dom";
import { TabList, Tab, Tabs } from "@chakra-ui/react";

import { ContextType } from "types";

import { Card } from "components/Card";
import { useGetContextType } from "components/Auth";

import { useGetActiveTab } from "./useGetActiveTab";

export const MainNavigation = () => {
  const { pathname } = useLocation();

  const contextType = useGetContextType();
  const tabIndex = useGetActiveTab(pathname);

  if (contextType === ContextType.USER) {
    return (
      <Card maxW="200px" w="100%">
        <Tabs orientation="vertical" index={tabIndex}>
          <TabList alignItems="flex-start">
            <NavigationTab title="Baza sprzętu" path="baza-sprzetu" />
            <NavigationTab title="Rezerwacje" path="rezerwacje" />
          </TabList>
        </Tabs>
      </Card>
    );
  }

  return <Card>admin routes</Card>;
};

interface NavigationProps {
  path: string;
  title: string;
}

const NavigationTab = ({ path, title }: NavigationProps) => {
  const navigate = useNavigate();

  return <Tab onClick={() => navigate(path)}>{title}</Tab>;
};
