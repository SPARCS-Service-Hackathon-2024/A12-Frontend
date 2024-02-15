import { Box, Flex } from "@chakra-ui/react";
import { Message, MessageBox } from "@/components";
import { useState } from "react";

import ChatInput from "./ChatInput";

export interface AddProps {}

function Add({}: AddProps) {
  const [isWaitingReply, setIsWaitingReply] =
    useState(false);
  const [messages, setMessages] = useState<Message[]>([
    firstMessage,
  ]);

  return (
    <Flex
      h={"100%"}
      px={"12px"}
      position={"relative"}
      direction={"column"}
    >
      <Box flex={1} w={"100%"} overflow={"scroll"}>
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
