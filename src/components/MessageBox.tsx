import { Box, Spinner } from "@chakra-ui/react";

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
  return (
    <Box
      px={"16px"}
      py={"10px"}
      borderRadius={"10px"}
      border={"1px solid"}
      borderColor={messageBorder}
      maxW={"80%"}
    >
      {isWaitingReply ? <Spinner /> : message.text}
    </Box>
  );
}

export default MessageBox;

const messageBorder = "#eaeaea";
