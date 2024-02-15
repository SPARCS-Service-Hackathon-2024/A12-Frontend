import {
  Box,
  Button,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { greenPointColor } from "@/constants/color";

import {
  AddButtonIcon,
  BookFillIcon,
  BookOutlineIcon,
  HomeFillIcon,
  HomeOutlineIcon,
} from "@/svg";

export interface BottomNavigationProps {}

function BottomNavigation({}: BottomNavigationProps) {
  const router = useRouter();
  const { pathname } = router;

  const isHomePage = pathname.includes("/home");
  const isGalleryPage = pathname.includes("/gallery");

  const navigateTo = (path: string) => () => {
    router.push(path);
  };

  return (
    <Box
      px={"18px"}
      bg="white"
      height="83px"
      boxShadow={"0px -2px 8px 0px rgba(0, 0, 0, 0.10)"}
    >
      <Flex
        h={"100%"}
        align="center"
        justify="space-around"
        position={"relative"}
      >
        <Flex
          h={"100%"}
          w={"112px"}
          pt={"8px"}
          flex={1}
          flexDirection={"column"}
          align={"center"}
          onClick={navigateTo("/home")}
        >
          {isHomePage ? (
            <HomeFillIcon />
          ) : (
            <HomeOutlineIcon />
          )}
          <Text fontSize={"12px"} color={greenPointColor}>
            홈
          </Text>
        </Flex>

        <Box w={"80px"}></Box>
        <Box position={"absolute"} bottom={"25px"}>
          <AddButtonIcon
            width={"80px"}
            height={"80px"}
            onClick={navigateTo("/add")}
          />
        </Box>

        <Flex
          h={"100%"}
          pt={"8px"}
          flex={1}
          flexDirection={"column"}
          align={"center"}
          onClick={navigateTo("/gallery")}
        >
          {isGalleryPage ? (
            <BookFillIcon />
          ) : (
            <BookOutlineIcon />
          )}
          <Text fontSize={"12px"} color={greenPointColor}>
            갤러리
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BottomNavigation;
