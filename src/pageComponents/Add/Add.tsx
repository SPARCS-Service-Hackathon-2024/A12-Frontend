import { Box, Flex, Text } from "@chakra-ui/react";
import { Message, MessageBox } from "@/components";
import { useState } from "react";

import ChatInput from "./ChatInput";
import AddHeader from "./AddHeader";
import { useRouter } from "next/router";
import EndProcess from "./EndProcess";

export interface AddProps {}

function Add({}: AddProps) {
  const router = useRouter();
  const { query } = router;

  const [isWaitingReply, setIsWaitingReply] =
    useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const firstMessage = query.title
    ? {
        text: query.title as string,
        isBot: true,
      }
    : defaultMessage;

  const [messages, setMessages] = useState<Message[]>([
    firstMessage,
  ]);

  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      position={"relative"}
    >
      <AddHeader />
      <Box
        mt={"56px"}
        flex={1}
        w={"100%"}
        px={"12px"}
        overflow={"scroll"}
      >
        <Text
          w={"100%"}
          fontSize={"12px"}
          textAlign={"center"}
          color={"#BABABA"}
          mt={"4px"}
          mb={"24px"}
        >
          기록을 마치려면 끼룩이에게 채팅 종료 의사를
          밝혀주세요!
          <br />
          예) “이제 그만할래”, “잘 가”, “얘기 끝났어”
        </Text>

        {messages.map((message, idx, arr) => (
          <MessageBox
            key={idx}
            message={message}
            isWaitingReply={
              arr.length - 1 === idx
                ? isWaitingReply
                : false
            }
          />
        ))}

        {isEnd && <EndProcess />}
      </Box>
      <ChatInput
        messages={messages}
        setIsEnd={setIsEnd}
        setMessages={setMessages}
        setIsWaitingReply={setIsWaitingReply}
      />
    </Flex>
  );
}

export default Add;

const defaultMessage = {
  text: "오늘은 무슨 추억을 기록해볼까요?",
  isBot: true,
};
