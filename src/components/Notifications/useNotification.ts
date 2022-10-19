import { useToast } from "@chakra-ui/react";
import { useCheckMobile } from "components/Layout";

type Status = "error" | "info" | "warning" | "success";

export const useNotification = (
  title: string,
  description: string,
  status: Status,
  duration?: number
) => {
  const isMobile = useCheckMobile();

  return useToast({
    title,
    description,
    status,
    duration: duration ?? 3000,
    isClosable: true,
    variant: "solid",
    position: isMobile ? "bottom" : "top-right",
  });
};
