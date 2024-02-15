import {
  Box,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import S from "./style.module.css";
import { greenPointColor } from "@/constants/color";

export interface MainProps {}

function Main({}: MainProps) {
  const router = useRouter();

  const navigateTo = (path: string) => () => {
    router.push(path);
  };

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      position={"relative"}
      backgroundSize={"contain"}
      backgroundRepeat={"round"}
      backgroundImage={"/images/main_background.png"}
    >
      <Box
        left={"24px"}
        top={"190px"}
        position={"absolute"}
      >
        <Text
          fontSize={"24px"}
          fontWeight={300}
          color={"rgba(255, 255, 255, 0.70)"}
        >
          먼지 쌓인 <span className={S.bold}>기억</span>을
          <br />
          <span className={S.bold}>기록</span>으로
        </Text>
      </Box>
      <VStack
        w={"100%"}
        gap={"16px"}
        bottom={"166px"}
        position={"absolute"}
      >
        <Center
          h={"56px"}
          w={"300px"}
          bg={"white"}
          borderRadius={"10px"}
          border={"1px solid #bababa"}
          onClick={navigateTo("/register")}
        >
          <Text
            color={greenPointColor}
            fontSize={"20px"}
            fontWeight={600}
          >
            회원 가입
          </Text>
        </Center>
        <Text
          w={"100%"}
          textAlign={"center"}
          className={S.linedtext}
        >
          또는
        </Text>
        <Center
          h={"56px"}
          w={"300px"}
          borderRadius={"10px"}
          border={"1px solid #bababa"}
          onClick={navigateTo("/login")}
        >
          <Text
            color={"white"}
            fontSize={"20px"}
            fontWeight={600}
          >
            로그인
          </Text>
        </Center>
      </VStack>
    </Box>
  );
}

export default Main;
