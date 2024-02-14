import { Box } from "@chakra-ui/react";
import { Message } from "@/components";

import ChatInput from "./ChatInput";

export interface AddProps {}

function Add({}: AddProps) {
  return (
    <Box h={"100%"} position={"relative"}>
      {messages.map((message, idx) => (
        <Message key={idx} contents={message} />
      ))}
      <ChatInput />
    </Box>
  );
}

export default Add;

const messages = ["안녕하세요", "반갑습니다", "네네네"];
