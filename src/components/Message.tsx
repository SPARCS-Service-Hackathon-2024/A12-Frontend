import { Box } from "@chakra-ui/react";

export interface MessageProps {
  contents: string;
}

function Message({ contents }: MessageProps) {
  return (
    <Box
      px={"16px"}
      py={"10px"}
      borderRadius={"10px"}
      border={"1px solid"}
      borderColor={messageBorder}
      maxW={"80%"}
    >
      {contents}
    </Box>
  );
}

export default Message;

const messageBorder = "#eaeaea";
