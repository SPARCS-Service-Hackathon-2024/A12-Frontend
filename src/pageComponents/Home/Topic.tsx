import { ArrowForwardIcon } from "@/svg";
import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Tag from "./Tag";
import { useRouter } from "next/router";

export interface TopicProps {
  title: string;
  tags: string[];
}

function Topic({ title, tags }: TopicProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/add?title=${title}`);
  };

  return (
    <Flex
      w={"100%"}
      h={"88px"}
      pl={"20px"}
      pr={"14px"}
      align={"center"}
      justify={"space-between"}
      borderRadius={"10px"}
      border={"1px solid #EAEAEA"}
      boxShadow={
        "0px 2px 8px 0px rgba(217, 217, 217, 0.15);"
      }
      onClick={handleClick}
    >
      <VStack align={"flex-start"}>
        <Text fontSize={"14px"} fontWeight={600}>
          {title}
        </Text>
        <HStack gap="6px">
          {tags.map((tag, idx) => (
            <Tag key={idx} name={tag} />
          ))}
        </HStack>
      </VStack>
      <ArrowForwardIcon />
    </Flex>
  );
}

export default Topic;
