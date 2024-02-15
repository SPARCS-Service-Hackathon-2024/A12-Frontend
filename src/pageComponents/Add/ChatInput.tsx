import {
  Flex,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FaArrowRight } from "react-icons/fa";
import RecordingButton from "./RecordingButton";
import axios from "axios";
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
    <Flex w={"100%"} maxH={"100px"}>
      <Textarea value={text} onChange={handleInputChange} />
      <IconButton
        aria-label={"send"}
        icon={<FaArrowRight />}
        onClick={handleSendClick}
      />
      <RecordingButton />
    </Flex>
  );
}

export default ChatInput;
