import { Storybook } from "@/types";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StorybookCard from "./StorybookCard";
import { redPointColor } from "@/constants/color";

export interface GalleryProps {}

function Gallery({}: GalleryProps) {
  const router = useRouter();

  const familyName = router.query.familyName;

  const [storybooks, setStorybooks] = useState<Storybook[]>(
    []
  );

  useEffect(() => {
    const loadStorybook = async () => {
      const { data } = await axios.post("/load_story_all", {
        familyName,
      });

      setStorybooks(
        data.storybooks.map((storybook: any) => ({
          ...storybook,
          storybookName: storybook.projectName,
        }))
      );
    };

    if (familyName) loadStorybook();
  }, [familyName]);

  return (
    <VStack
      h={"100%"}
      bg={"#eaeaea"}
      px={"20px"}
      overflow={"scroll"}
      gap={"20px"}
      pb={"20px"}
    >
      <Flex
        shrink={0}
        w={"100%"}
        h={"54px"}
        px={"20px"}
        pt={"22px"}
        align={"flex-start"}
        justify={"space-between"}
      >
        <Text fontSize={"20px"} fontWeight={700}>
          우리의 기록
        </Text>
        <Flex
          w={"100px"}
          h={"32px"}
          borderRadius={"15px"}
          align={"center"}
          justify={"center"}
          border={"1px solid rgba(238, 68, 43, 0.70)"}
          bg={"white"}
          boxShadow={
            "0px 2px 8px 0px rgba(118, 118, 118, 0.10)"
          }
        >
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={redPointColor}
          >
            최신순
          </Text>
        </Flex>
      </Flex>

      {storybooks.map((storybook, index) => (
        <StorybookCard key={index} storybook={storybook} />
      ))}
    </VStack>
  );
}

export default Gallery;
