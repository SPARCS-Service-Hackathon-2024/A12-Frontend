import { ArrowBackIcon } from "@/svg";
import { Flex, Text } from "@chakra-ui/react";

export interface AddHeaderProps {}

function AddHeader({}: AddHeaderProps) {
  return (
    <Flex
      h={"80px"}
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
      <ArrowBackIcon />
    </Flex>
  );
}

export default AddHeader;
