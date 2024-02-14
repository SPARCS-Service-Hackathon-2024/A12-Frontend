import {
  Flex,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import {
  FaArrowRight,
  FaPlay,
  FaRecordVinyl,
  FaStop,
} from "react-icons/fa";

export interface ChatInputProps {}

function ChatInput({}: ChatInputProps) {
  const [value, setValue] = useState<string>("");
  const [isRecording, setIsRecording] = useState(false);

  const streamRef = useRef<MediaStream>();
  const recorderRef = useRef<MediaRecorder>();
  const chunkRef = useRef<Blob[]>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const handleSendClick = () => {};

  const handleRecordClick = async () => {
    setIsRecording(true);

    streamRef.current =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    recorderRef.current = new MediaRecorder(
      streamRef.current
    );

    recorderRef.current?.addEventListener(
      "dataavailable",
      (event) => {
        console.log(event.data);
        chunkRef.current.push(event.data);

        const blob = new Blob(chunkRef.current, {
          type: "audio/wav",
        });
        chunkRef.current = [];

        const audioURL = URL.createObjectURL(blob);
        console.log(audioURL);

        const audio = document.querySelector("audio");
        audio!.src = audioURL;

        // let aElm = document.createElement("a");
        // aElm.href = audioURL;
        // aElm.download = ".mp3";
        // aElm.click();
      }
    );

    recorderRef.current?.start();
  };

  const handleStopClick = () => {
    setIsRecording(false);

    recorderRef.current?.stop();

    streamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());
  };

  return (
    <Flex
      w={"100%"}
      h={""}
      position={"absolute"}
      bottom={0}
    >
      <Textarea
        value={value}
        onChange={handleInputChange}
      />

      <IconButton
        aria-label={"send"}
        icon={<FaArrowRight />}
        onClick={handleSendClick}
      />
      {isRecording ? (
        <IconButton
          aria-label={"stop"}
          icon={<FaStop />}
          onClick={handleStopClick}
        />
      ) : (
        <IconButton
          aria-label={"record"}
          icon={<FaRecordVinyl />}
          onClick={handleRecordClick}
        />
      )}
      <IconButton
        aria-label="play"
        icon={<FaPlay />}
        onClick={() => {
          const audio = document.querySelector("audio");

          audio?.play();
        }}
      />
      <audio controls />
    </Flex>
  );
}

export default ChatInput;
