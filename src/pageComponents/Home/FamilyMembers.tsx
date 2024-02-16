import { User } from "@/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Member from "./Member";
import { AddButtonIcon, DefaultAvatar } from "@/svg";

export interface FamilyMembersProps {
  familyMembers: User[];
}

function FamilyMembers({
  familyMembers,
}: FamilyMembersProps) {
  return (
    <Flex
      h={"123px"}
      pt={"22px"}
      pb={"16px"}
      px={"20px"}
      bg={"#F8F8F8"}
      overflowX={"scroll"}
      overflowY={"hidden"}
      width={"100%"}
      wrap={"nowrap"}
    >
      {familyMembers &&
        familyMembers.map((familyMember, idx) => (
          <Member key={idx} user={familyMember} />
        ))}

      <Flex
        display={"inline-flex"}
        direction={"column"}
        gap={"4px"}
        align={"center"}
        marginRight={"16px"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          left={"46px"}
          top={"40px"}
        >
          <AddButtonIcon width={"20px"} height={"20px"} />
        </Box>
        <DefaultAvatar />
        <Text fontSize={"14px"}>가족 추가</Text>
      </Flex>
    </Flex>
  );
}

export default FamilyMembers;
