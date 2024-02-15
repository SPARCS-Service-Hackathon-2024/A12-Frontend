import { ArrowBackIcon } from "@/svg";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface AddHeaderProps {}

function AddHeader({}: AddHeaderProps) {
  return (
    <Flex
      h={"56px"}
      w={"100%"}
      pt={"14px"}
      px={"18px"}
      justify={"space-between"}
    >
      <ArrowBackIcon />
      <Text
        fontSize={"18px"}
        fontWeight={600}
        color={"#3B3B3B"}
      >
        끼록이
      </Text>
      <Box w={"24px"} />
    </Flex>
  );
}

export default AddHeader;
