import { Box } from "@chakra-ui/react";
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
    <Box h={"100%"} position={"relative"}>
      {messages.map((message, idx, arr) => (
        <MessageBox
          key={idx}
          message={message}
          isWaitingReply={
            arr.length - 1 === idx ? isWaitingReply : false
          }
        />
      ))}
      <ChatInput
        setIsWaitingReply={setIsWaitingReply}
        setMessages={setMessages}
      />
    </Box>
  );
}

export default Add;

const firstMessage = {
  text: "안녕하세요",
  isBot: true,
};
