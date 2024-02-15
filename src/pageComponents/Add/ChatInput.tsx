import {
  Flex,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import RecordingButton from "./RecordingButton";
import axios from "axios";

export interface ChatInputProps {}

function ChatInput({}: ChatInputProps) {
  const [text, setText] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSendClick = async () => {
    const payload = {
      user: "user1",
      text,
      first_chatting: false,
      is_text: true,
    };

    const res = await axios.post("/chat", payload);

    console.log(res);
  };

  return (
    <Flex
      w={"100%"}
      h={""}
      position={"absolute"}
      bottom={0}
    >
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
