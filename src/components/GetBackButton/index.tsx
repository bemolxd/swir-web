import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { MdArrowBack } from "react-icons/md";

export interface GetBackButtonProps {
  label: string;
  path: string;
}

export const GetBackButton = ({ label, path }: GetBackButtonProps) => {
  const navigate = useNavigate();

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
