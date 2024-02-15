import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Story, Storybook } from "@/types";
import { Box, Flex } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import StorybookHeader from "./StorybookHeader";
import StoryScene from "./StoryScene";

export interface StorybookProps {}

function StorybookInfo({}: StorybookProps) {
  const router = useRouter();

  const storybookName = router.query.storybookName;
  const familyName = router.query.familyName;

  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const loadStorybook = async () => {
      const { data } = await axios.post<{
        stories: Story[];
      }>("/load_story", {
        storybookName,
        familyName,
      });

      setStories(data.stories);
    };

    if (familyName && storybookName) loadStorybook();
  }, [storybookName, familyName]);

  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      position={"relative"}
    >
      <StorybookHeader />
      <Box w={"100%"} mt={"56px"} flex={1}>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {stories.map((story, idx) => (
            <StoryScene key={idx} story={story} />
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
}

export default StorybookInfo;
