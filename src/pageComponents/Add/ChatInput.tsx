import { Box, Flex } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import axios from "axios";
import styled from "@emotion/styled";

import { Message } from "@/components";
import {
  AttachFileIcon,
  RecordingButtonIcon,
  SendButtonIcon,
} from "@/svg";

export interface ChatInputProps {
  setIsWaitingReply: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

function ChatInput({
  setIsWaitingReply,
  setMessages,
}: ChatInputProps) {
  const [text, setText] = useState<string>("");
  const isTexting = text.trim() !== "";

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSendClick = async () => {
    const newUserMessage: Message = {
      text,
      isBot: false,
    };
    const newBotMessage = {
      text: "",
      isBot: true,
    };

    setText("");
    setMessages((prev) => [
      ...prev,
      newUserMessage,
      newBotMessage,
    ]);

    setIsWaitingReply(true);
    const payload = {
      user: "user1",
      text,
      first_chatting: false,
      is_text: true,
    };

    const { data } = await axios.post("/chat", payload);

    setMessages((prev) => {
      const lastBotMessage = prev.pop()!;
      lastBotMessage.text = data.text;
      prev.push(lastBotMessage);

      return prev;
    });

    setIsWaitingReply(false);
  };

  const handleRecordClick = () => {};

  return (
    <Flex px={"12px"} pb={"20px"} w={"100%"} gap={"8px"}>
      <Box
        mt={"4px"}
        onClick={
          isTexting ? handleSendClick : handleRecordClick
        }
      >
        {isTexting ? (
          <SendButtonIcon width={"40px"} height={"40px"} />
        ) : (
          <RecordingButtonIcon
            width={"40px"}
            height={"40px"}
          />
        )}
      </Box>
      <Flex
        flex={1}
        pl={"8px"}
        pr={"24px"}
        py={"4px"}
        minH={"48px"}
        position={"relative"}
        borderWidth={"1px"}
        borderStyle={"soild"}
        borderRadius={"12px"}
        borderColor={"#E2E2E2"}
      >
        <StyledTextArea
          minRows={1}
          maxRows={4}
          value={text}
          placeholder="메세지를 입력하세요."
          onChange={handleInputChange}
        />
        {!isTexting && (
          <Box position={"absolute"} right={0} top={"12px"}>
            <AttachFileIcon />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}

export default ChatInput;

const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  outline: 0;
  padding: 8px;
  position: relative;
  appearance: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;
