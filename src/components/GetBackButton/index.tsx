import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { MdArrowBack } from "react-icons/md";

import { useCheckMobile } from "components/Layout";

export interface GetBackButtonProps {
  label: string;
  path: string;
}

export const GetBackButton = ({ label, path }: GetBackButtonProps) => {
  const navigate = useNavigate();
  const isMobile = useCheckMobile();

  if (!isMobile) return null;

  return (
    <Button
      variant="link"
      leftIcon={<MdArrowBack />}
      onClick={() => navigate(path)}
    >
      {label}
    </Button>
  );
};
