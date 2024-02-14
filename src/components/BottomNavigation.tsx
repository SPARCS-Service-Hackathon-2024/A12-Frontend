import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaHome, FaList, FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";

export interface BottomNavigationProps {}

function BottomNavigation({}: BottomNavigationProps) {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Flex
      align="center"
      justify="space-around"
      bg="gray.200"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="60px"
      boxShadow="0px -1px 6px rgba(0, 0, 0, 0.1)"
    >
      <Box>
        <Button
          variant="ghost"
          onClick={() => navigateTo("/home")}
        >
          <FaHome />
          <Text>Home</Text>
        </Button>
      </Box>
      <Box>
        <Button
          variant="ghost"
          onClick={() => navigateTo("/add")}
        >
          <FaPlus />
          <Text>Add</Text>
        </Button>
      </Box>
      <Box>
        <Button
          variant="ghost"
          onClick={() => navigateTo("/gallery")}
        >
          <FaList />
          <Text>Gallery</Text>
        </Button>
      </Box>
    </Flex>
  );
}

export default BottomNavigation;
