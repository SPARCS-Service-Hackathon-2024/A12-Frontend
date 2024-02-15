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
      background={"rgba(238, 68, 43, 0.70)"}
    >
      <Text
        color={"white"}
        fontSize={"10px"}
        fontWeight={500}
      >
        {name}
      </Text>
    </Flex>
  );
}

export default Tag;
