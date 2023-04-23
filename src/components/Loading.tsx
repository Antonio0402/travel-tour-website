import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center width="full" h="full">
      <Spinner
        size="xl"
        color="orange.500"
        thickness="4px"
        speed="0.65s"
        emptyColor="orange.100"
      />
    </Center>
  );
};

export default Loading;
