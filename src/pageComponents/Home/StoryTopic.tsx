import { useState } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import Topic from "./Topic";
import { ReloadIcon } from "@/svg";
import { redPointColor } from "@/constants/color";

export interface StoryTopicProps {}

function StoryTopic({}: StoryTopicProps) {
  const [topics, setTopics] = useState(defaultTopic);

  const handleNewTopic = () => {
    if (newTopics.length === 0) return;
    setTopics((prev) => [newTopics.pop()!, ...prev]);
  };

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
        onClick={handleNewTopic}
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

const defaultTopic = [
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
    title: "마지막으로 친구들과 함께 한 여행은 언제였나요?",
    tags: ["여행", "친구"],
  },
];

const newTopics = [
  {
    title: "둘째 아이가 태어난 날을 묘사해주세요!",
    tags: ["결혼", "출산"],
  },
  {
    title: "고등학교 졸업식은 언제였나요?",
    tags: ["졸업", "학교"],
  },
  {
    title: "당신의 마지막 생일 파티는 언제였나요?",
    tags: ["생일", "파티"],
  },

  {
    title: "당신이 졸업한 날짜는 언제였나요?",
    tags: ["졸업"],
  },
  {
    title: "지난 주에 어떤 사건이 있었죠?",
    tags: ["사건"],
  },
  {
    title: "첫 키스를 나눈 날짜는 언제였나요?",
    tags: ["연애"],
  },

  {
    title: "가장 최근에 소풍을 간 날짜는 언제였나요?",
    tags: ["소풍"],
  },
  {
    title: "귀하의 졸업식은 언제였나요?",
    tags: ["졸업"],
  },
  {
    title: "최근에 가장 기억에 남는 여행은 언제였나요?",
    tags: ["여행"],
  },
  {
    title: "당신의 처음으로 해외여행한 날은 언제였나요?",
    tags: ["여행"],
  },
  {
    title:
      "가장 최근에 한 친구와의 약속 날짜는 언제였나요?",
    tags: ["약속", "친구"],
  },
  {
    title: "가장 재미있던 여행은 언제였나요?",
    tags: ["여행", "재미있는"],
  },
];
