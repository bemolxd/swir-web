import { useToast } from "@chakra-ui/react";

type Status = "error" | "info" | "warning" | "success";

export const useNotification = (
  title: string,
  description: string,
  status: Status,
  duration?: number
) => {
  return useToast({
    title,
    description,
    status,
    duration: duration ?? 3000,
    isClosable: true,
    variant: "solid",
    position: "top-right",
  });
};
