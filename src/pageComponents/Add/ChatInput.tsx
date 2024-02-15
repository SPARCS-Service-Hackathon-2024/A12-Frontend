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
import { useRouter } from "next/router";

import { Message } from "@/components";
import {
  AttachFileIcon,
  RecordingButtonIcon,
  SendButtonIcon,
} from "@/svg";

export interface ChatInputProps {
  messages: Message[];
  setIsEnd: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
  setIsWaitingReply: Dispatch<SetStateAction<boolean>>;
}

function ChatInput({
  messages,
  setIsEnd,
  setMessages,
  setIsWaitingReply,
}: ChatInputProps) {
  const router = useRouter();

  const [text, setText] = useState<string>("");
  const isTexting = text.trim() !== "";

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSendClick = async () => {
    const first_chatting = messages.length === 1;

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
      phoneNumber: router.query.phoneNumber,
      text,
      first_chatting,
      is_text: true,
    };

    const { data } = await axios.post("/chat", payload);

    setMessages((prev) => {
      const lastBotMessage = prev.pop()!;
      lastBotMessage.text = data.is_end
        ? "다음에 또 이야기 들려주세요. 안녕히 계세요."
        : data.text;
      prev.push(lastBotMessage);

      return prev;
    });

    setIsWaitingReply(false);

    if (data.is_end) {
      setIsEnd(true);
    }
  };

  const handleRecordClick = () => {};

  return (
    <Flex
      pt={"8px"}
      px={"12px"}
      pb={"20px"}
      w={"100%"}
      gap={"8px"}
      bottom={0}
      position={"sticky"}
    >
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
