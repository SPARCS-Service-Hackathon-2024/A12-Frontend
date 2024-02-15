import { Storybook } from "@/types";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export interface StorybookCardProps {
  storybook: Storybook;
}

function StorybookCard({ storybook }: StorybookCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/gallery/[storybookName]",
      query: {
        ...router.query,
        storybookName: storybook.storybookName,
      },
    });
  };

  return (
    <Box
      px={"12px"}
      py={"20px"}
      borderRadius={"10px"}
      border={"1px solid #EAEAEA"}
      bg={"white"}
      boxShadow={
        "0px 2px 8px 0px rgba(234, 234, 234, 0.10)"
      }
      onClick={handleClick}
    >
      <Text
        fontSize={"16px"}
        fontWeight={600}
        color={"#767676"}
        mb={"8px"}
      >
        {storybook.storybookName}
      </Text>
      <Text
        fontSize={"12px"}
        fontWeight={400}
        color={"#BABABA"}
        mb={"6px"}
      >
        {storybook.stories[0].userName}
      </Text>
      <Text
        fontSize={"12px"}
        fontWeight={400}
        color={"#BABABA"}
        mb={"20px"}
      >
        {storybook.stories[0].createdAt}
      </Text>

      <Image
        src={storybook.stories[0].imageUrl}
        alt="thumbnail"
        width={326}
        height={170}
      />
    </Box>
  );
}

export default StorybookCard;
