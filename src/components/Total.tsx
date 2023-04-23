import { Box, Flex, Text } from "@chakra-ui/react";
import { vnd } from "../store";
import { totalDataAtom } from "../store";
import { useAtomValue } from "jotai";

const Total = () => {
  const total = useAtomValue(totalDataAtom);

  return (
    <Box p="8" zIndex="10">
      <Flex justifyContent="center">
        <Text fontSize="2xl" fontWeight="extrabold">
          Total: {vnd.format(total)}
        </Text>
      </Flex>
    </Box>
  );
};

export default Total;
