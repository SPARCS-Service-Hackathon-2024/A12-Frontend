import { Box, Flex, Text } from "@chakra-ui/react";
import { Message, MessageBox } from "@/components";
import { useState } from "react";

import ChatInput from "./ChatInput";
import AddHeader from "./AddHeader";

export interface AddProps {}

function Add({}: AddProps) {
  const [isWaitingReply, setIsWaitingReply] =
    useState(false);
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
      </Box>
      <ChatInput
        setIsWaitingReply={setIsWaitingReply}
        setMessages={setMessages}
      />
    </Flex>
  );
}

export default Add;

const firstMessage = {
  text: "안녕하세요",
  isBot: true,
};
