import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  greenPointColor,
  redPointColor,
} from "@/constants/color";

export interface EndProps {}

function EndProcess({}: EndProps) {
  const router = useRouter();

  const phoneNumber = router.query.phoneNumber as string;
  const familyName = router.query.familyName as string;

  const [isComplete, setIsComplete] = useState(false);
  const [newStorybookName, setNewStorybookName] =
    useState("");

  useEffect(() => {
    const makeStory = async () => {
      const res = await axios.post("/make_story", {
        phoneNumber,
        familyName,
      });

      if (res.status === 200) {
        setIsComplete(true);
        setNewStorybookName(res.data.storybookName);
      }
    };

    if (familyName && phoneNumber) makeStory();

    makeStory();
  }, [phoneNumber, familyName]);

  const handleClick = () => {
    router.push({
      pathname: "/gallery/[storybookName]",
      query: {
        ...router.query,
        storybookName: newStorybookName,
      },
    });
  };

  return (
    <Flex
      ml={"56px"}
      display={"inline-flex"}
      px={"16px"}
      height={"50px"}
      align={"center"}
      borderWidth={"1px"}
      borderStyle={"soild"}
      borderRadius={"10px"}
      {...(isComplete
        ? {
            borderColor: greenPointColor,
            onClick: handleClick,
          }
        : {
            pl: 0,
            borderColor: redPointColor,
          })}
    >
      {isComplete ? (
        <>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={greenPointColor}
          >
            끼로기가 생성한 이야기 보기
          </Text>
        </>
      ) : (
        <>
          <Image
            width={60}
            height={60}
            alt="loading"
            src={"/images/story_loading.gif"}
          />
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={redPointColor}
          >
            이야기 생성 중
          </Text>
        </>
      )}
    </Flex>
  );
}

export default EndProcess;

const gifSrc =
  "https://s3-alpha-sig.figma.com/img/fe89/5691/eea0d68f8a5e4fedfe85244e184976fe?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P7xPIal3~968OL9P699oScKqGUUcfs9EhdTuvtam~pUgOKygBVv8DY1uG6-Hcw7t6CyrDPspKmj-TP9706OYB1v5lHPM8cUoze1C9pb4cCIdzt1in1lWJ~g8RoXCC2UxffjvEzCbxUcwKPMW0B8OTIAgdFGXCvR6zci-Q6SNgCLj~vTZ7HH-8HodJzwVnDmZFdz2grt0NiSJitAH9m68GR0k~BGQZDaSFyDXCADExrvFVj6avtmEDM67JANWBaHcgUfoCxIvMLknHMJtZVLU27sgqZh9eIxUe~njK-w6cnEHGOyDMnX09DeDGTFmPXPRrgm8Nl1b~i3cASvOQtSC1A__";
