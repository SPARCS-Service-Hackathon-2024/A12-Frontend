import { Box } from "@chakra-ui/react";

import ChatInput from "./ChatInput";

export interface AddProps {}

function Add({}: AddProps) {
  return (
    <Box>
      <ChatInput />
    </Box>
  );
}

export default Add;
