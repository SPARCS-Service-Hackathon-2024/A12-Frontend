import { DefaultAvatar } from "@/svg";
import { User } from "@/types";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export interface MemberProps {
  user: User;
}

function Member({ user }: MemberProps) {
  return (
    <Flex
      shrink={0}
      display={"inline-flex"}
      direction={"column"}
      gap={"4px"}
      align={"center"}
      marginRight={"16px"}
    >
      <DefaultAvatar width={"60px"} height={"60px"} />
      <Text fontSize={"14px"}>{user?.name}</Text>
    </Flex>
  );
}

export default Member;
