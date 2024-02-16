import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import FamilyMembers from "./FamilyMembers";
import StoryTopic from "./StoryTopic";
import { useEffect, useState } from "react";
import axios from "axios";

export interface HomeProps {}

function Home({}: HomeProps) {
  const router = useRouter();

  const familyName = router.query.familyName;

  const [userNames, setUserNames] = useState<string[]>([]);

  useEffect(() => {
    const loadMembers = async () => {
      const { data } = await axios.post(
        "/get_all_user_in_family",
        {
          familyName,
        }
      );

      setUserNames(
        data.userNames.map((userName: string) => ({
          name: userName,
        }))
      );
    };

    if (familyName) loadMembers();
  }, [familyName]);

  return (
    <Box h={"100%"} overflow={"scroll"} pb={"24px"}>
      <FamilyMembers familyMembers={userNames as any} />
      <Text
        fontSize={"20px"}
        fontWeight={800}
        ml={"32px"}
        my={"24px"}
      >
        가족의 이야기를 영원히 기록하세요
      </Text>
      <StoryTopic />
    </Box>
  );
}

export default Home;

const members = [
  {
    name: "김철수",
  },
  { name: "김단군" },
  { name: "김단군" },
];
