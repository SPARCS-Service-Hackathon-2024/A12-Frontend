import { Story } from "@/types";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface StorySceneProps {
  story: Story;
}

function StoryScene({ story }: StorySceneProps) {
  const {
    createdAt,
    familyName,
    imageUrl,
    priority,
    projectName,
    text,
    userName,
    wavUrl,
  } = story;

  return (
    <Box w={"100%"} h={"100%"} p={"20px"}>
      <Image
        width={350}
        height={350}
        src={imageUrl}
        alt={"scene"}
      />

      <Text my={"16px"} fontSize={"18px"} color={"#d9d9d9"}>
        {createdAt}
      </Text>
      <Text fontSize={"16px"} color={"#bababa"}>
        {text}
      </Text>
    </Box>
  );
}

export default StoryScene;
