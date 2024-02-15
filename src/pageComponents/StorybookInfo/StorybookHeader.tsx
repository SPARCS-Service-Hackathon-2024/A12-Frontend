import { ArrowBackIcon, EditIcon } from "@/svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface AddHeaderProps {}

function StorybookHeader({}: AddHeaderProps) {
  const router = useRouter();

  return (
    <Flex
      h={"56px"}
      w={"100%"}
      pt={"14px"}
      px={"18px"}
      top={0}
      position={"fixed"}
      justify={"space-between"}
      borderBottomWidth={"1px"}
      borderBottomStyle={"solid"}
      borderBottomColor={"#EAEAEA"}
    >
      <Box onClick={() => router.back()}>
        <ArrowBackIcon />
      </Box>
      <Text
        fontSize={"18px"}
        fontWeight={600}
        color={"#3B3B3B"}
      >
        {router.query.storybookName}
      </Text>
      <Box>
        <EditIcon />
      </Box>
    </Flex>
  );
}

export default StorybookHeader;
