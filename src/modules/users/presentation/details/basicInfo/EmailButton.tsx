import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { useIntl } from "react-intl";

interface IProps {
  email: string;
}

export const EmailButton = ({ email }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <Button
      leftIcon={<MdOutlineEmail />}
      fontWeight="400"
      onClick={(e) => {
        window.location.href = `mailto:${email}`;
        e.preventDefault();
      }}
      variant="outline"
    >
      {formatMessage({
        id: "UserDetails.contactBtn",
        defaultMessage: "Kontakt",
      })}
    </Button>
  );
};
