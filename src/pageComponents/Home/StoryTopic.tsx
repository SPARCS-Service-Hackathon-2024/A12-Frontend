import { redPointColor } from "@/constants/color";
import { ReloadIcon } from "@/svg";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Topic from "./Topic";

export interface StoryTopicProps {}

function StoryTopic({}: StoryTopicProps) {
  return (
    <Box px={"20px"}>
      <Flex
        w={"100%"}
        h={"48px"}
        align={"center"}
        justify={"center"}
        borderRadius={"30px"}
        borderStyle={"solid"}
        borderWidth={"1px"}
        borderColor={"#F37C6B"}
        boxShadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.10)"}
      >
        <ReloadIcon />
        <Text
          ml={"10px"}
          color={redPointColor}
          fontSize={"12px"}
        >
          {"새로운 주제"}
        </Text>
        &nbsp;
        <Text fontSize={"12px"}>추가하기</Text>
      </Flex>

      <VStack mt={"24px"} gap={"8px"}>
        {topics.map((topic, idx) => (
          <Topic
            key={idx}
            title={topic.title}
            tags={topic.tags}
          />
        ))}
      </VStack>
    </Box>
  );
}

export default StoryTopic;

const topics = [
  {
    title: "아내 분을 처음 만난 날에 대해 말해주세요!",
    tags: ["청춘", "결혼"],
  },
  {
    title: "대학 입학식 기억이 나시나요?",
    tags: ["청춘", "입학", "대학"],
  },
  {
    title: "첫째 아이가 태어난 날을 묘사해주세요!",
    tags: ["결혼", "출산"],
  },
  {
    title: "둘째 아이가 태어난 날을 묘사해주세요!",
    tags: ["결혼", "출산"],
  },
  {
    title: "둘째 아이가 태어난 날을 묘사해주세요!",
    tags: ["결혼", "출산"],
  },
  {
    title: "둘째 아이가 태어난 날을 묘사해주세요!",
    tags: ["결혼", "출산"],
  },
];
