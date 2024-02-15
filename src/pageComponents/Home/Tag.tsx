import { redPointColor } from "@/constants/color";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <Flex
      h={"23px"}
      px={"8px"}
      borderRadius={"6px"}
      align={"center"}
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderColor={redPointColor}
      background={"rgba(255, 238, 166, 0.40)"}
    >
      <Text
        color={redPointColor}
        fontSize={"10px"}
        fontWeight={500}
      >
        {name}
      </Text>
    </Flex>
  );
}

export default Tag;
