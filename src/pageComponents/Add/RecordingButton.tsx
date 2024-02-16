import { useRef, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  SendIcon,
  CloseIcon,
  StopButtonIcon,
  RecordingButtonIcon,
  RestartButtonIcon,
  ReplayIcon,
} from "@/svg";
import { redPointColor } from "@/constants/color";

enum Step {
  IS_RECORDING = "isRecording",
  IS_FINISHED = "isFinished",
  IS_DEFAULT = "isDefault",
}

export interface RecordingButtonProps {
  handleClose: () => void;
}

function RecordingButton({
  handleClose,
}: RecordingButtonProps) {
  const [step, setStep] = useState<Step>(Step.IS_DEFAULT);
  const isDefault = step === Step.IS_DEFAULT;
  const isRecording = step === Step.IS_RECORDING;
  const isFinished = step === Step.IS_FINISHED;

  const streamRef = useRef<MediaStream>();
  const recorderRef = useRef<MediaRecorder>();
  const chunkRef = useRef<Blob[]>([]);

  const handleRecordClick = async () => {
    setStep(Step.IS_RECORDING);

    streamRef.current =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    recorderRef.current = new MediaRecorder(
      streamRef.current
    );

    recorderRef.current?.addEventListener(
      "dataavailable",
      async (event) => {
        console.log(event.data);
        chunkRef.current.push(event.data);

        const blob = new Blob(chunkRef.current, {
          type: "audio/wav",
        });
        chunkRef.current = [];

        const audioURL = URL.createObjectURL(blob);
        console.log(audioURL);
      }
    );

    recorderRef.current?.start();
  };

  const handleStopClick = () => {
    setStep(Step.IS_FINISHED);

    recorderRef.current?.stop();

    streamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());
  };

  return (
    <VStack h={"300px"} gap={"10px"}>
      <Flex
        w={"100%"}
        h={"64px"}
        px={"16px"}
        pt={"12px"}
        justify={"space-between"}
      >
        <Box mt={"8px"} onClick={handleClose}>
          <CloseIcon />
        </Box>
        <Text
          mt={"8px"}
          fontSize={"16px"}
          fontWeight={600}
          color={"#3C3C3C"}
        >
          음성 녹음
        </Text>
        <Box>
          <SendIcon
            color={isFinished ? redPointColor : "#EAEAEA"}
          />
        </Box>
      </Flex>

      <Flex
        w={"360px"}
        h={"52px"}
        borderRadius={"15px"}
        border={"1px solid #D9D9D9"}
        bg={"#fafafa"}
        position={"relative"}
        mb={"10px"}
      >
        <Text
          position={"absolute"}
          right={0}
          fontSize={"14px"}
          color={"#fff"}
          fontWeight={500}
        >
          00:00
        </Text>
      </Flex>

      {isDefault && (
        <Box onClick={handleRecordClick}>
          <RecordingButtonIcon
            width={"64px"}
            height={"64px"}
          />
        </Box>
      )}

      {isRecording && (
        <Box onClick={handleStopClick}>
          <StopButtonIcon width={"64px"} height={"64px"} />
        </Box>
      )}

      {isFinished && (
        <Center
          w={"64px"}
          h={"64px"}
          bg={"#EAEAEA"}
          borderRadius={"50%"}
          onClick={handleRecordClick}
        >
          <ReplayIcon width={"28px"} height={"28px"} />
        </Center>
      )}

      <Text
        mt={"8px"}
        fontSize={"12px"}
        fontWeight={400}
        color={isDefault ? redPointColor : "#767676"}
      >
        {isDefault &&
          "최대 30초까지만 녹음할 수 있습니다. "}
        {isRecording && "버튼을 눌러 녹음을 멈추세요."}
        {isFinished && "다시 녹음하려면 버튼을 누르세요."}
      </Text>
    </VStack>
  );
}

export default RecordingButton;
