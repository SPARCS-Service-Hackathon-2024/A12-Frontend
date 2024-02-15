import { Center, Flex, IconButton } from "@chakra-ui/react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

import RecordingButton from "./RecordingButton";
import { Message } from "@/components";

export interface ChatInputProps {
  setIsWaitingReply: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

function ChatInput({
  setIsWaitingReply,
  setMessages,
}: ChatInputProps) {
  const [text, setText] = useState<string>("");

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

  return (
    <Flex px={"12px"} w={"100%"} maxH={"100px"}>
      <Center
        w={"40px"}
        h={"40px"}
        borderRadius={"50%"}
      ></Center>
      <TextareaAutosize
        minRows={1}
        maxRows={4}
        value={text}
        onChange={handleInputChange}
      />
      <IconButton
        aria-label={"send"}
        icon={<FaArrowRight />}
        onClick={handleSendClick}
      />
    </Flex>
  );
}

export default ChatInput;
