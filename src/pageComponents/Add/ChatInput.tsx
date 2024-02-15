import {
  Flex,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import {
  FaArrowRight,
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
      async (event) => {
        console.log(event.data);
        chunkRef.current.push(event.data);

        const blob = new Blob(chunkRef.current, {
          type: "audio/wav",
        });
        chunkRef.current = [];

        const audioURL = URL.createObjectURL(blob);
        console.log(audioURL);

        const payload = {
          user: "user1",
          mp3: audioURL,
          text: "안녕하세요. 오늘은 할머니와 할아버지의 옛날 결혼식 얘기를 해보고 싶어요.",
          first_chatting: false,
          is_text: true,
        };

        try {
          const res = await axios.post("/chat", payload);

          console.log(res);

          // const res = await fetch("/chat", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json", // 요청 본문의 형식을 JSON으로 지정
          //   },
          //   body: JSON.stringify(payload), // 요청 본문에 데이터를 JSON 문자열로 변환하여 포함
          // });
          // if (!res.ok) {
          //   throw new Error("Network response was not ok");
          // }
          // // 서버에서 받은 응답을 JSON 형식으로 파싱
          // const responseData = await res.json();
          // console.log(responseData);
          // 응답 데이터를 처리하는 코드
        } catch (error: any) {
          console.error(
            "There was a problem with your fetch operation:",
            error.message
          );
        }
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
    </Flex>
  );
}

export default ChatInput;
