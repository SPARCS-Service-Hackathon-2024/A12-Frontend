import { redPointColor } from "@/constants/color";
import {
  Avatar,
  Box,
  Flex,
  Spinner,
  Text,
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
      mb={"16px"}
      gap={"8px"}
      align={"flex-start"}
      direction={isBot ? "row" : "row-reverse"}
    >
      <Avatar
        w={"48px"}
        h={"48px"}
        src={
          isBot
            ? "/images/ggirok.png"
            : "/images/user_ggirok.png"
        }
      />
      <Box
        px={"16px"}
        py={"10px"}
        borderRadius={"10px"}
        {...(isBot
          ? {
              borderTopLeftRadius: "0px",
              bg: "white",
              color: "black",
              border: "1px solid",
              borderColor: "#eaeaea",
            }
          : {
              borderTopRightRadius: "0px",
              bg: redPointColor,
              color: "white",
            })}
        maxW={"75%"}
        bg={isBot ? "white" : redPointColor}
      >
        {isWaitingReply ? (
          <Spinner />
        ) : (
          <Text
            fontSize={"14px"}
            fontWeight={500}
            lineHeight={"140%"}
            color={isBot ? "#3C3C3C" : "white"}
          >
            {text}
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default MessageBox;
