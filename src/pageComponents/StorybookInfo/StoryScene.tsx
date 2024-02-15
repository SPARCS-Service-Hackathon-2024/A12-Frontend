import { API_ENDPOINT } from "@/constants/api";
import { LoveIcon, PlayIcon, ShareIcon } from "@/svg";
import { Story } from "@/types";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface StorySceneProps {
  story: Story;
}

function StoryScene({ story }: StorySceneProps) {
  const {
    createdAt,

    imageUrl,

    text,
    wavUrl,
  } = story;

  const handlePlayClick = () => {
    const url = `${API_ENDPOINT}/${wavUrl}`;
    var audio = new Audio(url);
    audio.play();
  };

  return (
    <Box
      w={"100%"}
      h={"100%"}
      p={"20px"}
      position={"relative"}
    >
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

      <Flex
        pt={"8px"}
        h={"84px"}
        w={"100%"}
        px={"20px"}
        // position={"absolute"}
        // bottom={0}
        // left={0}
        mt={"24px"}
        align={"flex-start"}
        justify={"space-between"}
        borderTopWidth={"1px"}
        borderTopStyle={"solid"}
        borderTopColor={"#EAEAEA"}
      >
        <HStack gap={"0px"}>
          <ShareIcon width={"60px"} height={"60px"} />
          <LoveIcon width={"60px"} height={"60px"} />
        </HStack>
        <Box onClick={handlePlayClick}>
          <PlayIcon width={"52px"} height={"52px"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default StoryScene;
