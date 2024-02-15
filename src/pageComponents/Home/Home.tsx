import { Box, Text } from "@chakra-ui/react";
import FamilyMembers from "./FamilyMembers";
import StoryTopic from "./StoryTopic";

export interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Box h={"100%"} overflow={"scroll"} pb={"24px"}>
      <FamilyMembers familyMembers={members as any} />
      <Text
        fontSize={"20px"}
        fontWeight={800}
        ml={"32px"}
        my={"24px"}
      >
        가족의 이야기를 영원히 기록하세요
      </Text>
      <StoryTopic />
    </Box>
  );
}

export default Home;

const members = [
  {
    name: "김철수",
  },
  { name: "김단군" },
  { name: "김단군" },
];
