import { Box, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface MainProps {}

function Main({}: MainProps) {
  const router = useRouter();

  return (
    <Box w={"100vh"} h={"100vh"}>
      <Center
        h={"56px"}
        w={"300px"}
        borderRadius={"10px"}
        border={"1px solid #bababa"}
        background={"rgba(255, 255, 255, 0.30)"}
      >
        <Text fontSize={"20px"} fontWeight={600}>
          회원 가입
        </Text>
      </Center>
      <Center
        h={"56px"}
        w={"300px"}
        borderRadius={"10px"}
        border={"1px solid #bababa"}
      >
        <Text fontSize={"20px"} fontWeight={600}>
          로그인
        </Text>
      </Center>
    </Box>
  );
}

export default Main;
