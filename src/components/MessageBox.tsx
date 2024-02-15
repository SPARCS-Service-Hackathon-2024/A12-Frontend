import { redPointColor } from "@/constants/color";
import {
  Avatar,
  Box,
  Flex,
  Spinner,
} from "@chakra-ui/react";

export type Message = {
  text: string;
  isBot: boolean;
};
export interface MessageProps {
  message: Message;
  isWaitingReply: boolean;
}

function MessageBox({
  message,
  isWaitingReply,
}: MessageProps) {
  const { isBot, text } = message;

  return (
    <Flex
      gap={"8px"}
      direction={isBot ? "row" : "row-reverse"}
      mb={"12px"}
    >
      <Avatar
        w={"48px"}
        h={"48px"}
        src="https://bit.ly/broken-link"
      />
      <Box
        px={"16px"}
        py={"10px"}
        borderRadius={"10px"}
        border={"1px solid"}
        borderColor={"#eaeaea"}
        {...(isBot
          ? {
              borderTopLeftRadius: "0px",
              bg: "white",
              color: "black",
            }
          : {
              borderTopRightRadius: "0px",
              bg: redPointColor,
              color: "white",
            })}
        maxW={"80%"}
        bg={isBot ? "white" : redPointColor}
      >
        {isWaitingReply ? <Spinner /> : text}
      </Box>
    </Flex>
  );
}

export default MessageBox;
