import { Box } from "@chakra-ui/react";
import FamilyMembers from "./FamilyMembers";

export interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Box w={"100%"} h={"100%"} overflow={"hidden"}>
      <FamilyMembers familyMembers={members} />
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
