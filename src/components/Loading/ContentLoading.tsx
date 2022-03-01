import { Box, VStack, Spinner } from "@chakra-ui/react";

export const ContentLoading = () => {
  return (
    <Box
      m={4}
      w="100%"
      maxW="1300px"
      h="300px"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Spinner size="lg" />
      </VStack>
    </Box>
  );
};
